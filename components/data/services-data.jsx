import image1 from "../../public/assets/img/service/service-1.jpg";
import image2 from "../../public/assets/img/service/service-2.jpg";
import image3 from "../../public/assets/img/service/service-3.jpg";
import image4 from "../../public/assets/img/service/service-4.jpg";
import image5 from "../../public/assets/img/service/service-5.jpg";
import image6 from "../../public/assets/img/service/service-6.jpg";

const servicesData = [
    {
        id: 'salary-based-loans',
        icon: <i className="flaticon-corporate"></i>,
        title: 'Salary Based Loans',
        description: 'Get your repayments taken directly from your salary',
        number: '1',
        image: image1,
    },
    {
        id: 'vendor-loans',
        icon: <i className="flaticon-consultant-services"></i>,
        title: 'Vendor Loans',
        description: 'We provide loans to vendors who supply goods and services',
        number: '2',
        image: image2,
    },
    {
        id: 'machine-learning',
        icon: <i className="flaticon-data-science"></i>,
        title: 'SME Loans',
        description: 'We provide loans to small and medium enterprises looking to grow',
        number: '3',
        image: image3,
    },
    {
        id: 'ray-saver',
        icon: <i className="flaticon-analysis"></i>,
        title: 'Ray Saver',
        description: 'Deposit money with us and earn interest on your savings',
        number: '4',
        image: image4,
    },
    {
        id: 'business-consulting',
        icon: <i className="flaticon-creative"></i>,
        title: 'Business Consulting',
        description: 'Our team of seasoned consultants collaborates closely',
        number: '5',
        image: image5,
    },
    {
        id: 'human-research',
        icon: <i className="flaticon-resource"></i>,
        title: 'Human research',
        description: 'This can involve orientation for new hires, skill development,',
        number: '6',
        image: image6,
    },
];

export default servicesData;