import $ from "jquery";
import {Bucket} from "../bucket";
import {cartEmpty} from "./cart-empty";
import {cartContentModal} from "./cart-content-modal";

export const cartModal = () => {
    const cartModal = $('<div id="modalCart" class="modalCart hidden"></div>');
    let bucket = Bucket.getInstance();
    let content = () => {
        if (!bucket.isEmpty()) {
            let rooms = bucket.getRooms();
            return cartModal.append(cartContentModal(rooms));
        } else {
            return cartModal.append(cartEmpty());
        }
    }

    cartModal.append(content);
    return cartModal;
}