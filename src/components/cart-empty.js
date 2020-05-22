import $ from 'jquery';

export const cartContentEmpty = () => {
    const cartEmpty = $( `
    <div class="text-center p-3">
        <div>
            <hr>
        </div>
        <h5 class="text-center m-3">
            <i class="fas fa-shopping-cart" aria-hidden="true"></i> <span class="p-2"> Koszyk jest pusty</span> 
        </h5>
        <div>
            <hr>
        </div>
    </div>
    `);
    
    return cartEmpty;
}