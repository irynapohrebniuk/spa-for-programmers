import $ from 'jquery';
import { loginForm } from "../components/login-form";
import { routeChange } from "../router/route-change";
import { button } from "../components/navigation/button";

export const login = () => {
    const fragment = $(new DocumentFragment());

   
    const container = $('<div class="container-fluid"></div>');

    const row = $('<div class="row"></div>');
    const column_1 = $('<div class="col m-3"></div>');
    const column_2 = $('<div class="col m-3" id="login_form"></div>');
    const column_3 = $('<div class="col m-3"></div>');
    const column_4 = $('<div class="col m-3"></div>');

    const loginTitle = "Log in";
    const loginButtonName = "Log in";
    column_2.append(loginForm(loginTitle, loginButtonName));

    const register_info = $(`<div><h1 class="h3 mb-3 font-weight-normal">REGISTER</div><div>If you still don't have a SPA account, use this option to access the registration form.</div><div>By giving us your details, purchasing in SPA will be faster and an enjoyable experience.</div>`);
    const registerButtonName = 'CREATE ACCOUNT';
    const registerButton = button(registerButtonName, () => container.trigger(routeChange, { path: '/signup' }));
    column_3.append(register_info);
    column_3.append(registerButton);

    // appending columns to the row
    row.append(column_1);
    row.append(column_2);
    row.append(column_3);
    row.append(column_4);
    container.append(row);

    fragment.append(container);
    return Promise.resolve(fragment);
};