import { Grid } from '@material-ui/core';
import React, { useContext} from 'react';
import { SingleProject } from '../../components';
import { ThemeContext } from '../../contexts/theme-context';
import { projectsData } from '../../data/projects-data';
import styles from '../../styles/projectPage.module.css';
import { Navbar } from '../../components';

function ProjectPage() {
    const { theme } = useContext(ThemeContext);

    return (
        <div className={styles.projectPage} style={{ backgroundColor: theme.secondary }}>
            <Navbar title="My Projects" />
            <div className={styles.projectPageContainer}>
                <div className={styles.projectContainer}>
                    <Grid className={styles.projectGrid}
                        container direction="row" alignItems="center"
                        justifyContent="center">
                        {projectsData.map(project => (
                            <SingleProject
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
                    </Grid>
                </div>
            </div>
        </div>
    )
}

export default ProjectPage
