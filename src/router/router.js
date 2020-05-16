import $ from 'jquery';
import { routes } from './routes';
import { routeChange } from './route-change';
import {oops} from "../views/oops";

export class Router {

    constructor() {
        this.body = $(document.body);
        this.outlet = $('main');
        this.routes = routes;
    }

    mount(outlet) {
        this.outlet = outlet;
        this.body.on(routeChange, (event, data) => {
            console.log("mount(): event, data :", event, data);
            this.navigate(data);
        });
    }

    init() {
        this.navigate({ path: location.pathname});
    }

    get(path) {
        return this.routes.find(route => route.path === path);
    }

    has(path) {
        return this.get(path) !== undefined;
    }

    navigate(data) {
        console.log("navigate(): data :", data);
        if (this.has(data.path)) {
            const { component } = this.get(data.path);
            component(data)
                .then(html => {
                    this.outlet.empty().append(html);
                })
        } else {
            const html = oops();
            this.outlet.empty().append(html);
        }

        history.pushState(data.path, '', data.path);
    }
}