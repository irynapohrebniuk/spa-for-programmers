import {getService} from "../common/get-service";
import {card} from "./card";
import $ from "jquery";

export const roomsContent = () => {
    const fragment = $(new DocumentFragment());
    const typeOfService = "rooms";
    const promise = getService.getServices(typeOfService)
        .then(rooms => {
            for (let i = 0; i < rooms.length; i++) {
                let room = rooms[i];
                fragment.append(card(room));
            }
            return fragment;
        });
    return Promise.resolve(promise);
}