import $ from 'jquery'
import { navItems } from './nav-items'

export const navbar = () => {
    const navbar = $(`
      <nav class="navbar navbar-expand-md navbar-light full-mode">
        <span class="navbar-brand logo"></span>
        <ul id="nav-links" class="navbar-nav"></ul>
      </nav>
    `);

    navbar.find('ul').append(navItems)

    return navbar
}