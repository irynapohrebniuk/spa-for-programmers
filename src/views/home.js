import $ from 'jquery';

import { carousel } from '../components/carousel'
import { gallery } from '../components/gallery'
import { article } from '../components/article'
import { getService } from '../common/get-service'
import { promotions } from '../components/promotions';

const home = () => {
    let images = require.context('../img/main_carousel', false);
    const fragment = $(new DocumentFragment())
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