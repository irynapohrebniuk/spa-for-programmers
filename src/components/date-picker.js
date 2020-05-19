import { routeChange } from '../router/route-change'

export const datePicker = () => {
    let checkIn;
    let checkOut;

    const checkInMax = new Date(new Date().setFullYear(new Date().getFullYear() + 1));

    const checkOutMin = (checkIn) => {
        console.log("checkIn", checkIn);
        let d;
        if (checkIn === undefined) {
            d = new Date(new Date().setDate(new Date().getDate() + 1));
        } else {
            d = new Date(new Date(checkIn).setDate(new Date(checkIn).getDate() + 1)); 
        }
        console.log("checkOutMin(checkIn)", d);
        return d;
    }
   

    const datePicker = $(`
        <form class="mx-auto">
            <div class="form-row no-gutters">
                <div class="mx-auto">
                <div class="mx-auto opacity-90 rounded">
                    <div id="input-group" class="input-group p-2 mx-auto">
                        <input id="checkin" class="datePicker check-in form-control form-control-lg" placeholder="Check-in..."/>
                        <input class="datePicker check-out form-control form-control-lg" placeholder="Check-out..."/>
                    </div>
                </div>
            </div>
        </form>
    `);


    datePicker.find('.check-in').datepicker({
        language: 'pl',
        position: 'bottom left',
        dateFormat: 'mm.dd.yyyy',
        minDate: new Date(),
        maxDate: checkInMax,
        onSelect: function (date) {
            checkIn = date;
            datePicker.find('.check-in').placeholder = date;
        }
    })


    datePicker.find('.check-out').datepicker({
        language: 'pl',
        position: 'bottom right',
        dateFormat: 'mm.dd.yyyy',
        minDate: new Date(checkOutMin(checkIn)),
        maxDate: checkInMax,
        onSelect: function (date) {
            checkOut = date;
        }
    })

   
    

    

    
    const searchButton = (click) => {
        const searchButton = $(`
        <input id="search-btn" class="form-control form-control-lg btn-lg btn-dark" type="submit" value="Search" />
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
 
    datePicker.find('#input-group').append(searchButton);

    return datePicker;
}




