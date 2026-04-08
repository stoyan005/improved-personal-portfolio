import ProjectCard from "./ProjectCard";
import styles from "./Projects.module.css";

function Projects() {
    const projectData = [
        { title: "Project One", description: "Describe something impressive here." },
        { title: "Project Two", description: "Describe something impressive here." },
        { title: "Project Three", description: "Describe something." },
    ];

    return (
        <section className={styles.projects}>
            <h2 className={styles.title}>PROJECTS</h2>
            <div className={styles.grid}>
                {projectData.map((project, index) => (
                    <ProjectCard
                        key={index}
                        title={project.title}
                        description={project.description}
                    />
                ))}
            </div>
        </section>
    );
}

export default Projects;