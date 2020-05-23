import { cartRooms } from '../components/cart-rooms';
import { cartTreatments } from '../components/cart-treatments';
import { cartContentEmpty } from '../components/cart-empty';
import { Bucket } from "../bucket";
import { totalSum } from '../common/calc'


export const booking = () => {

    let bucket = Bucket.getInstance();
    const rooms = bucket.getRooms();
    const treatments = bucket.getTreatments();
    
    const fragment = $('<div class="container mb-3">');

    const headerUl = $(`
            <div class="bg-light p-3 mt-1">
                <div class="row align-items-center">
                    <div class="col col-md-5 col-sm-6  align-middle">
                        Product
                    </div> 
                    <div class="col col-md-2 col-sm-1 align-middle text-center">
                        Nights
                    </div>
                    <div class="col col-md-2 col-sm-2 quantity">
                        Quantity
                    </div>
                    <div class="col col-md-2 col-sm-2 align-middle text-center">
                        Price
                    </div>
                    <div class="col col-md-1 col-sm-1 align-middle">
                        &nbsp;
                    </div>
                </div> 
            </div>
        `);

    const total = $(
                `
                    <div class="bg-light text-right p-3 mt-1">
                        <h4>
                            <span class="m-2">Total:</span>
                            <span id="total" class="m-2">${totalSum(rooms,treatments)}</span>
                            <span class="m-2">$</span>
                        </h4>
                    </div>
                `);

    const page = () => {
        
        if (!bucket.isEmpty()) {
            fragment.append(headerUl);
            fragment.append(cartRooms());
            fragment.append(cartTreatments());
            fragment.append(total);
        } else {
            fragment.append(cartContentEmpty());
        };

        return fragment;
    }

    return Promise.resolve(page);
};