import $ from 'jquery';
import { Bucket } from '../bucket';

export const cartSmallTreatments = () => {

    let bucket = Bucket.getInstance();
    const treatments = bucket.getTreatments();

    const item = (treatment) => {

        return (`
         <div id="cart-t-item-${treatment.id}" class="row align-items-center">
            <div class="col-md-6 col-sm-12 align-middle">
                 <h6>${treatment.name}</h6>
                 <div class="text-muted">
                    <span id="price-t-${treatment.id}">${treatment.price}</span>
                    <span> $</span>
                    <span>for one treatment</span>
                 </div>
            </div> 
            <div class="col-md-2 col-sm-12 text-muted">
            </div>
             <div class="col-md-2 col-sm-12 quantity text-center">
                ${treatment.quantity}
             </div>

             <div class="col-md-2 col-sm-12 text-center">
                <span id="total-price-t-${treatment.id}">${treatment.totalPrice} </span>
                <span>$</span>
             </div>
         </div> 
         
         `);
    }

    const fragment = $(new DocumentFragment);
    const list = treatments.map((treatment) => `<li class="list-group-item">${item(treatment)}</li>`);

    fragment.append(list);



    return fragment;
}