import $ from 'jquery';
import { cartContent } from '../components/cart-content';
import { cartEmpty } from '../components/cart-empty';
import {Bucket} from "../bucket";


export const booking = () => {
    let bucket = Bucket.getInstance();
    let page = () => {
        if (!bucket.isEmpty()) {
            let rooms = bucket.getRooms();
            return cartContent(rooms);
        } else {
            return cartEmpty();
        };
    }

    return Promise.resolve(page);
};