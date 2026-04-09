import { useState } from "react";
import styles from './Information.module.css';

const Information = () => {
    const [active, setActive] = useState(null);
    const [animate, setAnimate] = useState(null);

    const toggle = (section) => {
        setAnimate(false);

        setTimeout(() => {
            setActive(section);
            setAnimate(true);
        }, 50);
    };

    return (
        <div className={`${styles.hero} reveal`}>
            <h1>STOYAN IVANOV</h1>
            <p>WEB DEVELOPER • DIGITAL CREATOR • DATA ANALYST </p>


            <div className={`${styles.contact} reveal`}>
                <button onClick={() => toggle("email")}>Email</button>
                <button onClick={() => toggle("linkedin")}>LinkedIn</button>
                <button onClick={() => toggle("projects")}>Github Projects</button>
            </div>

            <div className={`${styles.dropdown} ${animate ? styles.show : ""}`}>
                {active === "email" && (
                    <p>ivanov.stoyan200@gmail.com</p>
                )}

                {active === "linkedin" && (
                    <a href="https://github.com/stoyan005" target='_blank'>
                        View LinkedIn Profile
                    </a>
                )}

                {active === "projects" && (
                    <a href='https://github.com/stoyan005' target='_blank'>
                        View Github Projects
                    </a>
                )}
            </div>
        </div >
    )
};

export default Information;