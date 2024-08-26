
import Link from "next/link";
import bgImage from "../../../../public/assets/img/pages/getInTouch.jpg";

const GetInTouch = () => {
    const touchContent = {
        subtitle: 'Get In Touch',
        title: 'Contact us',
        title2: 'Raysun Capital is ready to help you with your financial needs',
        des: 'Get in touch with us for expert financial support',
    }
    return (
        <>
            <div className="getIn__touch section-padding" style={{backgroundImage: `url(${bgImage.src})`}}>
                <img className="getIn__touch-shape left-right-animate2" src="assets/img/shape/getInTouch.png" alt="shape" />
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-5 lg-mb-30">
                            <div className="getIn__touch-left">
                                <div className="getIn__touch-left-title">
                                    <span className="subtitle-one">{touchContent.subtitle}</span>
                                    <h2>{touchContent.title}</h2>							
                                </div>
                                <div className="getIn__touch-left-form">
                                    <form action="#">	
                                        <div className="mt-25">
                                            <input type="text" name="name" placeholder="Full Name" required="required" />
                                        </div>
                                        <div className="mt-25">
                                            <input type="email" name="email" placeholder="Email Address" required="required" />
                                        </div>
                                        <div className="mt-25">
                                            <input type="text" name="subject" placeholder="Subject" required="required" />
                                        </div>
                                        <div className="mt-25">
                                            <button className="btn-one" type="submit">Send</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-7">
                            <div className="getIn__touch-right">
                                <div className="getIn__touch-right-title">
                                    <h2>{touchContent.title2}</h2>
                                    <p>{touchContent.des}</p>
                                </div>
                                {/* <div className="getIn__touch-right-bottom">
                                    <div className="getIn__touch-right-bottom-text">
                                        <h4>client satisfaction in the globaly</h4>
                                    </div>
                                    <div className="getIn__touch-right-bottom-shape">
                                        <img src="assets/img/icon/getInTouch.png" alt="shape" />
                                    </div>
                                
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-xl-5"></div>
                    <div className="col-xl-7">
                        <div className="help__area">
                            <div className="help__area-item">
                                <div className="help__area-item-icon icon-animation">
                                    <i className="fal fa-phone-alt"></i>
                                </div>
                                <div className="help__area-item-info">
                                    <span className="text-three">Landline</span>
                                    <h5><Link href="tel:+263 8677 008143">08677008143</Link></h5>
                                </div>
                            </div>
                            <div className="help__area-item">
                                <div className="help__area-item-icon">
                                    <i className="fal fa-envelope-open-text"></i>
                                </div>
                                <div className="help__area-item-info">
                                    <span className="text-three">Email Us</span>
                                    <h5><Link href="mailto:conbix@gmail.com">info@raysuncapital.com</Link></h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>      
    );
};

export default GetInTouch;