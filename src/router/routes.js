import { home, rooms, treatments, booking, contact, login } from '../views';
import $ from 'jquery';
import {signup} from "../views/signup";

export const routes = [
    { name: 'Home', path: '/', data: {group: "main-menu"}, component: home },
    { name: 'Rooms', path: '/rooms', data: {group: "main-menu"}, component: rooms },
    { name: 'Treatments', path: '/treatments', data: {group: "main-menu"}, component: treatments },
    { name: 'Contact', path: '/contact', data: {group: "main-menu"}, component: contact },
    { name: 'Booking', path: '/booking', data: {group: "booking"}, component: booking },
    { name: 'Auth', path: '/login', data: {group: "login"}, component: login },
    { name: 'Sign up', path: '/signup', data: {group: "signup"}, component: signup }

];