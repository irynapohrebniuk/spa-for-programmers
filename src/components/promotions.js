import img1 from '../img/promotions/sand-beach.png'
import img2 from '../img/promotions/happy-family.png'
import img3 from '../img/promotions/marriage.png'

export const promotions = () => {
    return (`
    <div>
        <div class="card-deck m-1 p-5">
            <div class="card" data-aos="fade-in">
                <div class="row">
                    <div class="col col-md-6 col-sm-12 d-none d-sm-none d-md-block">
                        <img class="card-img-top" src=${img1} alt="Card image cap">
                    </div>
                    <div class="col col-md-6 col-sm-12">
                        <img class="card-img-top d-block d-sm-none" src=${img1} alt="Card image cap">
                        <div class="card-body">
                            <h5 class="card-title">FREE NIGHT</h5>
                            <p class="card-text">stay 2 nights and get a night for free</p>
                            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                </div>
            </div>
    
            <div class="card" data-aos="fade-in">
                <div class="row">
                    <div class="col col-md-6 col-sm-12 d-none d-sm-none d-md-block">
                        <img class="card-img-top" src=${img3} alt="Card image cap">
                    </div>
                    <div class="col col-md-6 col-sm-12">
                        <img class="card-img-top d-block d-sm-none" src=${img3} alt="Card image cap">
                        <div class="card-body">
                            <h5 class="card-title">-20% WEDDING PACKAGE</h5>
                            <p class="card-text">shuttle and transport included</p>
                            <p class="card-text"><small class="text-muted">Last updated 10 hours ago</small></p>
                        </div>
                    </div>
                </div>
            </div>
    
            <div class="card" data-aos="fade-in">
                <div class="row">
                    <div class="col col-md-6 col-sm-12 d-none d-sm-none d-md-block">
                        <img class="card-img-top" src=${img2} alt="Card image cap">
                    </div>
                    <div class="col col-md-6 col-sm-12">
                        <img class="card-img-top d-block d-sm-none" src=${img2} alt="Card image cap">
                        <div class="card-body">
                            <h5 class="card-title">Seasonal promotions</h5>
                            <p class="card-text">for families with 2 children and more</p>
                            <p class="card-text"><small class="text-muted">Last updated 3 days ago</small></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `)
}