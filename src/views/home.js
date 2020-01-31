import $ from 'jquery';

export const home = () => {
    const fragment = $(new DocumentFragment());
    fragment
        .append('<div class="container"><h2 class="text-center mt-2">Home</h2></div>')
        .find('div.container')
        .append('<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi accusantium similique eligendi natus suscipit blanditiis culpa delectus rem iste, beatae tenetur magnam non molestias quasi quod placeat earum, error ad!</p>');

    return Promise.resolve(fragment);
}