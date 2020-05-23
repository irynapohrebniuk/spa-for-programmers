import $ from 'jquery';

import { carousel } from '../components/carousel'
import { gallery } from '../components/gallery'
import { article } from '../components/article'
import { getService } from '../common/get-service'
import { promotions } from '../components/promotions';
import { dateSelector } from '../components/date-selector'

const home = () => {
    const fragment = $(new DocumentFragment())
    
    const text = '<h5 class="pl-2">Find avalaible room for you and much more...</h5>'
    fragment.append(text)
    fragment.append(dateSelector)

    let images = require.context('../img/main_carousel', false);
    fragment.append(carousel(images,"1"));
    
    

    const promise = getService.getServiceHotelInfo()
        .then(hotel => {
           fragment.append(article(hotel));
           fragment.append(promotions);
           fragment.append(gallery)
           return fragment
        })
      
   
    return Promise.resolve(promise)
}

export { home }