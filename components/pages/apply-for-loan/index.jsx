import SEO from '@/components/data/seo';
import HeaderOne from '@/components/layout/headers/header-one';
import React from 'react';
import BreadCrumb from '../common/breadcrumb';
import FooterTwo from '@/components/layout/footers/footer-two';
import RequestQuoteMain from './request-quote';
import ScrollToTop from '../common/scroll/scroll-to-top';

const RequestQuotePage = () => {
    return (
        <>
            <SEO pageTitle="Apply Today" />
            <HeaderOne />
            <BreadCrumb title="Apply for a Loan " innerTitle="Apply Today" />
            <RequestQuoteMain />
            <div className='all-footer'>
                <FooterTwo />
            </div>
            <ScrollToTop />
        </>
    );
};

export default RequestQuotePage;