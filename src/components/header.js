import { datePicker } from '../components/date-picker'
import { nav } from './navigation/nav'
import { navbar } from './navigation/navbar'
import { navbarMobile } from './navigation/navbar-mobile'

const header = () => {
    const header = $(new DocumentFragment())
    const grid = $(`
        <div id="header" class="row align-items-center">
            <div id="find-text" class="col-lg-8 col-md-6 col-sm-12 col-xs-12 mt-2"></div>
            <div id="find-room" class="col-lg-4 col-md-6 col-sm-12 col-xs-12"></div>
        </div>
    `)

    const text = '<h4 class="text-center">Find avalaible room for you and much more...</h4>'

    header.append(navbar)
    header.append(navbarMobile)
    
    header.append(grid)

    grid.find('#find-text').append(text)
    grid.find('#find-room').append(datePicker)

    return header
}
export { header }