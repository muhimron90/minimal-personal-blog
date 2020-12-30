import Head from 'next/head';
import Navbar from 'src/components/Navbar';

const About = (): JSX.Element => {
    return (
        <div>
            <Head>
                <title>About</title>
            </Head>
            <main>
                <Navbar />
            </main>
        </div>
    );
};
export default About;
