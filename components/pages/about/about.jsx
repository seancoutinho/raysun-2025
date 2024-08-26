import Link from "next/link";
import Count from "../common/count";
import Image from "next/image";


const AboutMain = () => {
    const aboutContent = {
        image_1: '/assets/img/about/logo.jpeg',
        image_2: '/assets/img/about/about-8.jpg',
        subtitle: 'Our Company',
        title: 'Find out more about our business consulting',
        description: "Welcome to Raysun Capital, your gateway to turning financial dreams into reality. As more than just a finance company, we stand proudly as your dedicated partners on the journey to prosperity. With a vision to empower individuals and businesses, we set ourselves apart through our unwavering commitment to excellence and a customer-centric approach. At Raysun Capital, we firmly believe that everyone deserves equal access to financial opportunities. Whether you're a civil servant striving for a brighter future, an ambitious entrepreneur with big plans, or a trucking business owner seeking growth, we've designed custom-tailored loan solutions to perfectly suit your unique needs.",
        btn_text: 'Discover More',
        btn_href: '/about-us',
        shape_1: '/assets/img/shape/about-1.png',
        shape_2: '/assets/img/shape/about-2.png',
    }
    return (
        <>
            <div className="about__company section-padding">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-xxl-7 col-xl-6 xl-mb-30">
                            <div className="about__company-left">
                                <div>
                                    <Image height={500} width={500} src={aboutContent.image_1} alt="image" />
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-5 col-xl-6">
                            <div className="about__company-right">
                                <div className="about__company-right-title">							
                                    <span className="subtitle-one">{aboutContent.subtitle}</span>
                                    <h2>{aboutContent.title}</h2>
                                    <p>{aboutContent.description}</p>
                                    <Link className="btn-one" href={aboutContent.btn_href}>{aboutContent.btn_text}</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <img className="about__one-shape-1" src={aboutContent.shape_1} alt="shape" />
                <img className="about__one-shape-2" src={aboutContent.shape_2} alt="shape" />
            </div>
        </>
    );
};

export default AboutMain;