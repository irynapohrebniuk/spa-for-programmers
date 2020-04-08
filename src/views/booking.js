import { cartContent } from '../components/cart-content';
import { cartContentEmpty } from '../components/cart-empty';
import {Bucket} from "../bucket";


export const booking = () => {
    let bucket = Bucket.getInstance();
    let page = () => {
        let content;
        if (!bucket.isEmpty()) {
            let rooms = bucket.getRooms();
            content = cartContent(rooms);
        } else {
            content = cartContentEmpty();
        };
        return content;
    }

    return Promise.resolve(page);
};