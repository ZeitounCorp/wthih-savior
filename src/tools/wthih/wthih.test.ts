import wthih, { SupportedWebsites } from './wthih';

describe('wtith', () => {
  test('should open given error in stackoverflow', () => {
    const error = new Error('This is an error');
    const website = 'stackoverflow';
    const options = {
      openBlank: true,
      printLinks: false,
    };
    expect(() => wthih({ website, error, options })).not.toThrow();
  });

  test('should open given error in medium', () => {
    const error = new Error('This is an error');
    const website = 'medium';
    const options = {
      openBlank: true,
      printLinks: false,
    };
    expect(() => wthih({ website, error, options })).not.toThrow();
  });

  test('should open given error in dev.to', () => {
    const error = new Error('This is an error');
    const website = 'dev.to';
    const options = {
      openBlank: true,
      printLinks: false,
    };
    expect(() => wthih({ website, error, options })).not.toThrow();
  });

  test('should open given error in websites contained in the array', () => {
    const error = new Error('This is an error');
    const website = ['stackoverflow', 'medium', 'dev.to'] as SupportedWebsites[];
    const options = {
      openBlank: true,
      printLinks: false,
    };
    expect(() => wthih({ website, error, options })).not.toThrow();
  });
});
