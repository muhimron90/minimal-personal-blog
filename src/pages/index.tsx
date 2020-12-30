import Head from 'next/head';
import React from 'react';
import HeroSection from 'src/components/Hero';
import Navbar from 'src/components/Navbar';

const Home = () => {
    return (
        <div>
            <Head>
                <title>HOME</title>
            </Head>
            <main>
                <Navbar />
                <HeroSection />
            </main>
        </div>
    );
};
export default Home;
