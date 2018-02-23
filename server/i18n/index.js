import fs from 'fs';
import { addLocaleData } from 'react-intl';
import en from 'react-intl/locale-data/en';
import ru from 'react-intl/locale-data/ru';

import config from '../config';

addLocaleData([...ru, ...en]);

const messages = {};
const localeData = {};

config.supportedLanguages.forEach((locale) => {
  const localeDataPath = `./node_modules/react-intl/locale-data/${locale}.js`;
  localeData[locale] = fs.readFileSync(localeDataPath).toString();
  // eslint-disable-next-line import/no-dynamic-require, global-require
  messages[locale] = require(`./lang/${locale}.json`);
});

export { messages };
export { localeData };
