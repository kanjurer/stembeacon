import type { AppProps } from "next/app";

import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

import "../styles/styles.scss";

function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <NavBar />
            <Component {...pageProps} />
            <Footer />
        </>
    );
}

export default App;
