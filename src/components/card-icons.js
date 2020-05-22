
export const cardIcons = (detail, quantity, name) => {
    const fragment = $(`<div>${detail}: </div>`);
    const span = `<span><i class="fas fa-${name} icon-hover m-1"></i></span>`;
    for (let i = 0; i < quantity; i++) {
        fragment.append(span);
    }
    return fragment
}