import $ from 'jquery';
import {Bucket} from "../bucket";

export const buttonDelete = (id,click) => {
    let bucket = Bucket.getInstance();
    const buttonDelete = $('<span></span>');
    buttonDelete.addClass("float-right");
    const anchor = $('<a class="btn btn-link text-dark">&times;</a>');

    anchor.on('click', (event) => {
        deleteRow(event.target);
        bucket.deleteRoom(id);
    });
    buttonDelete.append(anchor);

    return buttonDelete;
};

function deleteRow(target) {
    let row = target.parentElement.parentElement;
    row.remove();
}