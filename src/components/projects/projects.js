import React, { useContext } from 'react';
import { HiArrowRight } from "react-icons/hi";
import { ThemeContext } from '../../contexts/theme-context';
import { projectsData } from '../../data/projects-data';
import styles from '../../styles/projects.module.css';
import Link from '../link';
import SingleProject from './project-card/project-card';

function Projects() {

    const { theme } = useContext(ThemeContext);


    return (
        <>
            {projectsData.length > 0 && (
                <div className={styles.projects} id="projects" style={{ backgroundColor: theme.secondary }}>
                    <div className={styles.projectsHeader}>
                        <h1 style={{ color: theme.primary }}>Projects</h1>
                    </div>
                    <div className={styles.projectsBody}>
                        <div className={styles.projectsBodyContainer}>
                            {projectsData.slice(0, 4).map(project => (
                                <SingleProject
                                    className="projectCard"
                                    theme={theme}
                                    key={project.id}
                                    id={project.id}
                                    name={project.projectName}
                                    desc={project.projectDesc}
                                    tags={project.tags}
                                    code={project.code}
                                    demo={project.demo}
                                    image={project.image}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            )}

        </>
    )
}

export default Projects
