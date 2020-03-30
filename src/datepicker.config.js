$(function () {
    let date = new Date();
    let day = date.getDate().toString();
    let month = (date.getMonth() + 1).toString();
    let year = (date.getFullYear() + 1).toString();
    let fullLastDate = month + '.' + day + '.' + year;

    $('.spa-datepicker').datepicker({
        minDate: new Date(),
        maxDate: new Date(fullLastDate),
        language: 'pl',
        dateFormat: 'dd.mm.yyyy'
    });
})