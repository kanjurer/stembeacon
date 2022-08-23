import type { AppProps } from "next/app";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import "../styles/styles.scss";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <NavBar />
            <Component {...pageProps} />
            <Footer />
        </>
    );
}

export default MyApp;
