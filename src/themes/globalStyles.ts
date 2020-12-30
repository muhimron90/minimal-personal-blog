import { createGlobalStyle } from 'styled-components';

import { ThemeType } from './theme';
interface IProps {
    theme: ThemeType;
}

const GlobalStyle = createGlobalStyle<IProps>`
  *,
    *:after,
    *:before {
        box-sizing: border-box;
        margin : 0;
        outline :none;
    }
body {
  font-size : calc(14px + .5vw);
  font-family: 'Poppins', sans-serif;
  line-height : 1.5;
  background : ${({ theme }) => theme.white};
  color : ${({ theme }) => theme.medium};
}
html,body {
  overflow-x : hidden;
}
a { 
  text-decoration : none;
  color : ${({ theme }) => theme.dark};
}
ul {
  list-style : none;
}
`;
export default GlobalStyle;
