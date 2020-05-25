import { carousel } from '../components/carousel'
import { gallery } from '../components/gallery'
import { article } from '../components/article'
import { getService } from '../common/get-service'
import { promotions } from '../components/promotions';
import { dateSelector } from '../components/date-selector'
import { alert } from '../components/alert'

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
        .catch((error) => {
            return fragment.prepend(alert(error.message));
        })
      
   
    return Promise.resolve(promise)
}

export { home }