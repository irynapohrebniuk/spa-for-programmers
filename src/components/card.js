import $ from 'jquery';
import { itSpaCart } from "../cart/it-spa-cart";
import { Bucket } from "../bucket";


export const card = (room) => {
    const fragment = $(new DocumentFragment());
    fragment
        .append(
            `
            <div class="col-md-4 col-sm-6 col-lg-3 p-1 m-1">
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
        );
    fragment.find('.card').append(centerDiv);
    fragment.find('.text-center').append(cardButton(room));
    fragment.find('.card').prepend(cardImage);


    return fragment;
}

const cardButton = room => {
    let bucket = Bucket.getInstance();
    const button = $('<button></button>')
        .addClass("btn btn-primary m-2")
        .css("width", "60%")
        .html('Zarezerwuj')
        .on("click", function() {
            bucket.addRoom(room.id, room.name);
        });
    return button;
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