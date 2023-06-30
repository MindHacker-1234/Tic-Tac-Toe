import { isString } from 'lodash';

const resourceStore = {
  'i18n/en.json': () => require('../../i18n/en.json'),
};

export default {
  resolve: (path, baseUrl) => {
    if (!isString(path)) {
      return path;
    }
    if (
      path &&
      baseUrl &&
      !resourceStore[path] &&
      !path.startsWith('http') &&
      !path.startsWith('file:')
    ) {
      return baseUrl + (path.startsWith('/') ? '' : '/') + path;
    }
    return (resourceStore[path] && resourceStore[path]()) || path;
  },
};
