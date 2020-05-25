export const alert = (message) => {
    return $(`
        <div class="alert alert-danger alert-dismissible fade show ml-3" role="alert">
            <strong>${message}</strong>
            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
    `)
}