import type { NextPage } from "next";
import styles from "./Footer.module.scss";

const Footer: NextPage = () => {
    return (
        <footer className={styles.footer}>
            <section>
                <h2>Subscribe to my newsletter</h2>
                <form>
                    <label>Email:</label>
                    <input type="email" />
                    <button type="submit">Subscribe</button>
                </form>
            </section>
            <section>
                Contact Me:
                <ul className={styles.contactMe}>
                    <li>
                        <a>GitHub</a>
                    </li>
                    <li>
                        <a>LinkedIn</a>
                    </li>
                    <li>
                        <a>Stack Overflow</a>
                    </li>
                </ul>
            </section>
        </footer>
    );
};

export default Footer;
