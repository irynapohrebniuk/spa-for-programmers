import { gridTwoColumns } from "./grid";
import { carousel } from "./carousel";

export const roomDetails = (room) => {
    let images = require.context('../img/main_carousel', false);
    
    const fragment = new DocumentFragment();
    fragment.append(gridTwoColumns('room','room-details'));

    fragment.find('room').append(carousel(images));


}