import 'bootstrap/dist/css/bootstrap.css';
import $ from 'jquery';
import '../src/css/it-spa.scss'
import { Router } from './router/router';
import { nav } from "./navigation/nav";
import {cartModal} from "./components/cart-modal";

const main = $('main');

const router = new Router();

router.mount(main);
router.init();

main.before(nav());
main.before(cartModal());