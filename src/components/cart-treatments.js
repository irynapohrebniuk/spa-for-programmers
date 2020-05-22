import $ from 'jquery';
import { Bucket } from '../bucket';
import { totalSum } from '../common/calc'

export const cartTreatments = () => {

    let bucket = Bucket.getInstance();
    const rooms = bucket.getRooms();
    const treatments = bucket.getTreatments();

    const ul = $('<ul class="list-group list-group-flush">');

    const item = (treatment) => {

        return (`
         <div id="cart-t-item-${treatment.id}" class="row align-items-center">
            <div class="col-md-6 col-sm-12 align-middle">
                 <h5>${treatment.name}</h5>
                 <div class="text-muted">
                    <span id="price-t-${treatment.id}">${treatment.price}</span>
                    <span> $</span>
                    <span>for one treatment</span>
                 </div>
            </div> 
            <div class="col-md-2 col-sm-12">
                &nbsp;
            </div>
             <div class="col-md-2 col-sm-12 quantity">
                 <input id="quantity-t-${treatment.id}" type="number" min="1" max="20" placeholder="${treatment.quantity}" value="${treatment.quantity}" class="form-control text-center" aria-label="Quantity" pattern="[1-9]">
             </div>

             <div class="col-md-2 col-sm-12 text-center">
                <span id="total-price-t-${treatment.id}">${treatment.totalPrice} </span>
                <span>$</span>
             </div>
         </div> 
         <div class="btn-delete topright bg-transparent">
            <a id="btn-del-t-${treatment.id}" class="btn btn-del-t btn-link text-dark">
                <i class="fa fa-times" aria-hidden="true"></i>
            </a>
        </div>
         `);
    }

    const li = treatments.map((treatment) => `<li class="list-group-item">${item(treatment)}</li>`);

    ul.append(li);

    ul.find('.btn-del-t').on('click', (e) => {
        const btn_id = e.target.id;
        const id = btn_id.slice(10);
        let row = $('#cart-item-t-' + id);
        row.remove();
        bucket.deleteTreatment(id);
        location.reload();
    });

    ul.find('.quantity').on('change', (e) => {
        const id = e.target.id.slice(11);
        const quantity = $('#quantity-t-' + id).val();
        const price = $('#price-t-' + id).text();
        const totalPrice = Number(quantity) * Number(price);
        $('#total-price-t-' + id).text(totalPrice);
        bucket.updateTreatment(id, Number(quantity));
        $('#total').html(totalSum(rooms,treatments));
    });

    return ul;
}