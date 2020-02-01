import $ from 'jquery';

export const navBasket = (click) => {
    const navBasket = $(`<i class="fa fa-shopping-basket basket" data-toggle="modal" data-target="#exampleModalLong"></i>
    <div class="modal fade" id="exampleModalLong" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content text-black-50">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLongTitle">Your order</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="row">
            <div class="col-md-8">Peeleng jnnnjb</div>
            <div class="col-md-4">Cena</div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary">Save changes</button>
          </div>
        </div>
      </div>
    </div>`);


    return navBasket;
};