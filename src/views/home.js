import $ from 'jquery';
import { routeChange } from "../router/route-change";

import {datePicker} from "../components/date-picker";
import slide_1 from '../img/slide1.png';
import slide_2 from '../img/slide2.png';
import slide_3 from '../img/slide3.png';

import img_1 from '../img/gallery/sky-sunset-beach-vacation-60217.jpg';
import img_2 from '../img/gallery/night-dark-hotel-luxury-919.jpg';
import img_3 from '../img/gallery/adventure-clean-clear-enjoyment-261388.jpg';
import img_4 from '../img/gallery/bath-clean-holiday-hotel-221457.jpg';
import img_5 from '../img/gallery/beach-hotel-idyllic-leisure-261181.jpg';
import img_6 from '../img/gallery/bed-bedroom-chair-comfort-271619.jpg';
import img_7 from '../img/gallery/chairs-dining-room-food-furniture-460537.jpg';
import img_8 from '../img/gallery/balance-macro-ocean-pebbles-235990.png';
import img_9 from '../img/gallery/white-and-pink-flowers-beside-a-canister-1809344.png';
import img_10 from '../img/gallery/woman-relaxing-relax-spa-56884.png';

export const home = () => {

    const fragment = $(`<div></div>`);
    const carousel = $(`
    <div>
        <div id="carousel" class="carousel slide" data-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                 <img src=${ slide_1 } class="d-block w-100" alt="slide">   
                </div>
                <div class="carousel-item">
                 <img src=${ slide_2 } class="d-block  w-100" alt="slide">
                </div>
                <div class="carousel-item">
                 <img src=${ slide_3 } class="d-block w-100" alt="slide">    
                </div>
            </div>
        </div>
    </div>
    `);

    const button_article_1 = $(
        `<div class="d-block m-3 rounded p-4 text-center">
            <h4> ATRAKCJE  DLA  KAŻDEGO</h4>
        </div>`);

    const article_1 = $(`
    <section id="section_1" data-aos="fade-up" class="mx-auto">
        <div class="row no-gutters">
            <div class="col-md"> <img src=${ img_1 } class="d-block w-100" alt="image"> </div>
            <div class="col-md"> <img src=${ img_2 } class="d-block w-100" alt="image"> </div>
            <div class="col-md"> <img src=${ img_3 } class="d-block w-100" alt="image"> </div>
            <div class="col-md"> <img src=${ img_4 } class="d-block w-100" alt="image"> </div>
        </div>
        <div class="row align-items-center no-gutters">
            <div class="col-md"> <img src=${ img_5 } class="d-block w-100" alt="image"> </div>
            <div class="col-md-6" id="btn_art_1">
                
            </div>
            <div class="col-md"> <img src=${ img_6 } class="d-block w-100" alt="image"> </div>
        </div>
        <div class="row no-gutters">
            <div class="col-md"><img src=${ img_7 } class="d-block w-100" alt="image"> </div>
            <div class="col-md"><img src=${ img_8 } class="d-block w-100" alt="image"> </div>
            <div class="col-md"><img src=${ img_9 } class="d-block w-100" alt="image"> </div>
            <div class="col-md"><img src=${ img_10 } class="d-block w-100" alt="image"> </div>
        </div>
        </section>`);

    const article_2 = $(`
    <section id="section_2" data-aos="fade-up">
        Hotel 11111 Niemcza SPA położony jest w malowniczej krainie Wzgórz Niemczańsko-Strzelińskich, u podnóża Gór Sowich. Dopełnieniem urokliwej scenerii jest park ze starodrzewem otaczający obiekt. Położenie nieopodal Arboretum w Wojsławicach umożliwia naszym Gościom jeszcze pełniejszy kontakt z naturą. Zieleń, świeże powietrze i niezapomniane widoki uczynią każdy pobyt wyjątkowym.
    </section>`);
    const article_3 = $(`
    <section id="section_3" data-aos="fade-up">
        Hotel 22222 Niemcza SPA położony jest w malowniczej krainie Wzgórz Niemczańsko-Strzelińskich, u podnóża Gór Sowich. Dopełnieniem urokliwej scenerii jest park ze starodrzewem otaczający obiekt. Położenie nieopodal Arboretum w Wojsławicach umożliwia naszym Gościom jeszcze pełniejszy kontakt z naturą. Zieleń, świeże powietrze i niezapomniane widoki uczynią każdy pobyt wyjątkowym.
    </section>
    `);


    fragment.append(carousel);
    fragment.append(
        article_1,
        article_2,
        article_3);
    fragment.find('#btn_art_1').append(button_article_1);

    button_article_1
        .on('mouseenter', function () {
        button_article_1.removeClass('bg-light');
        button_article_1.addClass('bg-dark');
        })
        .on('mouseleave', function() {
            button_article_1.removeClass('bg-dark');
            button_article_1.addClass('bg-ligth');
        })
        .on('click', () => fragment.trigger(routeChange, { path: '/signup' }))


    fragment.append(datePicker);


    return Promise.resolve(fragment);
}