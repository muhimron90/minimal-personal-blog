import React from 'react';
import Container from 'src/shared/Container';
import HeaderElement from 'src/shared/HeaderElement';
import Logo from 'src/shared/TextElements';

const Header: React.FC = (): JSX.Element => {
    const svgPath = Object.freeze(['m1', 'm2']);
    return (
        <HeaderElement>
            <Container>
                <Logo></Logo>
                {svgPath.map((i, index) => (
                    <span key={index}>{i}</span>
                ))}
            </Container>
        </HeaderElement>
    );
};
export default Header;
