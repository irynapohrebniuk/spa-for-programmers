import { Cart } from "./cart";


export const itSpaCart = () => {
    const cart = new Cart();

    cookieStore.addEventListener('change', (event) => {
        const novaZawartosc = cart.get();
        // ... i poprawiam wyswietlanie przez kosz informacje
    });
};