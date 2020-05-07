import slide_1 from '../img/slide1.png';
import slide_2 from '../img/slide2.png';
import slide_3 from '../img/slide3.png';

const carousel = () => {
    
    const carousel = $(`
        <div>
            <div id="carousel" class="carousel slide" data-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src=${ slide_1 } class="d-block w-100" alt="slide">   
                    </div>
                    <div class="carousel-item">
                        <img src=${ slide_2 } class="d-block  w-100" alt="slide">
                    </div>
                    <div class="carousel-item">
                        <img src=${ slide_3 } class="d-block w-100" alt="slide">    
                    </div>
                </div>
            </div>
        </div>
    `)

return carousel
} 

export { carousel }