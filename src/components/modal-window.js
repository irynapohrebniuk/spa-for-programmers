import { routeChange } from '../router/route-change';

export const modalWindow = () => {

    const modal = $(`
        <div class="modal fade" id="spaModal" tabindex="-1" 
            role="dialog" aria-labelledby="spaModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="spaModalLabel">The product was added to Cart</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <span id="product_name"> ${name} </span> 
                        <span id="product_price" class="right"></span>
                    </div>
                    <div class="modal-footer">
                       
                    </div>
                </div>
            </div>
        </div>
    `);
    const btn = $(` <button id="goToCart" type="button" data-dismiss="modal" class="btn btn-dark">Go to Cart</button>`);
    btn.on('click', () => {
        $('#header').trigger(routeChange, { path: '/booking' })
    });
    modal.find('.modal-footer').append(btn);

    return modal;
}
