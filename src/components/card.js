import $ from 'jquery';
import { Bucket } from "../bucket";

export const card = (room) => {
    const fragment = $(new DocumentFragment());
    fragment
        .append(
            `
            <div class="col-sm-12 col-md-6 col-lg-3 pb-3 pt-3">
                <div id="room-${room.id}" class="card">
                    <div class="card-body">
                        <h5 class="card-title">
                        Room ${room.id}: ${room.name}  
                        </h5>
                        <p class="card-text">
                         Some quick example text to build on the card title and make up the bulk of the card's content.
                        </p>
                    </div>
                </div>
            </div>
            `
        )
    fragment.find('.card').append(centerDiv)
    fragment.find('.text-center').append(cartButton(room))
    fragment.find('.text-center').append(moreButton(room))
    fragment.find('.card').prepend(cardImage)
    $('body').find('#searchResults').append(moreDiv)


    return fragment;
}

const cartButton = room => {
    let bucket = Bucket.getInstance();
    const button = $('<button></button>')
        .addClass("btn btn-primary m-2")
        .css("width", "60%")
        .html('Zarezerwuj')
        .on("click", function() {
            const quantity = 1;
            const checkIn = $('.check-in').val();
            const checkOut = $('.check-out').val();
            bucket.addRoom(room.id, room.name, room.price, quantity, room.totalPrice);
        });
    return button;
}

const moreButton = room => {
    return $(`
    <button class="btn btn-primary" type="button" data-toggle="collapse" data-target="#collapse${room.id}" aria-expanded="false" aria-controls="collapse${room.id}">
        More information
    </button>
    `)

}

const moreDiv = room => {
    return $(`
    <div class="collapse" id="collapse${room.id}">
        <div class="w-100">
            ${room.facilities}
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
        </div>
    </div>
    `)
}



const centerDiv = () => {
    return $('<div></div>').addClass("text-center");
}

const cardImage = () => {
    return $('<img></img>')
        .addClass('card-img-top')
        .css({ "width": "100%", "height": "150px" })
        .attr("src", "https://placeimg.com/640/240/14");

}