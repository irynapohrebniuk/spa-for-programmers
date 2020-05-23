let images = require.context('../img/main_carousel', false);

const gridTwoColumns = (id1, id2) => {

    const gridTwoColumns = $(`
        <div class="row align-items-center">
            <div id=${id2} class="col col-lg-6 col-md-6 col-sm-12"></div>
            <div id=${id1} class="col col-lg-6 col-md-6 col-sm-12 mt-2"></div>
        </div>
    `)

    return gridTwoColumns
}

export { gridTwoColumns }

