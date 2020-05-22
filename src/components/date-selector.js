import { routeChange } from '../router/route-change'

export const dateSelector = () => {
    let checkIn;
    let checkOut;

    const checkInMax = new Date(new Date().setFullYear(new Date().getFullYear() + 1));

    const checkOutMin = (checkIn) => {
        let checkOutMin;
        if (checkIn === undefined) {
            checkOutMin = new Date(new Date().setDate(new Date().getDate() + 1));
        } else {
            checkOutMin = new Date(new Date(checkIn).setDate(new Date(checkIn).getDate() + 1));
        }
        return checkOutMin;
    }

    const clear = () => {
        if ($("#error-message")) $("#error-message").remove();
    }

    const dateSelectorForm = $(`
        <form id="dateSelectorForm" class="pb-3">
            <div class="form-row no-gutters">
                    <div id="input-group" class="input-group p-2 mx-auto"></div>  
            </div>
        </form>
    `);
    

    const input = (id) => {
        return $(`
            <input 
                id="${id}"
                class="form-control form-control-lg" 
                pattern="(?:(?:0[1-9]|1[0-2])[\/\\-. ]?(?:0[1-9]|[12][0-9])|(?:(?:0[13-9]|1[0-2])[\/\\-. ]?30)|(?:(?:0[13578]|1[02])[\/\\-. ]?31))[\/\\-. ]?(?:19|20)[0-9]{2}" 
                placeholder="mm.dd.yyyy" required/>
    `).on('blur', (e) => {
        const elem = e.target;
        if (!elem.checkValidity()) {
            clear();
            const message = $('<div id="error-message" class="warn">');
            message.html(elem.validationMessage);
            $('#dateSelectorForm').append(message);
            } else {
                clear();
            }
        })
    }

    const searchButton = (click) => {
        const searchButton = $(`
        <input id="search-btn" class="form-control form-control-lg btn-lg btn-dark" type="submit" value="Search" />
        `)
            .on('click', (event) => {
                event.preventDefault();
                const message = $('<div id="error-message" class="warn">');
                if (checkIn === undefined || checkOut === undefined) {
                    
                    return;
                } else if (new Date(checkIn) >= new Date(checkOut)) {
                    clear;
                    message.html("Check-in date should be less than check-out date")
                    $('#dateSelectorForm').append(message);
                } else {
                    clear;
                    $('#header').trigger(routeChange, { path: '/filter', checkIn: checkIn, checkOut: checkOut });
                }
            })
        return searchButton;
    }

    dateSelectorForm.find('#input-group').append(input("checkin"));
    dateSelectorForm.find('#input-group').append(input("checkout"));
    dateSelectorForm.find('#input-group').append(searchButton);

    dateSelectorForm.find('#checkin').datepicker({
        language: 'pl',
        position: 'bottom left',
        dateFormat: 'mm.dd.yyyy',
        minDate: new Date(),
        maxDate: checkInMax,
        onSelect: function (date) {
            checkIn = date;
        }
    })

    dateSelectorForm.find('#checkout').datepicker({
        language: 'pl',
        position: 'bottom right',
        dateFormat: 'mm.dd.yyyy',
        minDate: new Date(checkOutMin(checkIn)),
        maxDate: checkInMax,
        onSelect: function (date) {
            checkOut = date;
        }
    })

    return dateSelectorForm;
}




