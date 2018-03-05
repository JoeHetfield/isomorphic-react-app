import config from 'config';

// eslint-disable-next-line import/prefer-default-export
export const getPreference = () => {
  const match = navigator.languages.filter(lang => config.supportedLanguages.includes(lang));
  return match[0] || config.defaultLanguage;
};
