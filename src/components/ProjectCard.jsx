import styles from './ProjectCard.module.css';

function ProjectCard({ title, description, link }) {
    return (
        <div className={styles.project}>
            <h3>{title}</h3>
            <p>{description}</p>
            {link && (
                <a href={link} target="_blank" rel="noopener noreferrer">
                    View here
                </a>
            )}
        </div>
    );
}

export default ProjectCard;