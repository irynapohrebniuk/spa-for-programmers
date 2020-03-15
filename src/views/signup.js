import $ from 'jquery';
import {getService} from '../common/get-service';

export const signup = () => {

    const fragment = $(new DocumentFragment());
    const container = $('<div class="container form-container"></div>');

    const form = $(
        `<form class="form-signin" id="signInForm">
        <img class="mb-4" src="" alt="" width="72" height="72">
        <h1 class="h3 mb-3 font-weight-normal">Please sign in</h1>
        <label for="inputEmail" class="sr-only">Email address</label>
        <input type="email" id="inputEmail" class="form-control" placeholder="Email address" autocomplete="email" required autofocus>
        <label for="inputPassword" class="sr-only">Password</label>
        <input type="password" id="inputPassword" class="form-control" placeholder="Password" autocomplete="current-password" required>
        <div class="checkbox mb-3">
        <p>
        <label>
            <input type="checkbox" value="remember-me"> Remember me
          </label>
        </p>
        </div>
        <button class="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
      </form>`
    );

    form.submit(function (event) {

        // Stop form from submitting normally
        event.preventDefault();
        // Get some values from elements on the page:
        const email = $('#inputEmail').val();
        const password = $('#inputPassword').val();
        console.log("email: ", email, " | password: ", password);
        // Add the new user to users.json
        let request = $.ajax({
            method: "POST",
            url: "http://localhost:3004/users",
            data: {email: `${email}`, password: `${password}`},
            dataType: "json"
        });

        request.done(function (msg) {
            console.log("done");
            alert("Data Saved: " + JSON.stringify(msg));
        });

        request.fail(function (jqXHR, textStatus, error) {
            console.log("41: fail().data:" + JSON.stringify(jqXHR));
            console.log("42: fail().status: " + textStatus);
            console.log("42: fail().error: " + error);
        });
    });

    container.append(form);
    fragment.append(container);
    return Promise.resolve(fragment);
};