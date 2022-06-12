import RealEstate from '../assets/realestate.jpg'
import WorkImg from '../assets/workImg.jpeg'

import Workorder from '../assets/workorder-app.png'
import Taskapp from '../assets/tasklist.png'
import Cerberus from '../assets/cerberus.jpg'
import Callisto from '../assets/callisto.png'

import Linux from '../assets/linux.png'
import Docker from '../assets/docker.png'
import MySQL from '../assets/mysql.png'
import ReactJS from '../assets/react.png'
import Node from '../assets/node.png'
import Azure from '../assets/azure.png'
import GitHub from '../assets/github.png'
import MongoDB from '../assets/mongo.png'

export const cardData = [
    {
        title: 'Work Order Tracking',
        demoLink: 'https://workorder.ptrwlsr.io/',
        codeLink: 'https://github.com/sirofwalls/workorder-tracker',
        image: Workorder,
    },
    {
        title: 'Basic Task App',
        demoLink: 'https://tasks.ptrwlsr.io/',
        codeLink: 'https://github.com/sirofwalls/task-app',
        image: Taskapp,
    },
    {
        title: 'Cerberus Managment Discord Bot',
        demoLink: 'https://discord.gg/qE3GtKGbuU',
        codeLink: 'https://github.com/sirofwalls/cerberus-beta',
        image: Cerberus,
    },
    {
        title: 'Callisto Music Discord Bot',
        demoLink: 'https://discord.gg/qE3GtKGbuU',
        codeLink: 'https://github.com/sirofwalls/calisto-music',
        image: Callisto,
    },
    {
        title: 'Fifth',
        demoLink: '/',
        codeLink: 'https://github.com',
        image: WorkImg,
    },
    {
        title: 'Sixth',
        demoLink: '/',
        codeLink: 'https://github.com',
        image: RealEstate,
    },
]

export const techData = [
    {name: 'Linux', icon: Linux},
    {name: 'Azure', icon: Azure},
    {name: 'Docker', icon: Docker},
    {name: 'GitHub', icon: GitHub},
    {name: 'MySQL', icon: MySQL},
    {name: 'Mongo', icon: MongoDB},
    {name: 'NodeJS', icon: Node},
    {name: 'React', icon: ReactJS},
]

export const navDava = [
    {name: 'Home', linkTo: 'home'},
    {name: 'About', linkTo: 'about'},
    {name: 'Skills', linkTo: 'skills'},
    {name: 'Work', linkTo: 'work'},
    {name: 'Contact', linkTo: 'contact'},
]

export const loading = (
    <svg role="status" className="inline w-4 h-4 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-pink-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
  </svg>
  )