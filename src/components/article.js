import $ from 'jquery';
import img from '../img/gallery/night-dark-hotel-luxury-919.jpg'

export const article = (hotel) => {

    const ul = $('<ul class="card pt-2 pb-2">');
        const facilities = hotel.facilities;
        for (let i = 0; i <facilities.length; i++) {
            ul.append(`
                <li>
                    <i class="fas fa-check mr-2"></i> ${facilities[i]}
                </li>`);
        }

    const article = $(`
        <div class="row p-3 bg-light">
            <div class="col-md-8 col-sm-12 text-center p-3">
                <div class="row">
                    <div class="col-md-4 col-sm-12" id="hotel-img">
                        
                    </div>
                    <div class="col-md-8 col-sm-12">
                        <p class="m-3">${hotel.description}</p>
                    </div>
                </div>
            </div>

            <div id="hotel-facilities" class="col-md-4 col-sm-12 p-3">
            </div>
        </div>
    `);
    article.find('#hotel-facilities').append(ul);
    article.find('#hotel-img').append(`<img src=${img} class="img-fluid" />`);
    
    return article;
}