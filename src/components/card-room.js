import $ from 'jquery';


export const cardRoom = (room) => {

    const icons = (detail, quantity, name) => {
        const fragment = $(`<div>${detail}: </div>`);
        const span = `<span><i class="fas fa-${name} icon-hover m-1"></i></span>`;
        for (let i = 0; i < quantity; i++) {
            fragment.append(span);
        }
        return fragment;
    }

    const fragment = $(new DocumentFragment());
    fragment
        .append(
            `
                <div id="room-${room.id}" class="room-card">
                    <div class="card-body">
                        <h5 class="card-title">
                            ${room.name}
                            <span class="d-inline-flex p-3 bd-highlight"><h3> ${room.price} $ </h3></span>   
                        </h5>
                        <p class="card-text">
                            ${room.info}
                        </p>
                        <div id="room-details">
                            <h6>ROOM DETAILS</h6>
                        </div>
                    </div>
                </div>
            `
        )

        fragment.find("#room-details").append(icons("Beds", room.beds, "bed"));
        fragment.find("#room-details").append(icons("Quests", room.guests, "user"));

    return fragment;
}

