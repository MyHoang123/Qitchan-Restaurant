

'use client'

import Logo from '../../public/Logo.png'
import IconNavbar from '../../public/IconNavbar.svg'
import Image from 'next/image'
import classNames from 'classnames/bind'
import style from '../style/navBar.module.scss'
import Link from "next/link";
import { useRef, useEffect } from "react";
import { useRouter, usePathname } from 'next/navigation';
const cx = classNames.bind(style)

function Navbar() {
    const router = useRouter()
    const pathname = usePathname();
    const NavbarRef = useRef<HTMLInputElement>(null)
    const handleClickShowNavbar = () => {
        NavbarRef.current?.classList.add(cx('active'))
    }
    const handleClickRemoveNavbar = () => {
        NavbarRef.current?.classList.remove(cx('active'))
    }
    useEffect(() => {
        const handleRouteChange = () => {
            NavbarRef.current?.classList.remove(cx('active'));
        };
        handleRouteChange();
    }, [pathname]);
    const handleClickNextPage = (page: string) => {
        router.push(`/${page}`);
    }
    return (
        <>
            <nav className={cx('Container_Main_Navbar')}>
                <div className={cx('Container_Navbar')}>
                    <div onClick={handleClickShowNavbar} className={cx('Container_Main_Navbar-icon')}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <div className={cx('Container_Main_Navbar-logo')}>
                        <Link href={'/'}>
                            <Image src={Logo} alt="Picture of the author" />
                        </Link>
                    </div>
                    <Link href={'/menu'} className={cx('Container_Main_Navbar-menu')}>MENU</Link>
                    <Link href={'/about'} className={cx('Container_Main_Navbar-About')}>ABOUT</Link>
                    <Link href={'/booking'} className={cx('Container_Main_Navbar-book')}>BOOK A TABLE</Link>
                </div>
            </nav>
            <div ref={NavbarRef} className={cx('Overlay_navbar')}>
                <div className={cx('Navbar_Container-contain')}>
                    <div className={cx('Navbar_container_list')}>
                        <Image src={IconNavbar} alt="Img not default" />
                        <h1 onClick={() => handleClickNextPage('menu')}>MENU</h1>
                        <h1 onClick={() => handleClickNextPage('booking')}>RESERVATION</h1>
                        <h1 onClick={() => handleClickNextPage('about')}>ABOUT</h1>
                        <h1>CONTACT</h1>
                        <h1>BLOG</h1>
                        <Image src={IconNavbar} alt="Img not default" />
                    </div>
                    <div onClick={handleClickRemoveNavbar} className={cx('Button_exit-containt')}>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Navbar;