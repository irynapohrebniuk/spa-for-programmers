import $ from 'jquery';
import { Bucket } from "../bucket";
import img from "../img/treatments/keyboard.jpg";

export const cardTreatment = (treatment) => {
    
    
    const fragment = $(new DocumentFragment());
    
    fragment
        .append(
            `
            <div class="col-sm-12 col-md-6 col-lg-3 pb-3 pt-3">
                <div id="room-${treatment.id}" class="card">
                    <div class="card-body">
                        <h5 class="card-title">${treatment.name} </h5>
                        <span class="topright bg-light text-dark"> ${treatment.price} $</span>
                    </div>
                </div>
            </div>
        `);

    fragment.find('.card').append(centerDiv);
    fragment.find('.text-center').append(cartButton(treatment));
    fragment.find('.card').prepend(`<img src=${img}>`);
    
    return fragment;
}

const cartButton = treatment => {
    let bucket = Bucket.getInstance();
    const button = $('<button></button>')
        .addClass("btn btn-md btn-outline-dark p-2 mb-5")
        .css("width", "60%")
        .html('Reserve')
        .on("click", function() {
            const quantity = 1;
            bucket.addTreatment(treatment.id, treatment.name, treatment.price, quantity, treatment.totalPrice);
        });
    return button;
}

const centerDiv = () => {
    return $('<div></div>').addClass("text-center");
}
