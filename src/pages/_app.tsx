import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from '../themes/globalStyles';
import NormalizeCss from '../themes/normalizeCss';
import defaultTheme from '../themes/theme';
const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
    return (
        <>
            <NormalizeCss />
            <ThemeProvider theme={defaultTheme}>
                <GlobalStyle />
                <Component {...pageProps} />
            </ThemeProvider>
        </>
    );
};
// export const reportWebVitals = (metric: NextWebVitalsMetric) => {
//     console.log(metric)
// };
export default MyApp;
