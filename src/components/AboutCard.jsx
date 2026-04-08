import styles from './AboutCard.module.css'; // ✅ CSS module

const AboutCard = () => {
    return (
        <div className={`${styles.about} reveal`}>
            <h2>ABOUT</h2>
            <p>
                I design and develop modern web solutions with a strong focus on usability and efficiency, enhanced by data analysis to drive informed improvements and better outcomes.
            </p>
        </div>
    );
};

export default AboutCard;