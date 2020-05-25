import img1 from '../img/promotions/sand-beach.png'
import img2 from '../img/promotions/happy-family.png'
import img3 from '../img/promotions/marriage.png'

export const promotions = () => {
    return (`
    <div class="container">
        <div class="row row-cols-1 row-cols-sm-1 row-cols-md-3 pt-3 mx-auto">
            <div class="col col-md col-sm-12" data-aos="zoom-in">
                <div class="card mb-3" style="max-width: 540px;">
                    <div class="row no-gutters align-items-center">
                        <div class="col col-md-4 col-sm-12">
                            <img src=${img1} class="card-img" alt="...">
                        </div>
                        <div class="col col-md-8 col-sm-12">
                            <div class="card-body text-center">
                                <div class="card-text">
                                Stay 2 NIGHTS and get a </div>
                                <h5 class="card-title pt-2">FREE NIGHT</h5>
                                <div class="card-text"> for your next stay </div>
                                <p class="card-text pt-4"><small class="text-muted">Last updated 3 mins ago</small></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col col-md col-sm-12" data-aos="zoom-in">
                <div class="card mb-3" style="max-width: 540px;">
                    <div class="row no-gutters align-items-center">
                        <div class="col col-md-4 col-sm-12">
                            <img class="img-fluid" src=${img3} class="card-img" alt="...">
                        </div>
                        <div class="col col-md-8 col-sm-12">
                            <div class="card-body text-center">
                                <div class="card-text">
                                    -20 % 
                                </div>
                                <h5 class="card-title pt-2">WEDDING PACKAGE</h5>
                                <div class="card-text"> shuttle and transport included </div>
                                <p class="card-text pt-4"><small class="text-muted">Last updated 5 hours ago</small></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col col-md col-sm-12" data-aos="zoom-in">
                <div class="card mb-3" style="max-width: 540px;">
                    <div class="row no-gutters align-items-center">
                        <div class="col col-md-4 col-sm-12">
                            <img src=${img2} class="card-img" alt="...">
                        </div>
                        <div class="col col-md-8 col-sm-12">
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
    </div>
    `)
}