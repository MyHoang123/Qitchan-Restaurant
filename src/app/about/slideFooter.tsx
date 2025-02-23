
import { Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import classNames from 'classnames/bind'
import style from './about.module.scss'
const cx = classNames.bind(style)
export default function App() {
    return (
        <Swiper
        
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
        }}
        direction='horizontal'
        modules={[Pagination, Autoplay]}
        className={cx('Container_info--slide')}>
            <SwiperSlide className={cx('img_footer-item-1')}>
            </SwiperSlide>
            <SwiperSlide className={cx('img_footer-item-2')}>
            </SwiperSlide>
            <SwiperSlide className={cx('img_footer-item-3')}>
            </SwiperSlide>
        </Swiper>
    );
}
