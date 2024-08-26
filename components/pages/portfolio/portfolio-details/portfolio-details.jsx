import Image from 'next/image';
import React from 'react';

const PortfolioDetailsMain = ({ singleData }) => {
    return (
        <div className="portfolio__details dark__image section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-xl-12">
                        <div className="portfolio__details-image dark_image">
                            <Image height={400} width={400} src={singleData.image.src} alt="portfolio" />
                            <div className="portfolio__details-meta">
                                <div className="portfolio__details-meta-item">
                                    <span>Date :</span>
                                    <h6>{singleData?.date}</h6>
                                </div>
                                <div className="portfolio__details-meta-item">
                                    <span>Category :</span>
                                    <h6>{singleData?.category}</h6>
                                </div>
                                <div className="portfolio__details-meta-item">
                                    <span>Locations :</span>
                                    <h6>{singleData?.location}</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mt-40">
                    <div className="col-lg-4 lg-mb-15">
                        <h3>About {singleData?.title}</h3>
                    </div>
                    <div className="col-lg-8">
                        <p>{singleData?.description}</p>
                    </div>
                </div>
                <div className="row mt-30 dark_image">
                    <div className="col-sm-4 sm-mb-25">
                        <img className="img__full" src={singleData?.dropImage1.src} alt="portfolio" />
                    </div>
                    <div className="col-sm-4 sm-mb-25">
                        <img className="img__full" src={singleData.dropImage2.src} alt="portfolio" />
                    </div>
                    <div className="col-sm-4">
                        <img className="img__full" src={singleData.dropImage3.src} alt="portfolio" />
                    </div>
                </div>
                <div className="row mt-40">
                    <div className="col-lg-4 lg-mb-15">
                        <h3>The Challenge</h3>
                    </div>
                    <div className="col-lg-8">
                        <p>{singleData?.challenges}</p>
                    </div>
                </div>
                <div className="row mt-20">
                    <div className="col-lg-4 lg-mb-15">
                        <h3>The Solutions</h3>
                    </div>
                    <div className="col-lg-8">
                        <p>{singleData?.solutions}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PortfolioDetailsMain;