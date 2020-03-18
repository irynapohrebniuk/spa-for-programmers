import $ from 'jquery';
import { loginForm } from "../components/login-form";
import { signup } from "./signup";
import { routeChange } from "../router/route-change";
import { button } from "../navigation/button";

export const login = () => {
    const title = "Log in";
    const buttonTitle = "Log in";
    const fragment = $(new DocumentFragment());
    const container = $('<div class="container-fluid"></div>');
    const row = $('<div class="row"></div>');
    const column_1 = $('<div class="col m-3"></div>');
    const column_2 = $('<div class="col m-3"></div>');
    column_2.append(loginForm(title, buttonTitle));
    const column_3 = $('<div class="col m-3"></div>');
    const column_4 = $('<div class="col m-3"></div>');
    const text = $(`<div><h1 class="h3 mb-3 font-weight-normal">REGISTER</div><div>If you still don't have a SPA account, use this option to access the registration form.</div><div>By giving us your details, purchasing in SPA will be faster and an enjoyable experience.</div>`);

    const registerButton = button(()=> container.trigger(routeChange, { path: '/signup' }));

    column_3.append(text);
    column_3.append(registerButton);

    row.append(column_1);
    row.append(column_2);
    row.append(column_3);
    row.append(column_4);
    container.append(row);

    fragment.append(container);
    return Promise.resolve(fragment);
};