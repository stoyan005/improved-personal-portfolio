import styles from './AboutCard.module.css'; // ✅ CSS module

const AboutCard = () => {
    return (
        <div className={styles.about}>
            <h2>ABOUT</h2>
            <p>
                I create modern, minimal, and high-performing websites. My focus is on
                clean design, strong identity, and building digital experiences that
                feel effortless.
            </p>
        </div>
    );
};

export default AboutCard;