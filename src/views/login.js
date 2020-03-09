import $ from 'jquery';
import { getService } from '../common/get-service';

export const login = () => {


    // function checkUser(email, password, users) {
    //     const userExistent = users.find(user => user.email == email);
    //     if (userExistent) {
    //         if (userExistent.password == password) {
    //             alert('User logged in successfully');
    //         } else {
    //             alert('Username or password is incorrect');
    //         };
    //     }
    // }

    function getUsers() {
        return getService.getServices("users");
        // .then(users => {
        //     console.log("users: ", users);
        //     return users;

        // });
    }



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





    form.submit(function(event) {
        const email = $('#inputEmail').val();
        const password = $('#inputPassword').val();
        console.log("email: ", email, "password: ", password);
        console.log(getUsers());
        //checkUser(email, password, promise);

    });



    container.append(form);


    fragment.append(container);




    return Promise.resolve(fragment);
};