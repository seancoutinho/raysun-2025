import Link from 'next/link';
import React from 'react';

const Social = () => {
    return (
        <>
            <ul>
                <li><Link href="https://www.facebook.com/RaysunCapital" target="_blank"><i className="fab fa-facebook-f"></i></Link></li>
                <li><Link href="https://x.com/RaysunCapital" target="_blank"><i className="fa-brands fa-x-twitter"></i></Link></li>
                <li><Link href="https://www.instagram.com/raysuncapital/" target="_blank"><i className="fab fa-instagram"></i></Link></li>
                <li><Link href="https://www.linkedin.com/company/raysuncapitall/" target="_blank"><i className="fab fa-linkedin-in"></i></Link></li>
            </ul>            
        </>
    );
};

export default Social;