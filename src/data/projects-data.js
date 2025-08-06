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
        projectName: 'Organogram',
        projectDesc: 'An organization chart to view hierarchy and salary metrics of 40K Employees',
        tags: ['Vue.js', 'TailwindCSS', 'Node.js'],
        code: '',
        demo: 'https://xyjp6w-5173.csb.app/',
        image: data
    },
    {
        id: 2,
        projectName: 'My Portfolio',
        projectDesc: 'My online portfolio to enhance personal branding and showcase my capabilities ',
        tags: ['Next.js', 'TailwindCSS', 'Node.js'],
        code: '',
        demo: '/',
        image: portfolio
    },
    {
        id: 3,
        projectName: 'eArogya Portal',
        projectDesc: 'An Electronic Health Record Management Portal built for the problem statement submitted by Ministry of Health and Family Welfare in the SIH 2020',
        tags: ['Embedded JS', 'JavaScript', 'React Native', 'Node.js'],
        code: '',
        demo: 'https://github.com/wei-b0/eAarogya-Portal-for-EHR-Management',
        image: medical
    },
    {
        id: 4,
        projectName: 'SOA Web App',
        projectDesc: 'Beauty Products App with service-oriented-architecture that includes microservices and a service registry',
        tags: ['React.js', 'Express.js', 'Node.js','MongoDB','Python',],
        code: '',
        demo: 'https://github.com/Beauty-Bliss',
        image: restaurant
    },
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