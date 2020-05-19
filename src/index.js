import 'jquery/dist/jquery.min';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import 'bootstrap/dist/js/bootstrap';
import 'air-datepicker/dist/js/datepicker';
import 'air-datepicker/dist/js/i18n/datepicker.pl';
import 'air-datepicker/dist/css/datepicker.min.css';
import '@fortawesome/fontawesome-free/css/fontawesome.css';
import '@fortawesome/fontawesome-free/css/all.css';
import 'font-awesome/css/font-awesome.css';
import 'aos/dist/aos.css';
import 'aos/dist/aos';
import './css/it-spa.scss';
import { header } from './components/header'
import { footer } from './components/footer'
import { Router } from "./router/router";

const main = $('<main class="container-fluid">');
$('body').append(main);


const router = new Router();
router.mount(main);
router.init();

AOS.init({
    offset: 200,
    duration: 900,
    easing: 'ease-in-sine',
    delay: 100,
});


main.before(header)

main.after(footer)

