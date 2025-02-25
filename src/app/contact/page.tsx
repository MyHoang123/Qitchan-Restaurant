
"use client";
import Icon from '../../../public/Icon.svg'
import Image from 'next/image'
import Map from './map'
import classNames from 'classnames/bind'
import style from './contact.module.scss'
const cx = classNames.bind(style)
function ContactPage() {
    return (
        <div className={cx('Container')}>
            <div className={cx('Container_main')}>
                <div className={cx('Container_main-title')}>
                    <p className={cx('Container_main_Title')}>Contact</p>
                </div>
                <div className={cx('Container_main-box')}></div>
            </div>
            <div className={cx('Container_info')}>
                <div className={cx('Container_info-header')}>
                    <div className={cx('Container_info-header--item')}>
                        <div className={cx('Container_info-header--title')}>
                            <svg width="62" height="26" viewBox="0 0 62 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="0.89363" y="13" width="7" height="7" transform="rotate(-45 0.89363 13)" stroke="#EFE7D2" strokeOpacity="0.15" />
                                <rect x="11.5" y="12.5" width="50" height="1" fill="#EFE7D2" fillOpacity="0.15" />
                            </svg>
                            <h1>OPENING HOURS</h1>
                            <svg width="62" height="26" viewBox="0 0 62 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="0.5" y="12.5" width="50" height="1" fill="#EFE7D2" fillOpacity="0.15" />
                                <rect x="51.2071" y="13" width="7" height="7" transform="rotate(-45 51.2071 13)" stroke="#EFE7D2" strokeOpacity="0.15" />
                            </svg>
                        </div>
                        <div className={cx('Container_info-header-contain')}>
                            <div className={cx('Container_info-contain--title')}>
                                <p>Mon</p>
                                <span></span>
                                <p>16:00 - 22:30</p>
                            </div>
                            <div className={cx('Container_info-contain--title')}>
                                <p>Tue</p>
                                <span></span>
                                <p>16:00 - 22:30</p>
                            </div>
                            <div className={cx('Container_info-contain--title')}>
                                <p>Wed</p>
                                <span></span>
                                <p>16:00 - 22:30</p>
                            </div>
                            <div className={cx('Container_info-contain--title')}>
                                <p>Thu</p>
                                <span></span>
                                <p>16:00 - 22:30</p>
                            </div>
                            <div className={cx('Container_info-contain--title')}>
                                <p>Fri</p>
                                <span></span>
                                <p>16:00 - 22:30</p>
                            </div>
                            <div className={cx('Container_info-contain--title')}>
                                <p>Sat</p>
                                <span></span>
                                <p>16:00 - 22:30</p>
                            </div>
                            <div className={cx('Container_info-contain--title')}>
                                <p>Sun</p>
                                <span></span>
                                <p>16:00 - 22:30</p>
                            </div>
                        </div>
                    </div>
                    <div className={cx('Container_info-header--item-img')}>
                        <div className={cx('Container_info-header--item-icon1')}></div>
                        <div className={cx('Container_info-header--item-icon2')}></div>
                        <div className={cx('Container_info-header--item-icon3')}></div>
                        <div className={cx('Container_info-header--item-icon4')}></div>
                    </div>
                </div>
                <div className={cx('Container_info-body')}>
                    <div className={cx('Container_info-body--item1')}>
                        <Map />
                    </div>
                    <div className={cx('Container_info-body--item')}>
                        <div className={cx('Container_info-body--title')}>
                            <svg width="62" height="26" viewBox="0 0 62 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="0.89363" y="13" width="7" height="7" transform="rotate(-45 0.89363 13)" stroke="#EFE7D2" strokeOpacity="0.15" />
                                <rect x="11.5" y="12.5" width="50" height="1" fill="#EFE7D2" fillOpacity="0.15" />
                            </svg>
                            <h1>GET IN TOUCH</h1>
                            <svg width="62" height="26" viewBox="0 0 62 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="0.5" y="12.5" width="50" height="1" fill="#EFE7D2" fillOpacity="0.15" />
                                <rect x="51.2071" y="13" width="7" height="7" transform="rotate(-45 51.2071 13)" stroke="#EFE7D2" strokeOpacity="0.15" />
                            </svg>
                        </div>
                        <div className={cx('Container_info-body-contain')}>
                            <div className={cx('Container_info-contain--title-body')}>
                                <p>Address</p>
                                <p>23 Greenfield Avenue,
                                   <br/> Prague 120 00</p>
                            </div>
                            <div className={cx('Container_info-contain--title-body')}>
                                <p>Phone</p>
                                <p>+42 1234 567890</p>
                            </div>
                            <div className={cx('Container_info-contain--title-body')}>
                                <p>Email</p>
                                <p>info@qitchen.com</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={cx('Container_info-bonus')}>
                    <p>© Gola Templates</p>
                    <Image src={Icon} alt='Image not default' />
                    <p>Licensing</p>
                    <Image src={Icon} alt='Image not default' />
                    <p>Styleguide</p>
                </div>
            </div>
        </div>
    );
}

export default ContactPage;