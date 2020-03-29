import $ from 'jquery';
import {datePicker} from "../components/date-picker";

export const home = () => {
    const fragment = $('<div>');
    const container = $('<div class="container-fluid"><h2 class="text-center mt-2">Home</h2></div>');
    container.append('<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi accusantium similique eligendi natus suscipit blanditiis culpa delectus rem iste, beatae tenetur magnam non molestias quasi quod placeat earum, error ad!</p>');
    container.append(datePicker);
    fragment.append(container);


    return Promise.resolve(fragment);
}