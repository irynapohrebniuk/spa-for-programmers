import img1 from '../img/promotions/brown-wooden-dock-on-white-sand-beach-3788336.jpg'
import img2 from '../img/promotions/happy-family-sitting-and-looking-at-a-laptop-4260753.jpg'
import img3 from '../img/promotions/man-and-woman-kissing-948185.jpg'

export const promotions = () => {
    return (`
    <div class="row row-cols-md-3 row-cols-sm-1 pt-3">
        <div class="col-md col-sm-12" data-aos="zoom-in">
            <div class="card mb-3" style="max-width: 540px;">
                <div class="row no-gutters">
                    <div class="col-md-4">
                        <img src=${img1} class="card-img" alt="...">
                    </div>
                    <div class="col-md-8">
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
        <div class="col-md col-sm-12" data-aos="zoom-in">
            <div class="card mb-3" style="max-width: 540px;">
                <div class="row no-gutters">
                    <div class="col-md-4">
                        <img class="img-fluid" src=${img3} class="card-img" alt="...">
                    </div>
                    <div class="col-md-8">
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
        <div class="col-md col-sm-12" data-aos="zoom-in">
            <div class="card mb-3" style="max-width: 540px;">
                <div class="row no-gutters">
                    <div class="col-md-4">
                        <img src=${img2} class="card-img" alt="...">
                    </div>
                    <div class="col-md-8">
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