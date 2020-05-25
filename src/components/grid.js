let images = require.context('../img/main_carousel', false);

const gridTwoColumns = (id1, id2) => {

    const gridTwoColumns = $(`
    <div class="container m-0 p-0">
        <div class="row row-cols-1 row-cols-sm-1 row-cols-md-2 justify-content-center">
            <div id=${id2} class="col pt-2"></div>
            <div id=${id1} class="col"></div>
        </div>
    </div>
    `)

    return gridTwoColumns
}

export { gridTwoColumns }

