"use client"

import SEO from "@/components/data/seo";
import HeaderOne from "@/components/layout/headers/header-one";
import BreadCrumb from "../common/breadcrumb";
import AboutMain from "./about";
import FooterTwo from "@/components/layout/footers/footer-two";
import ScrollToTop from "../common/scroll/scroll-to-top";
import WhoWeAre from "./who-we-are";
import History from "./history";
import TeamMain from "@/components/pages/teams/team/team"

const AboutUs = () => {
    return (
      <>
        <SEO pageTitle="About Us" />
        <HeaderOne />
        <BreadCrumb title="About Us" innerTitle="About Raysun Capital" />
        <AboutMain />
            {/* <WhoWeAre /> */}
            <TeamMain />
            {/* <History /> */}
        <div className='all-footer'>
            <FooterTwo />
        </div>
            <ScrollToTop />
      </>
    );
};

export default AboutUs;