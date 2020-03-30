import $ from 'jquery';
import 'air-datepicker/dist/js/datepicker.min';
import 'air-datepicker/dist/js/i18n/datepicker.pl'


export const datePicker = () => {

    const datePicker = `
      <div class="form-group">
         <!-- Datepicker as text field -->
          <div class="input-group date" >
            <input type="text" class="my-datepicker form-control" 
            data-date-format="dd.mm.yyyy"
            placeholder="dd.mm.yyyy" 
            data-multiple-dates="2"
            data-multiple-dates-separator=" * " 
            data-position="right top">
          </div>
      </div>
`
    return datePicker;
}







