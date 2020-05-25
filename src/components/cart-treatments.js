import $ from 'jquery';
import { Bucket } from '../bucket';
import { totalSum } from '../common/calc'

export const cartTreatments = () => {

    let bucket = Bucket.getInstance();
    const rooms = bucket.getRooms();
    const treatments = bucket.getTreatments();

    const ul = $('<ul id="cart-item-t-${treatment.id}" class="list-group list-group-flush">');

    const item = (treatment) => {

        return (`
        <div class="row align-items-center">
            <div class="col">
                <div class='btn btn-room text-left pl-0'>
                    <h6>${treatment.name}</h6>
                </div>
                <a class="btn-del topright  bg-transparent">
                    <i id="btn-del-t-${treatment.id}" class="fa fa-times btn" aria-hidden="true"></i>
                </a>
            </div>
        </div>   
        <div class="row align-items-center">
            <div class="col col-md-5 col-sm-6"> 
                 <div class="text-muted">
                    <span id="price-t-${treatment.id}">${treatment.price}</span>
                    <span> $</span>
                    <span>for one treatment</span>
                 </div>
            </div> 
            <div class="col col-md-2 col-sm-1">
                &nbsp;
            </div>
             <div class="col col-md-2 col-sm-1 quantity align-middle">
                 <input id="quantity-t-${treatment.id}" type="number" min="1" max="20" placeholder="${treatment.quantity}" value="${treatment.quantity}" class="form-control text-center" aria-label="Quantity" pattern="[1-9]">
             </div>

             <div class="col col-md-2 col-sm-1 text-center">
                <span id="total-price-t-${treatment.id}">${treatment.totalPrice} </span>
                <span>$</span>
             </div>
             <div class="col col-md-1 col-sm-1">   
            </div>
         </div> 
         `);
    }

    const li = treatments.map((treatment) => `<li class="list-group-item">${item(treatment)}</li>`);

    ul.append(li);

    ul.find('.btn-del').on('click', (e) => {
        const btn_id = e.target.id;
        const id = btn_id.slice(10);
        console.log("id", id);
        let row = $('#cart-item-t-' + id);
        row.remove();
        bucket.deleteTreatment(id);
        $('#total').html(totalSum(rooms,treatments));
        if (bucket.isEmpty) location.reload();
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