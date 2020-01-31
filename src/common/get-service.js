export const getService = {
    getServices(typeOfService) {
        return fetch("http://localhost:3000/" + typeOfService)
            .then(response => response.json());
    }
}