"use client"
import SEO from "@/components/data/seo";
import HeaderOne from "@/components/layout/headers/header-one";
import BreadCrumb from "../common/breadcrumb";
import FooterTwo from "@/components/layout/footers/footer-two";
import ScrollToTop from "../common/scroll/scroll-to-top";

const ContactUs = () => {
    return (
        <>
            <SEO pageTitle="Contact Us" />
            <HeaderOne />
            <BreadCrumb title="Contact Us" innerTitle="Contact Us" />
            <div className="contact__page section-padding pb-0">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-5 col-lg-5 order-last order-lg-first">
                            <div className="contact__page-form">
                                <h3 className="mb-30">Contact Us</h3>
                                <form action="#">	
                                    <div className="row">
                                        <div className="col-sm-12 mb-20"> 
                                            <div className="contact__page-form-item contact-item">
                                                <span className="fal fa-user"></span>
                                                <input type="text" name="name" placeholder="Full Name" required="required" />
                                            </div>										
                                        </div>
                                        <div className="col-sm-12 mb-20">
                                            <div className="contact__page-form-item contact-item">
                                                <span className="far fa-envelope-open"></span>
                                                <input type="email" name="email" placeholder="Email Address" required="required" />											
                                            </div>									
                                        </div>
                                        <div className="col-sm-12 mb-30"> 
                                            <div className="contact__page-form-item contact-item">
                                                <span className="far fa-comments"></span>
                                                <textarea name="message" placeholder="Type your comments...."></textarea>
                                            </div>										
                                        </div>
                                        <div className="col-lg-12">										
                                            <div className="contact__page-form-item">
                                                <button className="btn-one" type="submit">Submit Now<i className="far fa-chevron-double-right"></i></button>
                                            </div>										
                                        </div>
                                    </div>							
                                </form>                        
                            </div>
                        </div>
                        <div className="col-xl-7 col-lg-7 lg-mb-30">
                            <div className="contact__page-info">
                                <h2 className="mb-60 lg-mb-30">Get In Touch</h2>
                                <div className="contact__page-info-item">
                                    <h6>Office Address<span>:</span></h6>
                                    <span>20 Ray Amm Road, Eastlea, Harare</span>
                                </div>
                                <div className="contact__page-info-item">
                                    <h6>Email Address <span>:</span></h6>
                                    <span>
                                        <a href="mailto:hello.conbix@gmail.com">info@raysuncapital.com</a>
                                        <a href="mailto:info.conbix@gmail">admin1@raysuncapital.com</a>
                                    </span>
                                </div>
                                <div className="contact__page-info-item">
                                    <h6>Phone Number<span>:</span></h6>
                                    <span>
                                        <a href="tel:+2638677008143">+2638677008143</a>
                                        <a href="tel:+263777370301">+263777370301</a>

                                    </span>
                                </div>
                                <div className="contact__page-info-item">
                                    <h6>WhatsApp Chatbot<span>:</span></h6>
                                    <span>
                                        <a href="tel:+263775223214">+263775223214</a>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="contact__page-map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3798.1712165982017!2d31.094482575057427!3d-17.830606883134088!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1931bbe4c7e8bef9%3A0xff312419ac55e877!2sRaysun%20Capital!5e0!3m2!1sen!2szw!4v1724677397820!5m2!1sen!2szw" loading="lazy"></iframe>
            </div>
            <div className='all-footer'>
                <FooterTwo />
            </div>
            <ScrollToTop />
        </>
    );
};

export default ContactUs;