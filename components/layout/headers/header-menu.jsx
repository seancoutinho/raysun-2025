import Link from 'next/link';
import React from 'react';

const MainMenu = () => {
    return (
        <>
            <ul>
                <li><Link href='/'>Home</Link>
                </li>
                <li className='menu-item-has-children'><Link href='#'>Pages</Link>
                    <ul className='sub-menu'>
                        <li><Link href='/about-us'>About Us</Link></li>
                        {/* <li className='menu-item-has-children'><Link href='#'>Loan Products</Link>
                            <ul className='sub-menu'>
                                <li><Link href='/services'>Services 01</Link></li>
                                <li><Link href='/services-two'>Services 02</Link></li>
                                <li><Link href='/services/business-model'>Services Details</Link></li>
                            </ul>
                        </li> */}
                        <li><Link href='/faq'>FAQ's</Link></li>
                        
                        <li><Link href='/apply-for-loan'>Apply for Loan</Link></li>
                    </ul>
                </li>
                <li><Link href='/portfolio/projects'>Projects</Link>
                    
                </li>
                <li><Link href='/blog'>Blog</Link>

                </li>
                <li><Link href='/contact'>Contact</Link>
        
                </li>
            </ul>
        </>
    );
};

export default MainMenu;