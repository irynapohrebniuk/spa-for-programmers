import { navbar } from './navigation/navbar'
import { navbarMobile } from './navigation/navbar-mobile'
import { gridTwoColumns } from '../components/grid'
import { dateSelector } from './date-selector'

const header = () => {
    const header = $('<header id="header">')

    header.append(navbar)
    header.append(navbarMobile)

    const text = '<h4 class="text-center">Find avalaible room for you and much more...</h4>'
    header.append(gridTwoColumns('find-text', 'find-room'))
    header.find('#find-text').append(text)
    header.find('#find-room').append(dateSelector)
    
    return header
}
export { header }