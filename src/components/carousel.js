const carousel = (images) => {

    const carousel = $(`
            <div id="carousel" class="carousel slide" data-ride="carousel">
                <ol class="carousel-indicators">
                    <li data-target="#carousel" data-slide-to="0" class="active"></li>
                    <li data-target="#carousel" data-slide-to="1"></li>
                    <li data-target="#carousel" data-slide-to="2"></li>
                </ol>
                <div class="carousel-inner"></div>
                <a class="carousel-control-prev" href="#carousel" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carousel" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>
    `)

    let image;
    images.keys().map((key, index) => {
        if (index === 0) {
            image = ` 
                <div class="carousel-item active">
                    <img src=${ images(key).default } class="d-block w-100" alt="slide">   
                </div> 
            `
        } else {
            image = `
                <div class="carousel-item">
                    <img src=${ images(key).default } class="d-block w-100" alt="slide">   
                </div>
            `
        }
        carousel.find('div.carousel-inner').append(image)
    }) 

    return carousel
}

export { carousel }