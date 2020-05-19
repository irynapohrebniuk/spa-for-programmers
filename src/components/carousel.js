const carousel = (images,id) => {

    const carousel = $(`
            <div id="carousel-${id}" class="carousel slide" data-ride="carousel">
                <ol id="carousel-indicators-${id}" class="carousel-indicators">
                </ol>
                <div id="carousel-images-${id}" class="carousel-inner"></div>
                <a class="carousel-control-prev" href="#carousel-${id}" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carousel-${id}" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>
    `)
    let indicator;
    let image;
    images.keys().map((key, index) => {
        if (index === 0) {
            indicator = `
                <li data-target="#carousel-${id}" data-slide-to="${index}" class="active"></li>
            `
            image = ` 
                <div class="carousel-item active">
                    <img src=${ images(key).default } class="d-block w-100" alt="slide">   
                </div> 
            `
        } else {
            indicator = `
                <li data-target="#carousel-${id}" data-slide-to="${index}"></li>
            `
            image = `
                <div class="carousel-item">
                    <img src=${ images(key).default } class="d-block w-100" alt="slide">   
                </div>
            `
        }
        carousel.find(`#carousel-images-${id}`).append(image);
        carousel.find(`#carousel-indicators-${id}`).append(indicator);
    }) 

    return carousel
}

export { carousel }