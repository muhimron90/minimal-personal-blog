import styled from 'styled-components';

const Section = styled.section`
    height: 100vh;
    max-height: 1100px;
    position: relative;
    overflow: hidden;
`;
const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    position: relative;
`;

const Title = styled.h1`
    color: #888;
`;
const Hero = { Section, Wrapper, Title };
export default Hero;
