interface IZIndex<T> {
    z0: T;
    z10: T;
    z20: T;
    z30: T;
    z40: T;
    z50: T;
}
interface IColors {
    [key: string]: string;
}

const COLORS: NonNullable<IColors> = {
    text_color: '#124a63',
    text_secondary: '#b3c5cd',
    text_results: '#8cb0c0',
    primary_color: '#8cb0c0',

    background_color: '#f9f9f9',
    background_color_dark: '#f9f9f9',
    background_color_light: '#fff',

    hamburger_icon: '#333'
};

const ZIndex: NonNullable<IZIndex<number | undefined>> = {
    z0: 0,
    z10: 10,
    z20: 20,
    z30: 30,
    z40: 40,
    z50: 50
};

// export type ColorsType = typeof COLORS;
// export type ZIndexType = typeof ZIndex;
export { COLORS, ZIndex };
