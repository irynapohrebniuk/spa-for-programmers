import {signup} from "../views/signup";
import {home} from "../views/home";
import {rooms} from "../views/rooms";
import {room} from "../views/room";
import {treatments} from "../views/treatments";
import {contact} from "../views/contact";
import {booking} from "../views/booking";
import {login} from "../views/login";
import {filter} from "../views/filter"

export const routes = [
    { name: 'Home', path: '/', data: {group: "main-menu"}, component: home },
    { name: 'Rooms', path: '/rooms', data: {group: "main-menu"}, component: rooms },
    { name: 'Treatments', path: '/treatments', data: {group: "main-menu"}, component: treatments },
    { name: 'Contact', path: '/contact', data: {group: "main-menu"}, component: contact },
    { name: 'Booking', path: '/booking', data: {group: "booking"}, component: booking },
    { name: 'Auth', path: '/login', data: {group: "login"}, component: login },
    { name: 'Sign up', path: '/signup', data: {group: "signup"}, component: signup },
    { name: 'Filter', path: '/filter', data: {group: "filter"}, component: filter },
    { name: 'Room', path: '/room', data: {group: "detail"}, component: room }
];