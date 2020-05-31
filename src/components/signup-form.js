import $ from "jquery";
import { alert } from "./login-alert";
import { routeChange } from "../router/route-change";

export const signupForm = (title, buttonTitle) => {
    const fragment = $(new DocumentFragment());
    const container = $('<div class="col-md-4 col-sm-12 mx-auto"></div>');
    const form = $(
        `<form>
            <h1 class="h3 mb-3 font-weight-normal">${title.toUpperCase()}</h1>
            
            <label for="inputEmail" class="sr-only">Email address</label>
            <input type="email" id="inputEmail" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" class="form-control" placeholder="Email address" autocomplete="email" required autofocus>
            
            <label for="inputPassword" class="sr-only">Password</label>
            <input type="password" id="inputPassword" class="form-control" placeholder="Password" autocomplete="current-password" required>
            <div class="checkbox mb-3">
            
            <p>
                <label class="m-2">
                    <input type="checkbox" value="remember-me"> Remember me
                </label>
            </p>
            
            </div>
            <button class="btn btn-lg btn-dark btn-block" type="submit">${buttonTitle}</button>
            <h6 id="sign-up-msg p-3 m-2"></h6>
      </form>`
    );

    form.submit(function (event) {

        // Stop loginForm from submitting normally
        event.preventDefault();
        // Get some values from elements on the page:
        const email = $('#inputEmail').val();
        const password = $('#inputPassword').val();
        // Add the new user to users.json
        let request = $.ajax({
            method: "POST",
            url: "http://localhost:3001/users",
            data: {email: `${email}`, password: `${password}`},
            dataType: "json"
        });

        request.done(function (msg) {
            alert("Data Saved: " + JSON.stringify(msg));
            $('#sign-up-msg').append('<div class="topcenter bg-success">Welcome on board!</div>');
            $('#user-icon').html(('<i class="fas fa-user pr-3"></i>'));
            $('#user-icon-mobile').html(('<i class="fas fa-user pr-3"></i>'));
            form.trigger(routeChange, {path: '/'})
        });

        request.fail(function (jqXHR, textStatus, error) {
            $('#sign-up-msg').append('<div class="bg-warn">Please try again</div>');
        });
    });

    container.append(form);
    fragment.append(container);
    return fragment;
}