"use client"
import SEO from "@/components/data/seo";
import HeaderOne from "@/components/layout/headers/header-one";
import BreadCrumb from "../../common/breadcrumb";
import FooterTwo from "@/components/layout/footers/footer-two";
import ThreeColumns from "./three-columns";
import ScrollToTop from "../../common/scroll/scroll-to-top";

const PortfolioThreeColumns = () => {
    return (
        <>
            <SEO pageTitle='Raysun Capital Projects' />
            <HeaderOne />
            <BreadCrumb title="Raysun Capital Projects" innerTitle="Raysun Capital Projects" />
            <ThreeColumns />        
            <div className='all-footer'>
                <FooterTwo />
            </div>          
            <ScrollToTop />
        </>
    );
};

export default PortfolioThreeColumns;