import { ZIndex } from 'src/themes/constants';
import { IBlogBtn } from 'src/types';
import styled, { css } from 'styled-components';

const Nav = styled.nav`
    height: 60px;
    width: 100%;
    background: #252525;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
    position: fixed;
    z-index: ${ZIndex.z30};
`;
const NavLinks = css`
    color: #fff;
    display: flex;
    flex-shrink: 1;
    align-items: center;
    justify-content: center;
    height: 100%;
    cursor: pointer;
`;

const ALink = styled.a`
    ${NavLinks}
    padding: 0 1rem;
`;
const Logo = styled.a`
    ${NavLinks}
`;
const MenuBar = styled.div`
    display: none;

    @media screen and (max-width: 768px) {
        display: flex;
        cursor: pointer;
        justify-content: center;
        align-items: center;
        /*  transform: translate(50%, 25%); */
    }
`;
const NavMenu = styled.div`
    display: flex;
    align-items: center;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;
/* const NavMenuLinks = styled(Link)`
    ${NavLinks}
`;
 */
/*  margin-right: 24px;  */
const NavButton = styled.div`
    display: flex;
    align-items: center;
    margin-right: 0.24rem;
    @media screen and (max-width: 768px) {
        display: none;
    }
`;

const BlogBtn = styled.a<IBlogBtn>`
    background: ${({ primary }) => (primary ? '#000d1a' : '#CD853f')};
    white-space: nowrap;
    outline: none;
    border: none;
    min-width: 100px;
    max-width: 200px;
    cursor: pointer;
    text-decoration: none;
    transition: 0.3s;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: ${({ big }) => (big ? '16px 40px' : '14px 24px')};
    color: ${({ primary }) => (primary ? '#fff' : '#000d1a')};
    font-size: ${({ big }) => (big ? '20px' : '14px')};
    &:hover {
        transform: translateY(-2px);
    }
`;
export { ALink, BlogBtn, Logo, MenuBar, Nav, NavButton, NavLinks, NavMenu };
