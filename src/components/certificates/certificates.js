import { Container } from '@material-ui/core';
import React, { useContext, useState } from 'react';
import certificate from '../../assets/lottie/coding.json';
import { ThemeContext } from '../../contexts/theme-context';
import { certificateData } from '../../data/certificates-data';
import styles from '../../styles/certificates.module.css';
import AnimationLottie from '../animation';
import CertificateCard from './certificate-card';

function Certificates() {
    const { theme } = useContext(ThemeContext);
    return (
        <div style={{ backgroundColor: theme.secondary }}>
            <Container className={styles.experience} id="experience">
                <div className={styles.experienceBody}>
                    <div className={styles.experienceDescription} id="fullProjects">
                        <h1 style={{ color: theme.primary }}>Experience</h1>
                            {certificateData.map(exp => (
                                <CertificateCard
                                    key={exp.id}
                                    id={exp.id}
                                    title={exp.title}
                                    organization={exp.organization}
                                    link={exp.link}
                                />
                            ))}
                    </div>
                    <div className={styles.experienceImage}>
                        <AnimationLottie animationPath={certificate} />
                    </div>
                </div>
                

            </Container>
        </div>
    )
}

export default Certificates
