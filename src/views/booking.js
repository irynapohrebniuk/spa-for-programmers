import $ from 'jquery';
import { cartContent } from '../components/cart-content';
import { cartEmpty } from '../components/cart-empty';


export const booking = () => {
    const fragment = $(new DocumentFragment());
    const container = $('<div class="container-fluid"></div>');
    container.append(cartContent);

    // if ()   fragment.append(cartEmpty); else 
    fragment.append(container);



    return Promise.resolve(fragment);
};