import React, { useEffect, useState } from 'react'
import s from './Header.module.css'



function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            if (scrollPosition > 400) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <header className={isScrolled ? s.scrolled : ''}>
            <img src="Assets/logo.png" alt="" />
            <a href="tel:+77019380463"> <img src="Assets/phone.png" alt="" />+7 (701) 938-04-63</a>
        </header>
    )
}

export default Header