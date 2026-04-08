import styles from "./Footer.module.css";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <p>
                &copy; {new Date().getFullYear()} Stoyan Ivanov.
            </p>
        </footer>
    );
};

export default Footer;