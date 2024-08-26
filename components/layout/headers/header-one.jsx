"use client";
import Social from '@/components/data/social';
import Link from 'next/link';
import MainMenu from './header-menu';
import Search from './search';
import { useEffect, useState } from 'react';
import SideBar from './offcanvas';
import MobileMenuOne from './menu_sidebar/menu-one';
import logo1 from "../../../public/assets/img/logo-1.png";
import logo2 from "../../../public/assets/img/logo-2.png";
import Image from 'next/image';

const HeaderOne = ({variant}) => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [menuSidebar, setMenuSidebar] = useState(false);
    const [search, setSearch] = useState(false);
    const [isSticky, setIsSticky] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
        if (window.scrollY > 150) {
            setIsSticky(true);
        } else {
            setIsSticky(false);
        }
        });
    }, []);
    return (
        <>
            <div className="top__bar">
                <div className="container custom__container">
                    <div className="row">
                        <div className="col-xl-5 col-md-6">
                            <div className="top__bar-left">
                                <Link href="https://www.google.com/maps"><i className="far fa-map-marker-alt"></i>20 Ray Amm Road, Eastlea, Harare</Link>
                            </div>
                        </div>
                        <div className="col-xl-7 col-md-6">
                            <div className="top__bar-right">
                                <Link href="mailto:info@raysuncapital.com"><i className="fas fa-envelope"></i>info@raysuncapital.com</Link>
                                <div className="top__bar-right-social">
                                    <Social />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`header__area ${ variant ? variant : "" } header__sticky ${isSticky ? "header__sticky-sticky-menu" : ""}`}>
                <div className="container custom__container">
                    <div className="header__area-menubar">
                        <div className="header__area-menubar-left">
                            <div className="header__area-menubar-left-logo">
                                <Link href='/'>
                                    <Image height={80} width={80} className='dark-n' src={logo1.src} alt='logo' />
                                    <Image height={80} width={80} className="light-n" src={logo2.src} alt="logo" />
                                </Link>
                            </div>
                        </div>
                        <div className="header__area-menubar-center">
                            <div className="header__area-menubar-center-menu menu-responsive">
                                <MainMenu />                               
                            </div>
                        </div>
                        <div className="header__area-menubar-right">
                            <div className="header__area-menubar-right-box">
                                <div className="header__area-menubar-right-sidebar">
                                    <div className="header__area-menubar-right-sidebar-popup-icon" onClick={() => setSidebarOpen(true)}>
                                        <i className="flaticon-menu"></i>                          
                                    </div>
                                </div>
                                <div className="header__area-menubar-right-box-btn">
                                <Link className="btn-one" href="/apply-for-loan">Apply Loan<i className="far fa-chevron-double-right"></i></Link>
                                </div>
                                <div className="header__area-menubar-right-responsive-menu menu__bar">
                                    <i className="flaticon-menu" onClick={() => setMenuSidebar(true)}></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <SideBar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />
            <MobileMenuOne isOpen={menuSidebar} setIsOpen={setMenuSidebar} />
        </>
    );
};

export default HeaderOne;