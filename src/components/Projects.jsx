import ProjectCard from "./ProjectCard";
import styles from "./Projects.module.css";

function Projects() {
    const projectData = [
        { title: "Pazardzhik Bus Map", description: "Online web application for the bus map with routes for the city of Pazardzhik, Bulgaria.", link: "https://github.com/stoyan005/pazardzhik-bus-map" },
        { title: "SDI & Sons LTD.", description: "A sleek and responsive website that showcases services, and provides an easy way for clients to connect.", link: "https://sdi-sons.vercel.app/" },
        { title: "Sky Engineering Project (WIP)", description: "A team management dashboard for Sky Engineering featuring real-time chat, team overviews, and tools to keep collaboration organized and efficient.", link: "https://github.com/stoyan005/Axiom-Sky-Engineering-Project" },
    ];

    return (
        <section className={`${styles.projects} reveal`}>
            <h2 className={styles.title}>PROJECTS</h2>
            <div className={styles.grid}>
                {projectData.map((project, index) => (
                    <ProjectCard
                        key={index}
                        title={project.title}
                        description={project.description}
                        link={project.link}
                    />
                ))}
            </div>
        </section>
    );
}

export default Projects;