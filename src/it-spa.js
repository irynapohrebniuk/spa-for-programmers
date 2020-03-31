import 'bootstrap/dist/css/bootstrap.css';
import './it-spa.scss';
import $ from 'jquery';

import { Router } from './router/router';
import { nav } from "./navigation/nav";
import {cartModal} from "./components/cart-modal";

const main = $('main');

const router = new Router();

router.mount(main);
router.init();

main.before(nav());
main.before(cartModal());