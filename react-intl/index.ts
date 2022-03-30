import { useContext } from 'react';

import { IntlContext } from 'context/intl';

import replace from 'react-string-replace';

const reg = /\{([a-z|A-Z|0-9|.]+)\}/g;

interface KeyValue {
  [key: string]: any;
}

export const formatMessageWithParams = (
  message: string,
  replacements: KeyValue
): any => {
  const output = replace(message, reg, (prop: any) => replacements[prop]);

  return output;
};

export const useIntl = () => {
  const messages: KeyValue = useContext(IntlContext);

  return {
    messages,
    formatMessageWithParams,
  };
};
