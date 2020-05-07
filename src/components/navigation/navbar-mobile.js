import { navItems } from './nav-items'
const navbarMobile = () => {
    const navbarMobile = $(`
        <div class="pos-f-t mobile">
            <nav class="navbar navbar-light bg-light">
                <span class="navbar-brand logo"></span>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
            </nav>
            <div class="collapse" id="navbarToggleExternalContent">
                <div class="bg-light p-4">
                    <ul id="nav-mobile-links" class='ul-mobile'></ul>
                </div>
            </div>
        </div>
    `)
    navbarMobile.find('#nav-mobile-links').append(navItems)

    return navbarMobile
}

  export { navbarMobile }