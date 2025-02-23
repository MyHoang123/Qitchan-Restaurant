import Image from 'next/image'
import Icon from '../../../public/Icon.svg'
import classNames from 'classnames/bind'
import style from './booking.module.scss'
const cx = classNames.bind(style)
function MenuPPage() {
    return (
        <div className={cx('Container')}>
            <div className={cx('Container_img_contain')}>
                {/* <Image alt='Img not author' src={MenuImg} />
                     */}
                <div className={cx('Container_img-title')}>
                    <span className={cx('Container_img_title')}>BOOK</span>
                    <span className={cx('Container_img_title')}>A TABLE</span>
                </div>
                <div className={cx('Container_img_contain-box')}></div>
            </div>
            <div className={cx('Container_book_containt')}>
                <div className={cx('Container_book')}>
                    <div className={cx('container_book-containt')}>
                        <h1><span><svg width="62" height="26" viewBox="0 0 62 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="0.89363" y="13" width="7" height="7" transform="rotate(-45 0.89363 13)" stroke="#EFE7D2" strokeOpacity="0.15" />
                            <rect x="11.5" y="12.5" width="50" height="1" fill="#EFE7D2" fillOpacity="0.15" />
                        </svg></span>Reservation<span><svg width="62" height="26" viewBox="0 0 62 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="0.5" y="12.5" width="50" height="1" fill="#EFE7D2" fillOpacity="0.15" />
                            <rect x="51.2071" y="13" width="7" height="7" transform="rotate(-45 51.2071 13)" stroke="#EFE7D2" strokeOpacity="0.15" />
                        </svg></span></h1>
                        <h4>Secure your spot at Qitchen, where exceptional sushi and a remarkable dining experience await.</h4>
                    </div>
                    <div className={cx('container_book-form')}>
                        <input type='text' placeholder='Your Name' />
                        <input type='number' placeholder='Phone Number' />
                        <input type='email' placeholder='Email' />
                        <div className={cx('container_book-form--time')}>
                            <input type='text' placeholder='1-10' />
                            <input type='date' placeholder='Phone' />
                            <input type='time' placeholder='Email' />
                        </div>
                        <button>SUBMIT</button>
                    </div>
                </div>
                <div className={cx('Container_book-footer')}>
                    <p>© By Pawel Gola</p>
                    <Image alt='Img not author' src={Icon} />
                    <p>Licensing</p>
                    <Image alt='Img not author' src={Icon} />
                    <p>Styleguide</p>
                </div>
            </div>
        </div>
    );
}

export default MenuPPage;