import styles from './AboutCard.module.css'; // ✅ CSS module

const AboutCard = () => {
    return (
        <div className={`${styles.about} reveal`}>
            <h2>ABOUT</h2>
            <p>
                I develop modern web applications and apply data analysis to optimize performance, enhance usability, and build insight-driven digital solutions.
            </p>
        </div>
    );
};

export default AboutCard;