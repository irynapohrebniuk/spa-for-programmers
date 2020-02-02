import $ from 'jquery';

export const cartButton = () => {

    const fragment = $(new DocumentFragment());




    const span = $("<span></span>")
        .addClass("d-inline-block");
    const button = $("<button>")
        .addClass("btn btn-primary")
        //    .css("pointer-events", "none")
        .html('Button')
        //    .attr({
        //        "data-toggle": "popover",
        //        "title": "Popover Header",
        //        "data-content": "Some content inside the popover"
        //    });

    button.on("click", function() {
        console.log($(this).text())
    });

    span.append(button);
    fragment.append(span);

    return fragment;

}