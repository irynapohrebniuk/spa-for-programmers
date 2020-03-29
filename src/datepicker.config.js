$(function () {
    $('.spa-datepicker').datepicker({
        minDate: new Date("03.01.2020"),
        maxDate: new Date("03.30.2020"),
        language: 'pl',
        dateFormat: 'dd.mm.yyyy'
    });
})