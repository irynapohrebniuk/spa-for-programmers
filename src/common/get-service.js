export const getService = {
    getServices(typeOfService) {
        return fetch("http://localhost:3000/" + typeOfService)
            .then(response => response.json());
    },

    getServiceInfo(typeOfService, id) {
        return fetch("http://localhost:3000/" + typeOfService + "/" + id)
            .then(response => response.json());
    },

    getServiceHotelInfo() {
        return fetch("http://localhost:3000/hotel")
            .then(response => response.json());
    },

    getUsers() {
        return fetch("http://localhost:3004/users")
            .then(response => response.json())
    }

}