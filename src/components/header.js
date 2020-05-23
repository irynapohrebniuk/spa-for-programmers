import { navbar } from './navigation/navbar'
import { navbarMobile } from './navigation/navbar-mobile'

const header = () => {
    const header = $('<header id="header">')

    header.append(navbar)
    header.append(navbarMobile)
    
    return header
}
export { header }