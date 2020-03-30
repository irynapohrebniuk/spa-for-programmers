import $ from "jquery";
import {Bucket} from "../bucket";
import {cartContent} from "./cart-content";
import {cartEmpty} from "./cart-empty";

export const cart = () => {
    const modalCart = $('<div id="modalCart" class="v-mid"></div>');
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
    const button = $('<button id="close" class="float-right">close</button>');

    button.click(function () {
        $(this).parent().remove();
    });

    modalCart.prepend(button);
    return modalCart;
}