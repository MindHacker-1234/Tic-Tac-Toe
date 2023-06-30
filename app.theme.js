import { isIos} from '@wavemaker/app-rn-runtime/core/utils';
import themeVariables from '@wavemaker/app-rn-runtime/styles/theme.variables';
import BASE_THEME from '@wavemaker/app-rn-runtime/styles/theme';
import fontConfig from './font.config';

const themes = {
    "${tic-tac-toe1}": {
        android: {
            style: () => require('./theme/${tic-tac-toe1}/android/style.js').default,
            variables: () => require('./theme/${tic-tac-toe1}/android/variables.js').default,
            getAsset: () => require('./theme/${tic-tac-toe1}/android/asset.resolver.js').default.resolve
        },
        ios: {
            style: () => require('./theme/${tic-tac-toe1}/ios/style.js').default,
            variables: () => require('./theme/${tic-tac-toe1}/ios/variables.js').default,
            getAsset: () => require('./theme/${tic-tac-toe1}/ios/asset.resolver.js').default.resolve
        }
    },
};

let selectedTheme = null;
let getAsset = null;
const appTheme = BASE_THEME.$new('app-theme', {});
export const setAppTheme = (themeName) => {
    return Promise.resolve().then(() => {
        selectedTheme = (themes[themeName]||{})[isIos() ? 'ios': 'android'];
        if (selectedTheme) {
            Object.assign(themeVariables.INSTANCE, selectedTheme.variables());
            getAsset = selectedTheme.getAsset();
            if (fontConfig.baseFont) {
                themeVariables.baseFont = fontConfig.baseFont;
            }
            BASE_THEME.reset();
            appTheme.reset(selectedTheme.style());
        }
    });
};
export const resolveThemeAsset = (path) => (getAsset && getAsset(path));
export default appTheme;