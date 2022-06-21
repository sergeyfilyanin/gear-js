import { Metadata, decodeHexTypes } from '@gear-js/api';

import { META_FIELDS } from './const';

import { getPreformattedText } from 'helpers';

export const getMetaProperties = (metaWasm: Metadata): Metadata => {
  const decodedTypes = decodeHexTypes(metaWasm.types ?? '');

  const valuesFromMeta = META_FIELDS.reduce((result, metaKey) => {
    const metaValue = metaWasm[metaKey];

    if (metaKey !== 'types' && metaValue) {
      // eslint-disable-next-line no-param-reassign
      result[metaKey] = metaValue;
    }

    return result;
  }, {} as Metadata);

  valuesFromMeta.types = getPreformattedText(decodedTypes);

  return valuesFromMeta;
};