import styles from './ProjectCard.module.css';

function ProjectCard({ title, description }) {
    return (
        <div className={styles.project}>
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    );
}

export default ProjectCard;