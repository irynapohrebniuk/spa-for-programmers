import $ from 'jquery';

export const datePicker = () => {

    const datePicker = $(
        `
  <div class="row">
    <div class='col-sm-3'>
      <div class="form-group">
         <!-- Datepicker as text field -->
          <div class="input-group date" >
            <input type="text" class="spa-datepicker form-control" 
            data-date-format="dd.mm.yyyy"
            placeholder="dd.mm.yyyy" 
            data-multiple-dates="2"
            data-multiple-dates-separator=" * " 
            data-position="right top">
          </div>
      </div>
    </div>
  </div>
`
    );



    return  datePicker;

}