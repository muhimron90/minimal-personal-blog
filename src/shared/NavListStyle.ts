import { ZIndex } from 'src/themes/constants';
import styled from 'styled-components';
const Container = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    background: #cd853f;
    display: grid;
    align-items: center;
    top: 0;
    left: 0;
    transition: 0.3s ease-in-out;
    opacity: 1;
    z-index: ${ZIndex.z50};
`;
const Icon = styled.div`
    cursor: pointer;
    position: absolute;
    top: 0;
    right: 0;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    background: transparent;
    margin-top: 2rem;
    margin-right: 2rem;
    outline: none;
`;
const Wrapper = styled.div``;
const Menu = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(4, 80px);
    text-align: center;
    margin-bottom: 1.5rem;
    @media screen and (min-width: 480px) {
        grid-template-rows: repeat(4, 60px);
    }
`;
const Links = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    font-size: 1.5rem;
    list-style: none;
    transition: 0.2s ease-in-out;
    &:hover {
        color: #000d1a;
    }
`;
const Btn__Wrap = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;
const Btn__Blog = styled.a`
    background: #888;
    padding: 5px 10px 5px 10px;
    font-size: 1.5rem;
`;

const NavLists = { Container, Icon, Wrapper, Menu, Links, Btn__Wrap, Btn__Blog };
export default NavLists;
