import $ from "jquery";
import { button } from "../navigation/button";
import { login } from "../index";
import {loginForm} from "./login-form";


export const alert = () => {
    const fragment = $(new DocumentFragment());
    const column = $('#login_form');
    const alert = $(`<div class="alert bg-light fade show" role="alert">
      <strong>INVALID ACCESS DETAILS.</strong> 
      <div class="p-3">We are sorry. There is no user account matching the E-mail and Password provided.</div>
      <div class="p-3">If you cannot remember your password use the link Have you forgotten your password?</div>
      <div class="p-3">If you want to set up an account with a new user, use the CREATE ACCOUNT button</div>
    </div>`);
    const alertButtonName = 'ACCEPT';
    const alertButton = button(alertButtonName, ()=>{

        const login = loginForm('Log in','Log In');
        column.append(login);
        console.log('add login form again', column, login);
        alert.remove();
    });
    alert.append(alertButton);
    fragment.append(alert);
    return fragment;
}