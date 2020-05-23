import $ from 'jquery';
import { loginForm } from "../components/login-form";
import { routeChange } from "../router/route-change";
import { button } from "../components/navigation/button";

export const login = () => {
    const fragment = $(new DocumentFragment());

    const container = $('<div class="container"></div>');

    const row = $('<div class="row"></div>');
    const column_1 = $('<div id="login_form" class="col-md-6">');
    
    const column_2 = $('<div class="col-md-6 p-2"></div>');

    const loginTitle = "Log in";
    const loginButtonName = "Log in";
    column_1.append(loginForm(loginTitle, loginButtonName));

    const register_info = $(`
        <div id="register" class="w-50 mx-auto p-2">
            <h2 class="h3 mb-3 font-weight-normal text-center d-none d-sm-block">
                REGISTER
            </h2>
            <div class="d-none d-sm-block">
                If you still don't have a SPA account, use this option to access the registration form.
                By giving us your details, purchasing in SPA will be faster and an enjoyable experience.
            </div>
        </div>
    `);

    const registerButtonName = 'CREATE ACCOUNT';
    const registerButton = button(registerButtonName, () => container.trigger(routeChange, { path: '/signup' }));
    column_2.append(register_info);
    column_2.find('#register').append(registerButton);

    row.append(column_1, column_2);
    
    container.append(row);

    fragment.append(container);
    return Promise.resolve(fragment);
};