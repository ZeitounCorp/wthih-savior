import { IS_CLIENT, IS_SERVER, DEV_TO_BASE_URL, MEDIUM_BASE_URL, STACKOVERFLOW_BASE_URL } from '../../utils';
import open from 'open';

// ** Mapping of website with their base url **
export const websitesMapping = {
  stackoverflow: STACKOVERFLOW_BASE_URL,
  medium: MEDIUM_BASE_URL,
  'dev.to': DEV_TO_BASE_URL,
};

// ** Websites currently supported for handling errors **
export type SupportedWebsites = 'stackoverflow' | 'medium' | 'dev.to';

// ** Define accepted options to be passed to the function **
export interface WthihOptions {
  openBlank?: boolean; // Open the link(s) in a new tab/window ONLY WHEN ENVIRONMENT === 'client'
  printLinks?: boolean; // Print the link(s) in the console
  printError?: boolean; // Print the error in the console
}

// ** Tool accepted parameters **
export interface WthihProps {
  website: SupportedWebsites | SupportedWebsites[];
  error: Error;
  options: WthihOptions;
}

// ** Function to encode error message, depends on ENVIRONMENT **
export const encodeUriErrorMessageWithBaseUrl = (message: string, baseUrl: string): string => {
  let encoded = '';
  if (IS_CLIENT) {
    encoded = encodeURI(message);
  } else if (IS_SERVER) {
    encoded = encodeURIComponent(message);
  } else {
    encoded = message.replace(/\s/g, '+');
  }
  return `${baseUrl}${encoded}`;
};

// ** Function to parse which website(s) to use **
export const parseWebsite = (website: SupportedWebsites | SupportedWebsites[]): string[] => {
  if (typeof website === 'string') {
    return [(websitesMapping[website] as string) || ''].filter((url) => url !== '');
  } else if (Array.isArray(website)) {
    return website.map((websiteUrl) => (websitesMapping[websiteUrl] as string) || '').filter((url) => url !== '');
  }
  return [];
};

// ** Function that returns the link(s) to the website(s) **
export const getLinks = (website: SupportedWebsites | SupportedWebsites[], error: Error): string[] => {
  const websiteUrls = parseWebsite(website);
  return websiteUrls.map((websiteUrl) => {
    const urlWithQuery = encodeUriErrorMessageWithBaseUrl(error.message, websiteUrl);
    return urlWithQuery;
  });
};

const wthih = ({ website, error, options }: WthihProps): void => {
  const { openBlank = true, printLinks = false, printError = true } = options;
  const links = getLinks(website, error); // Get the links to the website(s) the user wants to use to handle the error and display help from
  //** Display infos inside the console (environment indep) */
  if (printLinks) {
    console.log(links);
  }
  if (printError) {
    console.log(error);
  }
  //** Handle link opening depending on the environment */
  if (IS_CLIENT) {
    links.forEach((url) => {
      if (openBlank) {
        window.open(url, '_blank');
      } else {
        window.open(url, '_self');
      }
    });
  } else if (IS_SERVER) {
    links.forEach((url) => {
      console.log(url);
      open(url);
    });
  } else {
    console.log('No environment detected');
    return;
  }
};

export default wthih;
