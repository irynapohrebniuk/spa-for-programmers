import $ from 'jquery';

export const buttonDelete = (click) => {
    const buttonDelete = $('<span></span>');
    buttonDelete.addClass("float-right");
    const anchor = $('<a class="btn btn-link text-dark">&times;</a>');
    anchor.on('click', (event) => deleteRow(event.target));
    buttonDelete.append(anchor);

    return buttonDelete;
};

function deleteRow(target) {
    console.log("clicked");
    let deleteButtonClicked = target.parentElement.parentElement;
    deleteButtonClicked.remove();
}