import ieee from '../assets/svg/projects/ieee.svg'
import data from '../assets/svg/projects/data.svg'
import beauty from '../assets/svg/projects/beauty.svg'
import medical from '../assets/svg/projects/medical.svg'
import restaurant from '../assets/svg/projects/restaurant.svg'
import portfolio from '../assets/svg/projects/portfolio.svg'
import ecomm from '../assets/svg/projects/ecomm.svg'

export const projectsData = [
    {
        id: 1,
        projectName: 'eArogya Portal',
        projectDesc: 'An Electronic Health Record Management Portal built for the problem statement submitted by Ministry of Health and Family Welfare in the SIH 2020',
        tags: ['Embedded JS', 'JavaScript', 'React Native', 'Node.js'],
        code: 'https://github.com/wei-b0/eAarogya-Portal-for-EHR-Management',
        demo: 'https://www.youtube.com/watch?v=mlPB1FBxMQo',
        image: medical
    },
    {
        id: 2,
        projectName: 'Restaurant Web App',
        projectDesc: 'My first ever full-stack web application using modern web technologies',
        tags: ['React.js', 'Express.js', 'Node.js','MongoDB'],
        code: 'https://github.com/KLS-Gogte-Institute-of-Technology-bgm/sd-lab-project-refactor-batch13',
        demo: 'https://restaurant-management-system-d4c4ecff8ad0.herokuapp.com/home',
        image: restaurant
    },
    {
        id: 3,
        projectName: 'My Portfolio',
        projectDesc: 'My online portfolio to enhance personal branding and showcase my capabilities ',
        tags: ['Next.js', 'TailwindCSS', 'Node.js'],
        code: 'https://github.com/Larii2024/developer-portfolio-nextjs',
        demo: '/',
        image: portfolio
    },
    {
        id: 4,
        projectName: 'IEEE GIT Website',
        projectDesc: 'A static HTML website built on the contest guidelines organized by IEEE-GIT',
        tags: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
        code: 'https://github.com/Larii2024/IEEE_GIT-Website-Contest-Refactor',
        demo: 'https://larii2024.github.io/IEEE_GIT-Website-Contest-Refactor/',
        image: ieee
    }
    
]


// Do not remove any fields.
// Leave it blank instead as shown below

/* 
{
    id: 1,
    projectName: 'Car Pooling System',
    projectDesc: '',
    tags: ['Flutter', 'React'],
    code: '',
    demo: '',
    image: ''
}, 
*/