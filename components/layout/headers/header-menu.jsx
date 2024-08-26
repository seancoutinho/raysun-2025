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
                        <li className='menu-item-has-children'><Link href='/loan-products'>Loan Products</Link>
                            <ul className='sub-menu'>
                                <li><Link href='/loan-products/salary-based'>Salary Based Loans</Link></li>
                                <li><Link href='/loan-products/collateral-based'>Collateral Based Loans</Link></li>
                                <li><Link href='/loan-products/vendor-loans'>Vendor Loans</Link></li>
                                <li><Link href='/loan-products/energy-loans'>Energy Loans</Link></li>
                                <li><Link href='/loan-products/sme-loans'>SME Loans</Link></li>
                                <li><Link href='/loan-products/construction-loans'>Construction Loans</Link></li>
                                <li><Link href='/loan-products/ray-saver'>Ray Saver - Ma Rounds</Link></li>

                            </ul>
                        </li>
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