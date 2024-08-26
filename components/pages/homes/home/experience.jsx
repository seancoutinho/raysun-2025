import Link from "next/link";
import image1 from "../../../../public/assets/img/pages/experience-1.jpg";
import image2 from "../../../../public/assets/img/pages/experience-2.jpg";
import SkillBar from "../../common/skill-bar";
import SkillBarItem from "../../common/skill-bar";

const Experience = () => {
    const experienceContent = {
        subtitle: 'Why Work with Us?',
        title: 'We are a leading microfinance in Zimbabwe',
        des: 'We are a leading microfinance in Zimbabwe, offering a wide range of financial services to individuals and businesses. Our team of seasoned consultants collaborates closely with clients to deliver tailored solutions that meet their unique needs. We are committed to excellence and customer satisfaction, and we strive to empower our clients to achieve their financial goals.',
        btn_text: 'Apply for a loan',
        btn_link: '/request-quote',
        progress1: '60',
        progress2: '85',
    }
    return (
        <>
            <div className="experience__area dark__image section-padding">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-xl-6 col-lg-6 lg-mb-30">
                            <div className="experience__area-image">
                                <img className="experience__area-image-shape left-right-animate" src="assets/img/shape/dots.png" alt="" />
                                <div className="experience__area-image-item">
                                    <img src='/assets/img/experience/close-up-view-of-falling-dollar-banknotes-isolated-2023-11-27-04-53-31-utc.jpg' alt="image" />
                                </div>
                                
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6">
                            <div className="experience__area-right">
                                <div className="experience__area-right-title">
                                    <span className="subtitle-one">{experienceContent.subtitle}</span>
                                    <h2>{experienceContent.title}</h2>		
                                    <p>{experienceContent.des}</p>
                                </div>
                                <div className="skill__area mt-30">
                                    <div className="skill__area-item">
                                        <div className="skill__area-item-content">
                                            <span className="text-two">Quick Disbursement</span>
                                        </div>
                                        <div className="skill__area-item-inner">
                                            {/* <SkillBarItem countUp={experienceContent?.progress1} /> */}
                                        </div>
                                    </div>
                                    <div className="skill__area-item">
                                        <div className="skill__area-item-content">
                                            <span className="text-two">USD Cash/Ecocash/Innbucks/Bank  transfer</span>
                                        </div>
                                        <div className="skill__area-item-inner">
                                            {/* <SkillBarItem countUp={experienceContent?.progress2} /> */}
                                        </div>
                                    </div>
                                </div>
                                <Link className="btn-two" href={experienceContent.btn_link}>{experienceContent.btn_text}<i className="far fa-chevron-double-right"></i></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Experience;