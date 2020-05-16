let images = require.context('../img/main_carousel', false);

const gridTwoColumns = (id1, id2) => {

    const gridTwoColumns = $(`
        <div class="row align-items-center">
            <div id=${id2} class="col-lg-4 col-md-6 col-sm-12 col-xs-12 text-right pr-4"></div>
            <div id=${id1} class="col-lg-8 col-md-6 col-sm-12 col-xs-12 mt-2"></div>
        </div>
    `)

    return gridTwoColumns
}

export { gridTwoColumns }

