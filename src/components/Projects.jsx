import ProjectCard from "./ProjectCard";
import styles from "./Projects.module.css";

function Projects() {
    const projectData = [
        {
            title: "Pazardzhik Bus Map",
            description: "An interactive web application designed to help users explore and navigate bus routes across Pazardzhik, Bulgaria with ease.",
            link: "https://github.com/stoyan005/pazardzhik-bus-map",
            image: "/images/pazardzhik_logo.png"
        },
        {
            title: "SDI & Sons LTD.",
            description: "A sleek and responsive website that showcases services, and provides an easy way for clients to connect.",
            link: "https://sdi-sons.vercel.app/",
            image: "/images/SDI_logo_transparent.webp"
        },
        {
            title: "Sky Engineering Project (WIP)",
            description: "A team management dashboard for Sky Engineering featuring real-time chat, team overviews, and tools to keep collaboration organized and efficient.",
            link: "https://github.com/stoyan005/Axiom-Sky-Engineering-Project",
            image: "/images/work_in_progress.jpg"
        }
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
                        image={project.image}
                    />
                ))}
            </div>
        </section>
    );
}

export default Projects;