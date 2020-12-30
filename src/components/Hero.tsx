import React from 'react';
import Hero from 'src/shared/Hero';

const HeroSection = (): JSX.Element => {
    return (
        <Hero.Section>
            <Hero.Wrapper>
                <Hero.Title>HERO</Hero.Title>
            </Hero.Wrapper>
        </Hero.Section>
    );
};

export default HeroSection;
