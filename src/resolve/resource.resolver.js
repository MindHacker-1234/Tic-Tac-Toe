import { isString } from 'lodash';

const resourceStore = {
  'resources/assets/119665-tic-tac-toe-1.json': () =>
    require('../../assets/resources/assets/119665-tic-tac-toe-1.json'),
  'resources/assets/icon.png': () =>
    require('../../assets/resources/assets/icon.png'),
  'resources/assets/splash.png': () =>
    require('../../assets/resources/assets/splash.png'),
  'resources/files/skeleton.json': () =>
    require('../../assets/resources/files/skeleton.json'),
  'resources/files/spiralSpinner.json': () =>
    require('../../assets/resources/files/spiralSpinner.json'),
  'resources/images/imagelists/Avatar1.png': () =>
    require('../../assets/resources/images/imagelists/Avatar1.png'),
  'resources/images/imagelists/Avatar2.png': () =>
    require('../../assets/resources/images/imagelists/Avatar2.png'),
  'resources/images/imagelists/Avatar6.png': () =>
    require('../../assets/resources/images/imagelists/Avatar6.png'),
  'resources/images/imagelists/Avatar_5.png': () =>
    require('../../assets/resources/images/imagelists/Avatar_5.png'),
  'resources/images/imagelists/Avatar_8.png': () =>
    require('../../assets/resources/images/imagelists/Avatar_8.png'),
  'resources/images/imagelists/Screenshot_2022-06-19_at_3.38.12_AM_2x.png':
    () =>
      require('../../assets/resources/images/imagelists/Screenshot_2022-06-19_at_3.38.12_AM_2x.png'),
  'resources/images/imagelists/Screenshot_2023-05-27_155447.png': () =>
    require('../../assets/resources/images/imagelists/Screenshot_2023-05-27_155447.png'),
  'resources/images/imagelists/Screenshot_2023-05-27_160337.png': () =>
    require('../../assets/resources/images/imagelists/Screenshot_2023-05-27_160337.png'),
  'resources/images/imagelists/Screenshot_2023-05-28_163729.png': () =>
    require('../../assets/resources/images/imagelists/Screenshot_2023-05-28_163729.png'),
  'resources/images/imagelists/Screenshot_2023-05-28_165042.png': () =>
    require('../../assets/resources/images/imagelists/Screenshot_2023-05-28_165042.png'),
  'resources/images/imagelists/Screenshot_2023-05-28_165853.png': () =>
    require('../../assets/resources/images/imagelists/Screenshot_2023-05-28_165853.png'),
  'resources/images/imagelists/Screenshot_2023-05-28_180330.png': () =>
    require('../../assets/resources/images/imagelists/Screenshot_2023-05-28_180330.png'),
  'resources/images/imagelists/Screenshot_2023-05-28_180340.png': () =>
    require('../../assets/resources/images/imagelists/Screenshot_2023-05-28_180340.png'),
  'resources/images/imagelists/Screenshot_2023-05-30_170050.png': () =>
    require('../../assets/resources/images/imagelists/Screenshot_2023-05-30_170050.png'),
  'resources/images/imagelists/Screenshot_2023-05-30_170103.png': () =>
    require('../../assets/resources/images/imagelists/Screenshot_2023-05-30_170103.png'),
  'resources/images/imagelists/Screenshot_2023-05-30_170116.png': () =>
    require('../../assets/resources/images/imagelists/Screenshot_2023-05-30_170116.png'),
  'resources/images/imagelists/default-image.png': () =>
    require('../../assets/resources/images/imagelists/default-image.png'),
  'resources/images/imagelists/loader.gif': () =>
    require('../../assets/resources/images/imagelists/loader.gif'),
  'resources/images/imagelists/spinner-small.gif': () =>
    require('../../assets/resources/images/imagelists/spinner-small.gif'),
  'resources/images/logos/Other/logo.png': () =>
    require('../../assets/resources/images/logos/Other/logo.png'),
  'resources/images/logos/Other/wavemaker_62x62.png': () =>
    require('../../assets/resources/images/logos/Other/wavemaker_62x62.png'),
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
