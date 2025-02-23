import Image from 'next/image'
import Icon from '../../../public/Icon.svg'
import MenuImg from '../../../public/ImgMenu.png'
import Product1 from '../../../public/ImageProduct1.png'
import Product2 from '../../../public/ImageProduct2png.png'
import Product3 from '../../../public/ImageProduct3.png'
import Product4 from '../../../public/ImageProduct4.png'
import Product5 from '../../../public/ImageProduct5.png'
import Product6 from '../../../public/ImageProduct6.png'
import Product7 from '../../../public/ImageProduct7.png'
import Product8 from '../../../public/ImageProduct8.png'
import Product9 from '../../../public/ImageProduct9.png'
import Product10 from '../../../public/ImageProduct10.png'
import Product11 from '../../../public/ImageProduct11.png'
import Product12 from '../../../public/ImageProduct12.png'
import Product13 from '../../../public/ImageProduct13.png'
import Product14 from '../../../public/ImageProduct14.png'
import Product15 from '../../../public/ImageProduct15.png'
import Product16 from '../../../public/ImageProduct16.png'
import classNames from 'classnames/bind'
import style from './menu.module.scss'
const cx = classNames.bind(style)
function MenuPPage() {
    return (
        <div className={cx('Container')}>
            <div className={cx('Container_img_contain')}>
                <div className={cx('Container_img')}>
                    <Image alt='Img not author' src={MenuImg} />
                    <div className={cx('Container_img-title')}>
                        <span className={cx('Container_img_title')}>MENU</span>
                    </div>
                </div>
            </div>
            <div className={cx('Container_menu_containt')}>
                <div className={cx('Container_menu')}>
                    <div className={cx('Container_menu_list')}>
                        <button>MAKI</button>
                        <button>URAMAKI</button>
                        <button>SPECIAL ROLLS</button>
                    </div>
                    <div className={cx('Container_menu_icon')}>
                        <div className={cx('Container_menu_icon-left')}>
                            <svg width="62" height="26" viewBox="0 0 62 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="0.89363" y="13" width="7" height="7" transform="rotate(-45 0.89363 13)" stroke="#EFE7D2" strokeOpacity="0.15" />
                                <rect x="11.5" y="12.5" width="50" height="1" fill="#EFE7D2" fillOpacity="0.15" />
                            </svg>
                        </div>
                        <span>MAKI</span>
                        <div className={cx('Container_menu_icon-right')}>
                            <svg width="62" height="26" viewBox="0 0 62 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="0.5" y="12.5" width="50" height="1" fill="#EFE7D2" fillOpacity="0.15" />
                                <rect x="51.2071" y="13" width="7" height="7" transform="rotate(-45 51.2071 13)" stroke="#EFE7D2" strokeOpacity="0.15" />
                            </svg>
                        </div>
                    </div>
                    <div className={cx('Container_menu_product')}>
                        <div className={cx('Container_menu_product-img')}>
                            <Image width={800} height={600} quality={100} alt='Img not author' src={Product1} />
                        </div>
                        <div className={cx('Container_menu_product-title')}>
                            <div className={cx('Container_menu_product-title--name')}><p>Spicy Tuna Maki</p> <div className={cx('Container_menu_product-title--name_line')}></div> <span>$5</span></div>
                            <div className={cx('Container_menu_product-title--dscrip')}>
                                A tantalizing blend of spicy tuna, cucumber, and avocado, harmoniously rolled in nori and seasoned rice.
                            </div>
                        </div>
                    </div>
                    <div className={cx('Container_menu_product')}>
                        <div className={cx('Container_menu_product-img')}>
                            <Image alt='Img not author' src={Product2} />
                        </div>
                        <div className={cx('Container_menu_product-title')}>
                            <div className={cx('Container_menu_product-title--name')}><p>Mango Maki</p> <div className={cx('Container_menu_product-title--name_line')}></div> <span>$5</span></div>
                            <div className={cx('Container_menu_product-title--dscrip')}>
                                Tempura-fried shrimp, cucumber, and cream cheese embrace a center of fresh avocado, delivering a satisfying contrast of textures.
                            </div>
                        </div>
                    </div>
                    <div className={cx('Container_menu_product')}>
                        <div className={cx('Container_menu_product-img')}>
                            <Image alt='Img not author' src={Product3} />
                        </div>
                        <div className={cx('Container_menu_product-title')}>
                            <div className={cx('Container_menu_product-title--name')}><p>Salmon Maki</p> <div className={cx('Container_menu_product-title--name_line')}></div> <span>$5</span></div>
                            <div className={cx('Container_menu_product-title--dscrip')}>
                                Shiitake mushrooms, avocado, and pickled daikon radish nestle within a roll of seasoned rice, coated with nutty sesame seeds.
                            </div>
                        </div>
                    </div>
                    <div className={cx('Container_menu_product')}>
                        <div className={cx('Container_menu_product-img')}>
                            <Image alt='Img not author' src={Product4} />
                        </div>
                        <div className={cx('Container_menu_product-title')}>
                            <div className={cx('Container_menu_product-title--name')}><p>Tuna Maki</p> <div className={cx('Container_menu_product-title--name_line')}></div> <span>$5</span></div>
                            <div className={cx('Container_menu_product-title--dscrip')}>
                                A vibrant assortment of julienned carrots, bell peppers, and cucumber, tightly encased in a nori-wrapped rice roll.
                            </div>
                        </div>
                    </div>
                    {/* MAKI */}
                    <div className={cx('Container_menu_icon')}>
                        <div className={cx('Container_menu_icon-left')}>
                            <svg width="62" height="26" viewBox="0 0 62 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="0.89363" y="13" width="7" height="7" transform="rotate(-45 0.89363 13)" stroke="#EFE7D2" strokeOpacity="0.15" />
                                <rect x="11.5" y="12.5" width="50" height="1" fill="#EFE7D2" fillOpacity="0.15" />
                            </svg>
                        </div>
                        <span>URAKAMI</span>
                        <div className={cx('Container_menu_icon-right')}>
                            <svg width="62" height="26" viewBox="0 0 62 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="0.5" y="12.5" width="50" height="1" fill="#EFE7D2" fillOpacity="0.15" />
                                <rect x="51.2071" y="13" width="7" height="7" transform="rotate(-45 51.2071 13)" stroke="#EFE7D2" strokeOpacity="0.15" />
                            </svg>
                        </div>
                    </div>
                    <div className={cx('Container_menu_product')}>
                        <div className={cx('Container_menu_product-img')}>
                            <Image alt='Img not author' src={Product5} />
                        </div>
                        <div className={cx('Container_menu_product-title')}>
                            <div className={cx('Container_menu_product-title--name')}><p>Volcano Delight</p> <div className={cx('Container_menu_product-title--name_line')}></div> <span>$12</span></div>
                            <div className={cx('Container_menu_product-title--dscrip')}>
                                Creamy crab salad, avocado, and cucumber rolled inside, topped with spicy tuna and drizzled with fiery sriracha sauce.
                            </div>
                        </div>
                    </div>
                    <div className={cx('Container_menu_product')}>
                        <div className={cx('Container_menu_product-img')}>
                            <Image alt='Img not author' src={Product6} />
                        </div>
                        <div className={cx('Container_menu_product-title')}>
                            <div className={cx('Container_menu_product-title--name')}><p>Rainbow Fusion</p> <div className={cx('Container_menu_product-title--name_line')}></div> <span>$12</span></div>
                            <div className={cx('Container_menu_product-title--dscrip')}>
                                A colorful blend of fresh tuna, salmon, yellowtail, and avocado, enveloping a core of cucumber and crab stick.
                            </div>
                        </div>
                    </div>
                    <div className={cx('Container_menu_product')}>
                        <div className={cx('Container_menu_product-img')}>
                            <Image alt='Img not author' src={Product7} />
                        </div>
                        <div className={cx('Container_menu_product-title')}>
                            <div className={cx('Container_menu_product-title--name')}><p>Dragon Elegance</p> <div className={cx('Container_menu_product-title--name_line')}></div> <span>$12</span></div>
                            <div className={cx('Container_menu_product-title--dscrip')}>
                                Grilled eel and avocado nestled within the roll, draped with slices of ripe avocado resembling dragon scales.
                            </div>
                        </div>
                    </div>
                    <div className={cx('Container_menu_product')}>
                        <div className={cx('Container_menu_product-img')}>
                            <Image alt='Img not author' src={Product8} />
                        </div>
                        <div className={cx('Container_menu_product-title')}>
                            <div className={cx('Container_menu_product-title--name')}><p>Sunset Serenity</p> <div className={cx('Container_menu_product-title--name_line')}></div> <span>$12</span></div>
                            <div className={cx('Container_menu_product-title--dscrip')}>
                                Tempura shrimp, cucumber, and spicy mayo embraced by a roll of soy paper, crowned with slices of creamy mango.
                            </div>
                        </div>
                    </div>
                    <div className={cx('Container_menu_product')}>
                        <div className={cx('Container_menu_product-img')}>
                            <Image alt='Img not author' src={Product9} />
                        </div>
                        <div className={cx('Container_menu_product-title')}>
                            <div className={cx('Container_menu_product-title--name')}><p>Mystic Garden</p> <div className={cx('Container_menu_product-title--name_line')}></div> <span>$12</span></div>
                            <div className={cx('Container_menu_product-title--dscrip')}>
                                Shiitake mushrooms, asparagus, and cucumber intermingle with crispy tempura bits, blanketed by a layer of sesame seeds.
                            </div>
                        </div>
                    </div>
                    <div className={cx('Container_menu_product')}>
                        <div className={cx('Container_menu_product-img')}>
                            <Image alt='Img not author' src={Product10} />
                        </div>
                        <div className={cx('Container_menu_product-title')}>
                            <div className={cx('Container_menu_product-title--name')}><p>Ocean Breeze</p> <div className={cx('Container_menu_product-title--name_line')}></div> <span>$12</span></div>
                            <div className={cx('Container_menu_product-title--dscrip')}>
                                A medley of fresh shrimp, crab stick, and avocado, laced with a gentle touch of zesty yuzu-infused tobiko.
                            </div>
                        </div>
                    </div>
                    <div className={cx('Container_menu_product')}>
                        <div className={cx('Container_menu_product-img')}>
                            <Image alt='Img not author' src={Product11} />
                        </div>
                        <div className={cx('Container_menu_product-title')}>
                            <div className={cx('Container_menu_product-title--name')}><p>Tokyo Blossom</p> <div className={cx('Container_menu_product-title--name_line')}></div> <span>$12</span></div>
                            <div className={cx('Container_menu_product-title--dscrip')}>
                                Delicate pink soy paper envelopes a blend of tuna, crab stick, and cucumber, embellished with edible flower petals.
                            </div>
                        </div>
                    </div>
                    {/* SPECIAL ROLLS */}
                    <div className={cx('Container_menu_icon')}>
                        <div className={cx('Container_menu_icon-left')}>
                            <svg width="62" height="26" viewBox="0 0 62 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="0.89363" y="13" width="7" height="7" transform="rotate(-45 0.89363 13)" stroke="#EFE7D2" strokeOpacity="0.15" />
                                <rect x="11.5" y="12.5" width="50" height="1" fill="#EFE7D2" fillOpacity="0.15" />
                            </svg>
                        </div>
                        <span>SPECIAL ROLLS</span>
                        <div className={cx('Container_menu_icon-right')}>
                            <svg width="62" height="26" viewBox="0 0 62 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="0.5" y="12.5" width="50" height="1" fill="#EFE7D2" fillOpacity="0.15" />
                                <rect x="51.2071" y="13" width="7" height="7" transform="rotate(-45 51.2071 13)" stroke="#EFE7D2" strokeOpacity="0.15" />
                            </svg>
                        </div>
                    </div>
                    <div className={cx('Container_menu_product')}>
                        <div className={cx('Container_menu_product-img')}>
                            <Image alt='Img not author' src={Product12} />
                        </div>
                        <div className={cx('Container_menu_product-title')}>
                            <div className={cx('Container_menu_product-title--name')}><p>Sunrise Bliss</p> <div className={cx('Container_menu_product-title--name_line')}></div> <span>$16</span></div>
                            <div className={cx('Container_menu_product-title--dscrip')}>
                                A delicate combination of fresh salmon, cream cheese, and asparagus, rolled in orange-hued tobiko for a burst of sunrise-inspired flavors.
                            </div>
                        </div>
                    </div>
                    <div className={cx('Container_menu_product')}>
                        <div className={cx('Container_menu_product-img')}>
                            <Image alt='Img not author' src={Product13} />
                        </div>
                        <div className={cx('Container_menu_product-title')}>
                            <div className={cx('Container_menu_product-title--name')}><p>Mango Tango</p> <div className={cx('Container_menu_product-title--name_line')}></div> <span>$16</span></div>
                            <div className={cx('Container_menu_product-title--dscrip')}>
                                Tempura shrimp, cucumber, and avocado dance alongside sweet mango slices, drizzled with a tangy mango sauce.
                            </div>
                        </div>
                    </div>
                    <div className={cx('Container_menu_product')}>
                        <div className={cx('Container_menu_product-img')}>
                            <Image alt='Img not author' src={Product14} />
                        </div>
                        <div className={cx('Container_menu_product-title')}>
                            <div className={cx('Container_menu_product-title--name')}><p>Truffle Indulgence</p> <div className={cx('Container_menu_product-title--name_line')}></div> <span>$16</span></div>
                            <div className={cx('Container_menu_product-title--dscrip')}>
                                Decadent slices of black truffle grace a roll of succulent wagyu beef, cucumber, and microgreens, culminating in an exquisite umami symphony.
                            </div>
                        </div>
                    </div>
                    <div className={cx('Container_menu_product')}>
                        <div className={cx('Container_menu_product-img')}>
                            <Image alt='Img not author' src={Product15} />
                        </div>
                        <div className={cx('Container_menu_product-title')}>
                            <div className={cx('Container_menu_product-title--name')}><p>Pacific Firecracker</p> <div className={cx('Container_menu_product-title--name_line')}></div> <span>$16</span></div>
                            <div className={cx('Container_menu_product-title--dscrip')}>
                                Spicy crab salad, tempura shrimp, and jalapeño peppers combine in a fiery ensemble, accented with a chili-infused aioli.
                            </div>
                        </div>
                    </div>
                    <div className={cx('Container_menu_product')}>
                        <div className={cx('Container_menu_product-img')}>
                            <Image alt='Img not author' src={Product16} />
                        </div>
                        <div className={cx('Container_menu_product-title')}>
                            <div className={cx('Container_menu_product-title--name')}><p>Eternal Eel</p> <div className={cx('Container_menu_product-title--name_line')}></div> <span>$16</span></div>
                            <div className={cx('Container_menu_product-title--dscrip')}>
                                An enchanting blend of eel tempura, foie gras, and cucumber, elegantly layered with truffle oil and gold leaf for a touch of opulence.
                            </div>
                        </div>
                    </div>
                </div>
                <div className={cx('Continer_menu-footer')}>
                    <div className={cx('Container_menu-footer--containt')}>
                        <p>© Gola Templates</p>
                        <Image alt='Img not author' src={Icon} />
                        <p>Licensing</p>
                        <Image alt='Img not author' src={Icon} />
                        <p>Styleguide</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MenuPPage;