import { Container } from '@material-ui/core';
import React, { useContext, useState } from 'react';
import experience from '../../assets/lottie/development.json';
import { ThemeContext } from '../../contexts/theme-context';
import { experienceData } from '../../data/experience-data';
import styles from '../../styles/experience.module.css';
import AnimationLottie from '../animation';
import { HiArrowDown, HiArrowUp } from "react-icons/hi";
import ExperienceCard from './experience-card';

function Experience() {
    const [open, setOpen] = useState(false);
    const { theme } = useContext(ThemeContext);
    const handleOnClick = () => {
        setOpen(!open); // Toggle open state
    }
    return (
        <div style={{ backgroundColor: theme.secondary }}>
            <Container className={styles.experience} id="experience">
                <div className={styles.experienceBody}>
                    <div className={styles.experienceImage}>
                        <AnimationLottie animationPath={experience} />
                    </div>

                    <div className={styles.experienceDescription} id="fullProjects">
                        <h1 style={{ color: theme.primary }}>Experience</h1>
                        {open ? (
                            experienceData.map(exp => (
                                <ExperienceCard
                                    key={exp.id}
                                    id={exp.id}
                                    jobtitle={exp.jobtitle}
                                    company={exp.company}
                                    startYear={exp.startYear}
                                    endYear={exp.endYear}
                                />
                            ))
                        ) : (
                            experienceData.slice(0, 3).map(exp => (
                                <ExperienceCard
                                    key={exp.id}
                                    id={exp.id}
                                    jobtitle={exp.jobtitle}
                                    company={exp.company}
                                    startYear={exp.startYear}
                                    endYear={exp.endYear}
                                />
                            ))
                        )}
                        <div className={styles.experienceViewAll}>
                            {!open ? <button onClick={handleOnClick} className="text-[#15202B] bg-[#8B98A5] hover:bg-[#1D9BF0] transition-colors px-4 py-2 rounded-full flex items-center justify-center space-x-2">
                                View All
                                <HiArrowDown className="text-[#8B98A5] bg-[#15202B] w-[40px] h-[40px] p-2 text-base rounded-[50%] cursor-pointer transition-colors ml-2" />
                            </button> :
                               <button onClick={handleOnClick} className="text-[#15202B] bg-[#8B98A5] hover:bg-[#1D9BF0] transition-colors px-4 py-2 rounded-full flex items-center justify-center space-x-2">
                                    Collapse
                                <HiArrowUp className="text-[#8B98A5] bg-[#15202B] w-[40px] h-[40px] p-2 text-base rounded-[50%] cursor-pointer transition-colors ml-2" />
                            </button> }
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Experience
