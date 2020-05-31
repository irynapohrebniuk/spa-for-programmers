export let Bucket = (function() {

    let instance;

    function init() {

        let rooms = JSON.parse(localStorage.getItem('rooms')) || []
        let treatments = JSON.parse(localStorage.getItem('treatments')) || []

        return {
            getRooms() {
                return rooms;
            },
            getTreatments() {
                return treatments;
            },

            isEmpty() {
                return (rooms.length === 0 && treatments.length === 0);
            },

            isEmptyItems(items) {
                return items.length === 0;
            },

            addRoom(id, name, price, nights, quantity, totalPrice, checkIn, checkOut) {
                const room = {
                    id: id,
                    name: name,
                    price: price,
                    nights: nights,
                    quantity: quantity,
                    totalPrice: totalPrice,
                    checkIn: checkIn,
                    checkOut: checkOut
                }

                if (this.isEmptyItems(rooms)) {
                    room.totalPrice = room.price * quantity * nights;
                    rooms.push(room);
                } else if (!this.isEmptyItems(rooms) && rooms.find(room => room.id == id)) {
                    rooms.map(room => {
                        if (room.id == id) {
                            room.quantity += quantity;
                            room.totalPrice = room.price * room.quantity
                        }
                    })
                } else {
                    room.totalPrice = room.price * quantity * nights;
                    rooms.push(room);
                }
                localStorage.setItem('rooms', JSON.stringify(rooms))
            },

            updateRoom(id, quantity, nights) {
                rooms.map(room => {
                    if (room.id == id) {
                        room.quantity = quantity;
                        room.nights = nights;
                        room.totalPrice = room.quantity * room.price * room.nights;
                        localStorage.setItem('rooms', JSON.stringify(rooms));
                    }
                })
            },

            deleteRoom(id) {
                const index =  rooms.indexOf(id);
                rooms.splice(index,1);
                localStorage.setItem('rooms', JSON.stringify(rooms));
            },

            addTreatment(id, name, price, quantity, totalPrice) {
                const treatment = {
                    id: id,
                    name: name,
                    price: price,
                    quantity: quantity,
                    totalPrice: totalPrice
                }

                if (this.isEmptyItems(treatments)) {
                    treatment.totalPrice = treatment.price * quantity;
                    treatments.push(treatment);
                } else if (!this.isEmptyItems(treatments) && treatments.find(treatment => treatment.id == id)) {
                    treatments.map(treatment => {
                        if (treatment.id == id) {
                            treatment.quantity += quantity;
                            treatment.totalPrice = treatment.price * treatment.quantity
                        }
                    })
                } else {
                    treatment.totalPrice = treatment.price * quantity;
                    treatments.push(treatment);
                }
                localStorage.setItem('treatments', JSON.stringify(treatments))
            },

            updateTreatment(id, quantity) {
                treatments.map(treatment => {
                    if (treatment.id == id) {
                        treatment.quantity = quantity;
                        treatment.totalPrice = treatment.quantity * treatment.price;
                        localStorage.setItem('treatments', JSON.stringify(treatments));
                    }
                })
            },

            deleteTreatment(id) {
                const index =  treatments.indexOf(id);
                treatments.splice(index,1);
                localStorage.setItem('treatments', JSON.stringify(treatments));
            }
        };
    }

    return {
        getInstance: function () {
            if ( !instance ) {
                instance = init();
            }
            return instance;
        }
    };

})();