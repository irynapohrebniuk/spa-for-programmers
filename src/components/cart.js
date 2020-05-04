import $ from "jquery";
import {Bucket} from "../bucket";
import {cartContent} from "./cart-content";
import {cartContentEmpty} from "./cart-empty";

export const cart = () => {

    let bucket = Bucket.getInstance();
    let model = () => {
        if (!bucket.isEmpty()) {
            let rooms = bucket.getRooms();
            return cartContent(rooms);
        } else {
            return cartContentEmpty();
        }
    }
    return model;
}