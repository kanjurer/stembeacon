import type { NextPage } from "next";
import Head from "next/head";
import BlogLayout from "../../components/BlogLayout";

const About: NextPage = () => {
    return (
        <>
            <Head>
                <title>STEMbeacon - Categories</title>
                <meta
                    name="STEMbeacon"
                    content="A personal blog, but not too personal."
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <h1>Howdy Learners!</h1>
                <p>
                    I am just a passionate mathematician and computer science
                    undergrad curious about a thing or two. To teach is to learn
                    twice - is what I believe in and what encouraged me to write
                    more blogs. I only blog about things that I like. If you
                    like my content, feel free to reach out to me as I love
                    appreciations :3
                </p>
            </main>
        </>
    );
};

export default About;
