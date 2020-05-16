import $ from 'jquery'
import { navItems, navItemLogin, navItemCart } from './nav-items'

export const navbar = () => {
  const fragment = $('<div class="full-mode row w-100">')
    const navbar = $(`
      <div class="col-10">
        <nav class="navbar navbar-expand-md navbar-light">
          <span class="navbar-brand logo"></span>
          <ul id="nav-links" class="navbar-nav"></ul>
        </nav>
      </div>
    `)

    const userNavbar = $(`
      <div class="col-2">
          <ul id="user-nav" class="nav justify-content-end"></ul>
      </div>
    `)

    fragment.append(navbar)
    fragment.append(userNavbar)

    navbar.find('#nav-links').append(navItems)

    fragment.find('#user-nav').append(navItemLogin)
    fragment.find('#user-nav').append(navItemCart)

    return fragment
}