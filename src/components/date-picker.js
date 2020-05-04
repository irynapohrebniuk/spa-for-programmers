
export const datePicker = () => {

    const datePicker = $(`
    <div class="fixed-top">
        <div class="w-25 mx-auto opacity-90 rounded">
            <div class="input-group m-3 p-2 mx-auto">
                <input class="datePicker check-in form-control form-control-lg " placeholder="Check-in..."/>
                <div class="input-group-append">
                    <span class="input-group-text">
                        <i class="fa fa-calendar" aria-hidden="true"></i>
                    </span>
                </div>
                <input class="datePicker check-out form-control form-control-lg" placeholder="Check-out..."/>
            </div>
        </div>
    </div>
    `);

    const today = new Date();
    const date = today.getDate();

    const monthCheckIn = today.getMonth()+1;
    const yearCheckIn = today.getFullYear();
    const dateCheckOut = date+1;
    const monthCheckOut = today.getMonth() + 1;
    const yearCheckOut = today.getFullYear() + 1;
    const checkInDate = monthCheckIn+'.'+dateCheckOut+'.'+yearCheckIn;
    const checkOutDate = monthCheckOut+'.'+dateCheckOut+'.'+yearCheckOut;
    const maxCheckInDate = monthCheckOut+'.'+dateCheckOut+'.'+yearCheckOut


    datePicker.find('.check-in').datepicker({
        language: 'pl',
        position: 'bottom left',
        dateFormat: 'dd.mm.yyyy',
        minDate: new Date(),
        maxDate: new Date(maxCheckInDate)
    })
    datePicker.find('.check-out').datepicker({
        language: 'pl',
        position: 'bottom right',
        dateFormat: 'dd.mm.yyyy',
        minDate: new Date(checkInDate),
        maxDate: new Date(checkOutDate),
    })

    datePicker.find('.check-in')
        .on('mouseenter', function () {
        $('.check-in').removeClass('bg-light text-dark');
        $('.check-in').addClass('bg-dark text-light');
    })
        .on('mouseleave', function () {
            $('.check-in').removeClass('bg-dark text-light');
            $('.check-in').addClass('bg-light text-dark');
        })

    datePicker.find('.check-out')
        .on('mouseenter', function () {
            $('.check-out').removeClass('bg-light text-dark');
            $('.check-out').addClass('bg-dark text-light');
        })
        .on('mouseleave', function () {
            $('.check-out').removeClass('bg-dark text-light');
            $('.check-out').addClass('bg-light text-dark');
        })


    return datePicker;
}




