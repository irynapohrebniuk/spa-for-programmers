import $ from 'jquery';
import {signupForm} from "../components/signup-form";

export const signup = () => {

    const fragment = $(new DocumentFragment());
    const container = $('<div class="row"></div>');
    const title = "Sign up";
    const buttonTitle = "Sign up";
    container.append(signupForm(title,buttonTitle));
    fragment.append(container);
    return Promise.resolve(fragment);
};