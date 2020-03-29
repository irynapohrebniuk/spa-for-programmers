import $ from 'jquery';
import { cartContent } from '../components/cart-content';
import { cartEmpty } from '../components/cart-empty';
import {Bucket} from "../bucket";


export const booking = () => {
    const fragment = $(new DocumentFragment());
    const container = $('<div class="container-fluid"></div>');
    let bucket = Bucket.getInstance();
    let page = () => {
        if (!bucket.isEmpty()) {
            let rooms = bucket.getRooms();
            return container.append(cartContent(rooms));
        } else {
            return container.append(cartEmpty());
        };
    }

    fragment.append(page);

    return Promise.resolve(fragment);
};