import { cartSmallRooms } from '../components/cart-small-rooms';
import { cartSmallTreatments } from '../components/cart-small-treatments';
import { cartContentEmpty } from '../components/cart-empty';
import { Bucket } from "../bucket";
import { totalSum } from '../common/calc'


export const bookingSmall = () => {

    let bucket = Bucket.getInstance();
    const rooms = bucket.getRooms();
    const treatments = bucket.getTreatments();
    
    const fragment = $('<div id="cartModal" data-aos="fade-left" data-aos-duration="1000" class="container cart--modal mb-3">');
    const ul = $('<ul id="products-list" class="list-group list-group-flush">');

    const headerUl = $(
        `
            <li class="list-group-item bg-light text-center">
                <div class="row align-items-center">
                    <div class="col-md-6 col-sm-12 align-middle">
                        Product
                    </div> 
                    <div class="col-md-2 col-sm-12 align-middle">
                        Nights
                    </div>
                    <div class="col-md-2 col-sm-12 quantity align-middle">
                        Quantity
                    </div>
                    <div class="col-md-2 col-sm-12 align-middle">
                        Price
                    </div>
                </div> 
            </li>
        `);


    const total = $(
                `
                    <li class="list-group-item bg-light text-right">
                        <h5>
                            <span class="m-2">Total:</span>
                            <span id="total" class="m-2">${totalSum(rooms,treatments)}</span>
                            <span class="m-2">$</span>
                        </h5>
                    </li>
                `);

    const page = () => {
        
        if (!bucket.isEmpty()) {
            ul.append(headerUl);
            ul.append(cartSmallRooms());
            ul.append(cartSmallTreatments());
            ul.append(total);
            fragment.append(ul);
            fragment.on('mouseleave', () => {
                $('#cartModal').remove();
            })
        } else {
            fragment.append(cartContentEmpty());
        };

        return fragment;
    }

    return page;
};