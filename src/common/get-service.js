export const getService = {
    getServices(typeOfService) {
        return fetch("http://localhost:3000/" + typeOfService)
            .then(response => response.json())
            .catch(() => {
                throw new Error(`Unable to get services from server`)
            });
    },

    getServiceInfo(typeOfService, id) {
        console.warn("typeOfService =", typeOfService);
        return fetch("http://localhost:3000/" + typeOfService + "/" + id)
            .then(response => response.json())
            .catch(() => {
                throw new Error('Unable to get service from server')
            });
    },

    getServiceHotelInfo() {
        return fetch("http://localhost:3000/hotel")
            .then(response => response.json())
            .catch(() => {
                throw new Error('Unable to get hotel info from server')
            });
    },

    getUsers() {
        return fetch("http://localhost:3001/users")
            .then(response => response.json())
            .catch(() => {
                throw new Error('Unable to get users info from server')
            });
    }

}