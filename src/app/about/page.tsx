
"use client";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import SlideHeader from './slideHeader'
import SlideFooter from './slideFooter'
import classNames from 'classnames/bind'
import style from './about.module.scss'
const cx = classNames.bind(style)
function AboutPage() {
    return (
        <div className={cx('Container')}>
            <div className={cx('Container_main')}>
                <div className={cx('Container_main-title')}>
                    <p className={cx('Container_main_Title')}>About</p>
                </div>
                <div className={cx('Container_main-box')}></div>
            </div>
            <div className={cx('Container_info')}>
                <div className={cx('Container_info-header')}>
                    <div className={cx('Container_info--intro')}>
                        <h3>Sushi Artistry <br />Redefined</h3>
                        <p>Where culinary craftsmanship meets modern elegance. Indulge in the finest sushi, expertly curated to elevate your dining experience.</p>
                    </div>
                    <SlideHeader />
                </div>
                <div className={cx('Container_info-body')}>
                    <div className={cx('Container_info-body--item')}>
                        <div className={cx('Container_info-body--item__Star')}>
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                        </div>
                        <p className={cx('Container_info-body--item__title')}>Trip Advisor</p>
                        <p className={cx('Container_info-body--item__dcrip')}>Best Sushi</p>
                    </div>
                    <div className={cx('Container_info-body--item')}>
                        <div className={cx('Container_info-body--item__Star')}>
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                        </div>
                        <p className={cx('Container_info-body--item__title')}>Michelin Guide</p>
                        <p className={cx('Container_info-body--item__dcrip')}>Quality Food</p>
                    </div>
                    <div className={cx('Container_info-body--item')}>
                        <div className={cx('Container_info-body--item__Star')}>
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                        </div>
                        <p className={cx('Container_info-body--item__title')}>Start Dining</p>
                        <p className={cx('Container_info-body--item__dcrip')}>Cool vibe</p>
                    </div>
                </div>
                <div className={cx('Container_info-footer')}>
                    <SlideFooter />
                    <div className={cx('Container_info--intro')}>
                        <div className={cx('Container_info--intro_title')}>
                            <svg width="62" height="26" viewBox="0 0 62 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="0.89363" y="13" width="7" height="7" transform="rotate(-45 0.89363 13)" stroke="#EFE7D2" strokeOpacity="0.15" />
                                <rect x="11.5" y="12.5" width="50" height="1" fill="#EFE7D2" fillOpacity="0.15" />
                            </svg>
                            <h3>Our Story</h3>
                            <svg width="62" height="26" viewBox="0 0 62 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="0.5" y="12.5" width="50" height="1" fill="#EFE7D2" fillOpacity="0.15" />
                                <rect x="51.2071" y="13" width="7" height="7" transform="rotate(-45 51.2071 13)" stroke="#EFE7D2" strokeOpacity="0.15" />
                            </svg>
                        </div>
                        <p>Founded with a passion for culinary excellence, Qitchens journey began in the heart of Prague. Over years, it evolved into a haven for sushi enthusiasts, celebrated for its artful mastery and devotion to redefining gastronomy.</p>
                    </div>
                </div>
                <div className={cx('Container_info-bonus')}>
                    <p>© Gola Templates</p>
                    <p>Licensing</p>
                    <p>Styleguide</p>
                </div>
            </div>
        </div>
    );
}

export default AboutPage;