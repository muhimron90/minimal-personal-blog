/* type ITheme<T> = {
    [P in keyof T]: T[P];
}; */
const defaultTheme = {
    white: '#fafafa',
    dark: '#293241',
    medium: '#555',
    light: '#8d99ae',
    primary: '#011627',
    seconday: '#ef476f'
};

export type ThemeType = typeof defaultTheme;
/* export type ThemeType<K extends keyof any, T> = {
    [P in K]: T;
}; */

// export type ThemeType : MyThemeType<string,string> = {}
export default defaultTheme;
