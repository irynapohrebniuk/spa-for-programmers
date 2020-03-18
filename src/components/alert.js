import $ from "jquery";

export const alert = () => {
    const fragment = $(new DocumentFragment());
    const alert = $(`<div class="alert bg-light fade show v-mid" role="alert">
      <strong>INVALID ACCESS DETAILS.</strong> 
      <div class="p-3">We are sorry. There is no user account matching the E-mail and Password provided.</div>
      <div class="p-3">If you cannot remember your password use the link Have you forgotten your password?</div>
      <div class="p-3">If you want to set up an account with a new user, use the CREATE ACCOUNT button</div>
      <div class="p-3"><button type="button" id="alert" class="btn btn-dark" data-dismiss="alert" aria-label="Close">
        ACCEPT
      </button>
      </div>
    </div>`);
    fragment.append(alert);
    return fragment;
}