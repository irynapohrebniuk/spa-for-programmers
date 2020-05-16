import $ from 'jquery';

import { datePicker } from '../components/date-picker';
import { carousel } from '../components/carousel'
import { gallery } from '../components/gallery'
import { article } from '../components/article'

const home = () => {
    let images = require.context('../img/main_carousel', false);
    const fragment = $(new DocumentFragment())

    fragment.append(carousel(images))
    fragment.append(article)
    fragment.append(gallery)
   
    return Promise.resolve(fragment)
}

export { home }