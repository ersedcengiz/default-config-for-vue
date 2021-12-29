module.exports = {
    pluginOptions: {
        i18n: {
            locale: 'tr',
            fallbackLocale: 'tr',
            localeDir: 'locales',
            enableInSFC: false
        }
    },
    devServer: {
        host: '0.0.0.0',
        public: '0.0.0.0:8080'
    },
    lintOnSave: false

}