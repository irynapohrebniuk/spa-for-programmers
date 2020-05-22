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

    const total = $(
                `<ul="list-group">
                    <li class="list-group-item bg-light text-right">
                        <h4>
                            <span class="m-2">Total:</span>
                            <span id="total" class="m-2">${totalSum(rooms,treatments)}</span>
                            <span class="m-2">$</span>
                        </h4>
                    </li>
                </ul>`);

    const page = () => {
        
        if (!bucket.isEmpty()) {
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