import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

interface HomeProps {}

const Home: NextPage<HomeProps> = () => {
    return (
        <>
            <Head>
                <title>STEMbeacon - Home</title>
                <meta
                    name="STEMbeacon"
                    content="A personal blog, but not too personal."
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
        </>
    );
};

export default Home;
