import $ from "jquery";
import {Bucket} from "../bucket";
import {cartContent} from "./cart-content";
import {cartEmpty} from "./cart-empty";

export const cart = () => {
    const modalCart = $('<div id="modalCart" class="modalCart hidden"></div>');
    let bucket = Bucket.getInstance();
    let content = () => {
        if (!bucket.isEmpty()) {
            let rooms = bucket.getRooms();
            return modalCart.append(cartContent(rooms));
        } else {
            return modalCart.append(cartEmpty());
        }
    }

    modalCart.append(content);


    return modalCart;
}