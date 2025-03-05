import Image from 'next/image';
import React, { useContext } from 'react';
import Fade from 'react-reveal/Fade';
import expImgBlack from '../../assets/svg/experience/expImgBlack.svg';
import expImgWhite from '../../assets/svg/experience/expImgWhite.svg';
import { ThemeContext } from '../../contexts/theme-context';
import styles from '../../styles/certificates.module.css';

function CertificateCard({ id, title, organization, date, link}) {
    const { theme } = useContext(ThemeContext);

    return (
        <Fade bottom>
            <div key={id} className={`${styles.experienceCard}`} style={{ backgroundColor: theme.quaternary }}>
                <div className={styles.expcardImg} style={{ backgroundColor: theme.primary }}>
                    <Image src={theme.type === 'light' ? expImgBlack : expImgWhite} alt="" width={36} height={36} />
                </div>
                <div className={styles.experienceDetails}>
                    <div className={styles.jobInfo}>
                        <h4 style={{ color: theme.tertiary }}>{title}</h4>
                        <h5 style={{ color: theme.tertiary }}>{organization}</h5>
                    </div>
                   <a href={link}><h6 style={{ color: theme.primary }}>View Certificate</h6></a>
                </div>
            </div>
        </Fade>
    )
}

export default CertificateCard
