let images = require.context('../img/main_carousel', false);

const gridTwoColumns = (id1, id2) => {

    const gridTwoColumns = $(`
    <div class="container m-0 p-0">
        <div class="row justify-content-center">
            <div id=${id2} class="col col-lg-5 col-md-7 col-sm-12 pt-2"></div>
            <div id=${id1} class="col col-lg-5 col-md-7 col-sm-12"></div>
        </div>
    </div>
    `)

    return gridTwoColumns
}

export { gridTwoColumns }

