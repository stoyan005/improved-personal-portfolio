import styles from './ProjectCard.module.css';

function ProjectCard({ title, description, link, image }) {
    return (
        <div className={styles.project}>
            <div className={styles.image_wrapper}>
                {image && <img src={image} alt={title} className={styles.project_image} />}
            </div>

            <h3>{title}</h3>
            <p>{description}</p>

            {link && (
                <a href={link} target="_blank" rel="noopener noreferrer">
                    View here &rarr;
                </a>
            )}
        </div>
    );
}

export default ProjectCard;