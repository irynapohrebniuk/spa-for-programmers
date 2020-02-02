import $ from 'jquery';
import { cartContent } from '../components/cart-content';
import { cartEmpty } from '../components/cart-empty';


export const booking = () => {
    const fragment = $(new DocumentFragment());
    const container = $('<div class="container"></div>');
    container.append(cartContent);

    fragment.append(container);
    fragment.append(cartEmpty);


    return Promise.resolve(fragment);
};