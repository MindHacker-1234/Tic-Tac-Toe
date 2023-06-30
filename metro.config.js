const { getDefaultConfig } = require('metro-config');

module.exports = (async () => {
    try {
        const {
            resolver: {sourceExts, assetExts}
        } = await getDefaultConfig();
        return {
            transformer: {
                babelTransformerPath: require.resolve('react-native-svg-transformer'),
                getTransformOptions: async () => ({
                    transform: {
                        experimentalImportSupport: false,
                        inlineRequires: false
                    }
                })
            },
            resolver: {
                assetExts: assetExts.filter(ext => ext !== 'svg'),
                sourceExts: [...sourceExts, 'svg']
            }
        };
    }
    catch (e) {
        console.log('error in metro config file');
    }
})();
