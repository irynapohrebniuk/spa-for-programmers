import $ from 'jquery';
import { cartContent } from '../components/cartContent';


export const booking = () => {
    const fragment = $(new DocumentFragment());
    const container = $('<div class="container"></div>');
    container.append(cartContent);
    fragment.append(container);

    return Promise.resolve(fragment);
};