import Link from 'next/link';
import React, { useState } from 'react';
import { Links } from 'src/contents';
import { ALink, BlogBtn, MenuBar, Nav, NavButton, NavMenu } from 'src/shared/NavbarStyle';
import Logo from 'src/shared/TextElements';

import NavList from './NavList';
import Close from './svg/Close';
import Hamburger from './svg/Hamburger';
import HeadLogo from './svg/HeadLogo';

const Navbar = (): JSX.Element => {
    const [active, setActive] = useState<boolean>(false);

    const handleActive = () => {
        setActive((prev) => !prev);
    };
    return (
        <>
            <NavList />
            <Nav>
                <Link href="/" passHref>
                    <Logo style={{ marginTop: 0.05 * 100 }}>
                        <HeadLogo width="124" height="36" />
                    </Logo>
                </Link>

                <MenuBar onClick={handleActive}>
                    {active ? (
                        <Close width="24" height="24" />
                    ) : (
                        <Hamburger width="24" height="24" />
                    )}
                </MenuBar>
                <NavMenu>
                    {Links.map((item, index) => (
                        <Link key={index} href={item.link} passHref>
                            <ALink>{item.title}</ALink>
                        </Link>
                    ))}
                </NavMenu>
                <NavButton>
                    <Link href="/blog/" passHref>
                        <BlogBtn primary={true} big={false}>
                            Blogs
                        </BlogBtn>
                    </Link>
                </NavButton>
            </Nav>
        </>
    );
};

export default Navbar;
