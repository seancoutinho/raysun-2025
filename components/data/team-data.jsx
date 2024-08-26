import team1 from "../../public/assets/img/team/brian-munyawarara.png";
import team2 from "../../public/assets/img/team/tino-chasara.jpeg"
import team3 from "../../public/assets/img/team/rumbidzayi-gwelo.png";
import team4 from "../../public/assets/img/team/team-4.jpg";
import team5 from "../../public/assets/img/team/team-5.jpg";
import team6 from "../../public/assets/img/team/team-6.jpg";

const teamData = [
    {
        id: 'brian-munyawarara',
        image: team1,
        position: 'CEO & Founder',
        name: 'Brian Munyawarara',
        mail: 'brianmunyawarara@raysuncapital.com',
        phone: '+263 774 361 033',
        category: 'founder',
        social_link: [
            { link: 'https://www.facebook.com', target: '_blank', icon: <i className="fab fa-facebook-f"></i> },
            { link: 'https://twitter.com', target: '_blank', icon: <i className="fa-brands fa-x-twitter"></i> },
            { link: 'https://www.linkedin.com', target: '_blank', icon: <i className="fab fa-behance"></i> },
        ],
    },
    {
        id: 'tinokunda-chasara',
        image: team2,
        position: 'COO',
        name: 'Tinokunda Chasara',
        mail: 'tinokundachasara@raysuncapital.com',
        phone: '+263 774 110 080',
        category: 'coo',
        social_link: [
            { link: 'https://www.facebook.com', target: '_blank', icon: <i className="fab fa-facebook-f"></i> },
            { link: 'https://twitter.com', target: '_blank', icon: <i className="fa-brands fa-x-twitter"></i> },
            { link: 'https://www.linkedin.com', target: '_blank', icon: <i className="fab fa-behance"></i> },
        ],
    },
    {
        id: 'rumbidzayi-gwelo',
        image: team3,
        position: 'Finance & Admin',
        name: 'Rumbidzayi Gwelo',
        mail: 'rumbie@rasuncapital.com',
        phone: '+263 773 017 535',
        category: 'admin',
        social_link: [
            { link: 'https://www.facebook.com', target: '_blank', icon: <i className="fab fa-facebook-f"></i> },
            { link: 'https://twitter.com', target: '_blank', icon: <i className="fa-brands fa-x-twitter"></i> },
            { link: 'https://www.linkedin.com', target: '_blank', icon: <i className="fab fa-behance"></i> },
        ],
    }
];

export default teamData;