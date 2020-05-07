import $ from 'jquery';

import { datePicker } from '../components/date-picker';
import { carousel } from '../components/carousel'
import { gallery } from '../components/gallery'
import { article } from '../components/article'
import { header } from '../components/header'

const home = () => {
    
    const fragment = $(new DocumentFragment())
    
    fragment.append(carousel)
    fragment.append(article)
    fragment.append(gallery)

    return Promise.resolve(fragment)
}

export { home }