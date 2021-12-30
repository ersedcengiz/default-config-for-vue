const colorThemes = ['default', 'red', 'blue', 'black', 'green']
const UIModule = {
    state: () => ({
        themeName: 'tLight',
        colorTheme: 'theme-default'
    }),
    mutations: {
        themeLight(state) {
            state.themeName = 'tLight'
            document.documentElement.setAttribute('data-theme', 'tLight')
        },
        themeDark(state) {
            state.themeName = 'tDark'
            document.documentElement.setAttribute('data-theme', 'tDark')
        },
        colorTheme(state, theme) {
            state.colorTheme = 'theme-' + theme
        }
    },
    actions: {
        changeTheme(context) {
            if (context.state.themeName === 'tDark') {
                context.commit('themeLight')
            } else if (context.state.themeName === 'tLight') {
                context.commit('themeDark')
            }
        },
        changeColorTheme(context, theme) {
            if (colorThemes.includes(theme)) {
                context.commit('colorTheme', theme)
            }
        }
    },
    namespaced: true
}

// eslint-disable-next-line eol-last
export default UIModule