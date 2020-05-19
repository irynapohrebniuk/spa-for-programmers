import { routeChange } from "../router/route-change";

let images = require.context('../img/gallery', false);

export const gallery = () => {

  const gallery = $(`<div id="gallery"></div>`)

  const row = $('<div class="row no-gutters">')

  images.keys().map((key) => {
    const image = $('<img class="img-fluid">')
    image.attr('src', images(key).default)
    const column = $('<div data-aos="flip-left" class="col-sm-6 col-md-4 col-lg-3 col-xs-12">')

    column.append(image)
    row.append(column)
  })

  gallery.append(row)


  return gallery
}