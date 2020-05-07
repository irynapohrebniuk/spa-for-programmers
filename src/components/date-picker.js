import { filterService } from '../common/filter-service'
import { card } from '../components/card'

export const datePicker = () => {
    const datePicker = $(`
        <div class="mx-auto">
            <div class="mx-auto opacity-90 rounded">
                <div class="input-group p-2 mx-auto">
                    <input class="datePicker check-in form-control form-control-lg " placeholder="Check-in..."/>
                    <div class="input-group-append">
                        <span class="input-group-text">
                            <i class="fa fa-calendar" aria-hidden="true"></i>
                        </span>
                    </div>
                    <input class="datePicker check-out form-control form-control-lg" placeholder="Check-out..."/>
                    <div class="input-group-append">
                        <span id="search" class="input-group-text btn-primary">
                            <i class="fa fa-search ml-2 mr-2" aria-hidden="true"></i>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    `);
    
    
    let checkIn;
    let checkOut;
    
    const today = new Date();
    const date = today.getDate();

    const monthCheckIn = today.getMonth() + 1;
    const yearCheckIn = today.getFullYear();
    const dateCheckOut = date + 1;
    const monthCheckOut = today.getMonth() + 1;
    const yearCheckOut = today.getFullYear() + 1;
    const checkInDate = monthCheckIn + '.' + dateCheckOut + '.' + yearCheckIn;
    const checkOutDate = monthCheckOut + '.' + dateCheckOut + '.' + yearCheckOut;
    const maxCheckInDate = monthCheckOut + '.' + dateCheckOut + '.' + yearCheckOut


    datePicker.find('.check-in').datepicker({
        language: 'pl',
        position: 'bottom left',
        dateFormat: 'dd.mm.yyyy',
        minDate: new Date(),
        maxDate: new Date(maxCheckInDate),
        onSelect: function(date) {
            checkIn = date;
        }
    })
    datePicker.find('.check-out').datepicker({
        language: 'pl',
        position: 'bottom right',
        dateFormat: 'dd.mm.yyyy',
        minDate: new Date(checkInDate),
        maxDate: new Date(checkOutDate),
        onSelect: function(date) {
            checkOut = date;
        }
    })

   
    // datePicker.find('.check-in')
    //     .on('mouseenter', function () {
    //         $('.check-in').removeClass('bg-light text-dark');
    //         $('.check-in').addClass('bg-dark text-light');
    //     })
    //     .on('mouseleave', function () {
    //         $('.check-in').removeClass('bg-dark text-light');
    //         $('.check-in').addClass('bg-light text-dark');
    //     })

    // datePicker.find('.check-out')
    //     .on('mouseenter', function () {
    //         $('.check-out').removeClass('bg-light text-dark');
    //         $('.check-out').addClass('bg-dark text-light');
    //     })
    //     .on('mouseleave', function () {
    //         $('.check-out').removeClass('bg-dark text-light');
    //         $('.check-out').addClass('bg-light text-dark');
    //     })

    


    // datePicker.onSelect
    
    // $('#checkin').on('click', function (e) {
    //     console.log("datePicker.find('#checkin') =", datePicker.find('#checkin'));
    //     checkIn = e.target.value;
    //     return e.target.value;
    // })

   

    // datePicker.find('.check-out').on('change', function (e) {
    //     console.log(e.target.value);
    //     checkOut = e.target.value;
    //     return e.target.value;
    // })

    datePicker.find('#search').on('click', () => {
        console.log("checkin = ", checkIn, "checkout = ", checkOut);
        const fragment = $(new DocumentFragment());
        fragment.append(`
            <div class="container-fluid">
            <div class="row">
            </div>
            </div>`);

        const typeOfService = "rooms";

        const promise = filterService.filterService(typeOfService, checkIn, checkOut)
            .then(rooms => {
                console.log(checkIn, checkOut)
                for (let i = 0; i < rooms.length; i++) {
                    let room = rooms[i]
                    fragment.find('.row').append(card(room))
                    console.log(i, ':', room)
                }
                return fragment;
            });
        $('main').empty()
        $('main').append(fragment)
    })





    return datePicker;
}




