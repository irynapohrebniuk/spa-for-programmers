import { routeChange } from '../router/route-change'

let checkIn;
let checkOut;
let dateSelectorForm;

export const dateSelector = () => {
    
    const clear = () => {
        if ($("#error-message")) $("#error-message").remove();
    }

    dateSelectorForm = $(`
        <form id="dateSelectorForm">
            <div id="input-group" class="row no-gutters input-group p-2 m-2"></div>  
        </form>
    `);

    
    
    const input = (id) => {
        return $(`
                <input 
                    id="${id}"
                    class="form-control form-control-lg rounded-0" 
                    pattern="(?:(?:0[1-9]|1[0-2])[\/\\-. ]?(?:0[1-9]|[12][0-9])|(?:(?:0[13-9]|1[0-2])[\/\\-. ]?30)|(?:(?:0[13578]|1[02])[\/\\-. ]?31))[\/\\-. ]?(?:19|20)[0-9]{2}" 
                    placeholder="mm.dd.yyyy"
                    autocomplete="off" required/>
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
        <input id="search-btn" class="form-control form-control-lg btn btn-lg btn-outline-dark rounded-0" type="submit" value="Search" />
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

    const col_1 = $('<div class="col col-lg-2 col-md-3 col-sm-12">');
    const col_2 = $('<div class="col col-lg-2 col-md-3 col-sm-12">');
    const col_3 = $('<div class="col col-lg-1 col-md-2 col-sm-12">');

    const checkin = col_1.append(input("checkin"));
    const checkout = col_2.append(input("checkout"));
    const btn = col_3.append(searchButton);

    dateSelectorForm.find('#input-group').append(checkin, checkout,btn);

    initCheckInDate();
    initCheckOutDate();

    return dateSelectorForm;
}

const checkInMax = (date) => {
    if (date == undefined) {
        date = new Date();
        const oneYearPlus = date.getFullYear() + 1;
        date.setFullYear(oneYearPlus);
    } else {
        const minusOneDay = date.getDate() - 1;
        date.setDate(minusOneDay);
    }
    return date;
}

const checkOutMax = (date) => {
    if (date == undefined) {
        date = new Date();
        const oneYearPlus = date.getFullYear() + 1;
        const oneDayPlus = date.getDate() + 1;
        date.setFullYear(oneYearPlus);
        date.setDate(oneDayPlus);
    } else {
        const minusOneDay = date.getDate() - 1;
        date.setDate(minusOneDay);
    }
    return date;
}

const checkOutMin = (date) => {
    if (date == undefined) {
        date = new Date();
    } 
    const plusOneDay = date.getDate() + 1;
    date.setDate(plusOneDay);
    return date;
}

function initCheckInDate() {
    dateSelectorForm.find('#checkin').datepicker({
        language: 'pl',
        position: 'bottom left',
        dateFormat: 'mm.dd.yyyy',
        minDate: new Date(),
        maxDate: checkInMax(),
        onSelect: function (date) {
            actualizeCheckOutDate(date);
            checkIn = date;
        }
    })
}

function initCheckOutDate() {
    dateSelectorForm.find('#checkout').datepicker({
        language: 'pl',
        position: 'bottom right',
        dateFormat: 'mm.dd.yyyy',
        minDate: checkOutMin(),
        maxDate: checkOutMax(),
        onSelect: function (date) {
            actualizeCheckInDate(date);
            checkOut = date;
        }
    })
}

function actualizeCheckInDate(date) {
    dateSelectorForm.find('#checkin').datepicker({
        maxDate: checkInMax(new Date(date))
    })
}

function actualizeCheckOutDate(date) {
        dateSelectorForm.find('#checkout').datepicker({
        minDate: checkOutMin(new Date(date))
    })
}