export class Cart {
    constructor() {
        this.key = 'IT_SPA_CART';
        this.cookieStorage;

        // cookieStore.addEventListener('change',(event) => console.log(event));
    }

    cookie() {
        // PRZED: 'key1 = val1; key - val2; ...
        const cookies = document.cookies.split(';');
        // PO: ['key1 = val1', 'key - val2', ...
        const itSpaCookie = cookies.find(cookie => cookie.startsWith(this.key));
        // PO: 'IT_SPA_CART = wartosc lub undefined
        this.cookieStorage = itSpaCookie;
        return itSpaCookie;
    }

    exists() {
        return cookieStorage !== undefined;
    }

    get() {
        const itSpaCookie = this.cookie(); // 'IT_SPA_CART = [1,2,2]'

        if (itSpaCookie !== undefined) {
            const cookieValue = itSpaCookie.split('=')[1]; //['IT_SPA_CART','[1,2,2]']
            parsedValue = JSON.parse(cookieValue); // wartosc
        }
        return parsedValue;
    }


    set(value) {
        const stringifieldValue = JSON.stringify(value);
        document.cookie = `${this.key}=${stringifieldValue}`;
    }

    empty() {
        this.set([]);
    }

}