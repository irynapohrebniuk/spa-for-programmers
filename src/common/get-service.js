export const getService = {
    getServices(typeOfService) {
        return fetch("http://localhost:3000/" + typeOfService)
            .then(response => response.json());
    },

    getServiceInfo(typeOfService, id) {
        return fetch("http://localhost:3000/" + typeOfService + "/" + id)
            .then(response => response.json());
    }

}