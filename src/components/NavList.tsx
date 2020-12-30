import Link from 'next/link';
import React from 'react';
import { Links } from 'src/contents';
import NavLists from 'src/shared/NavListStyle';

import Close from './svg/Close';

const NavList = (): JSX.Element => {
    return (
        <NavLists.Container>
            <NavLists.Icon>
                <Close width="36" height="36" />
            </NavLists.Icon>
            <NavLists.Wrapper>
                <NavLists.Menu>
                    {Links.map((item, index) => (
                        <Link key={index} href={item.link} passHref>
                            <NavLists.Links>{item.title}</NavLists.Links>
                        </Link>
                    ))}
                </NavLists.Menu>
                <NavLists.Btn__Wrap>
                    <Link href="/blog/" passHref>
                        <NavLists.Btn__Blog>Blogs →</NavLists.Btn__Blog>
                    </Link>
                </NavLists.Btn__Wrap>
            </NavLists.Wrapper>
        </NavLists.Container>
    );
};
export default NavList;
