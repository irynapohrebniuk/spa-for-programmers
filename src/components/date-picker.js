import { filterServices } from '../common/filter-service'
import { card } from '../components/card'
import { routeChange } from '../router/route-change'

export const datePicker = () => {

    const today = new Date();
    
    const dateCheckIn = today.getDate();
    const monthCheckIn = today.getMonth() + 1;
    const yearCheckIn = today.getFullYear() + 1;
    const checkInLastDate = monthCheckIn + '.' + dateCheckIn + '.' + yearCheckIn;

    const dateCheckOut = dateCheckIn + 1;
    const monthCheckOut = today.getMonth() + 1;
    const yearCheckOut = today.getFullYear() + 1;
    
    const checkOutDate = monthCheckOut + '.' + dateCheckOut + '.' + yearCheckOut;
    const maxCheckInDate = monthCheckOut + '.' + dateCheckOut + '.' + yearCheckOut


    let checkIn;
    let checkOut;

    const datePicker = $(`
    <div class="mx-auto">
    <div class="mx-auto opacity-90 rounded">
        <div class="input-group p-2 mx-auto">
            <div class="input-group-prepend">
                <span class="input-group-text">
                    <i class="fa fa-calendar" aria-hidden="true"></i>
                </span>
            </div>
            <input id="checkin" class="datePicker check-in form-control form-control-lg" placeholder="Check-in..."/>
            <div class="input-group-append">
                <span class="input-group-text">
                    <i class="fa fa-calendar" aria-hidden="true"></i>
                </span>
            </div>
            <input class="datePicker check-out form-control form-control-lg" placeholder="Check-out..."/>
            <div class="input-group-append" id="search-btn">
            </div>
        </div>
    </div>
</div>
    `);


    datePicker.find('.check-in').datepicker({
        language: 'pl',
        position: 'bottom left',
        dateFormat: 'mm.dd.yyyy',
        minDate: today,
        maxDate: new Date(checkInLastDate),
        onSelect: function (date) {
            checkIn = date;
        }
    })


    datePicker.find('.check-out').datepicker({
        language: 'pl',
        position: 'bottom right',
        dateFormat: 'mm.dd.yyyy',
        minDate: new Date(checkOutDate),
        // maxDate: new Date(),
        onSelect: function (date) {
            checkOut = date;
        }
    })

    const searchButton = (click) => {
        const searchButton = $(`
        <input class="input-group-text btn-primary" type="submit" value="Submit">
        `)
            .on('click', () => {
                if (checkIn === undefined) {
                    alert("Please enter checkin")
                } else {
                    $('#header').trigger(routeChange, { path: '/filter', checkIn: checkIn, checkOut: checkOut }); 
                }
            })
            
        return searchButton;
    } 
 
    datePicker.find('#search-btn').append(searchButton);

    return datePicker;
}






        // <form>
        //     <input id="checkin" class="datePicker check-in form-control form-control-lg" placeholder="Check-in..."  type="date" required />
        //     <input id="checkout" class="datePicker check-out form-control form-control-lg" placeholder="Check-out..." type="date" required/>
        //     <div id="search-btn"></div>
        // </form>