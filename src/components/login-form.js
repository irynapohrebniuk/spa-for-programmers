import $ from "jquery";
import { routeChange } from "../router/route-change";
import { navItemAccount } from "./navigation/nav-item-account";
import { alert } from "./login-alert";

export const loginForm = (title, buttonTitle) => {
    const fragment = $(new DocumentFragment());

    const loginForm = $(
        `<form class="w-50 mx-auto">
            <h1 class="h3 mb-3 font-weight-normal text-center">${title.toUpperCase()}</h1>
            
            <label for="inputEmail" class="sr-only">Email address</label>
            <input type="email" id="inputEmail" class="form-control form-control-lg m-2" placeholder="Email address" autocomplete="email" required autofocus>
            
            <label for="inputPassword" class="sr-only">Password</label>
            <input type="password" id="inputPassword" class="form-control form-control-lg m-2" placeholder="Password" autocomplete="current-password" required>
            
            <div class="checkbox mb-3">
                <p>
                    <label class="m-2">
                        <input type="checkbox" value="remember-me"> Remember me
                    </label>
                </p>
            </div>

            <button class="btn btn-lg btn-dark btn-block m-2" type="submit">${buttonTitle}</button>
      </form>`
    );

    loginForm.submit(function (event) {
        // Stop loginForm from submitting normally
        event.preventDefault();
        // Get some values from elements on the page:
        const email = $('#inputEmail').val();
        const password = $('#inputPassword').val();
        console.log("email: ", email, " | password: ", password);

        let request = $.ajax({
            method: "POST",
            url: "http://localhost:3001/login",
            data: {email: `${email}`, password: `${password}`},
            dataType: "json"
        });

        request.done(function (msg) {
            // console.log("login");
            loginForm.trigger(routeChange, { path: '/rooms' });
            $('#user-icon').html(('<i class="fas fa-user pr-3"></i>'));
            $('#user-icon-mobile').html(('<i class="fas fa-user pr-3"></i>'));
        });

        request.fail(function (jqXHR, textStatus, error) {
            // console.log("41: fail().data:" + JSON.stringify(jqXHR));
            // console.log("42: fail().status: " + textStatus);
            // console.log("42: fail().error: " + error);
            const alertMessage = alert();
            loginForm.remove();
            ($("#login_form")).append(alertMessage);

        });
    });


    fragment.append(loginForm);
    return fragment;
}