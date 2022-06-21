// ** General constants **
export const ENVIRONMENT = typeof window === 'undefined' ? 'server' : 'client';
export const IS_SERVER = ENVIRONMENT === 'server';
export const IS_CLIENT = ENVIRONMENT === 'client';

// ** Websites currently supported for handling errors base url**
export const STACKOVERFLOW_BASE_URL = 'https://stackoverflow.com/search?q=[js]+';
export const MEDIUM_BASE_URL = 'https://medium.com/search?q=';
export const DEV_TO_BASE_URL = 'https://dev.to/search?q=';

