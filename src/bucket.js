export let Bucket = (function() {

    let instance;

    function init() {

        let rooms = JSON.parse(localStorage.getItem('rooms')) || []
        let treatments = JSON.parse(localStorage.getItem('treatments')) || []

        return {
            getRooms() {
                return rooms;
            },

            isEmpty() {
                return rooms.length === 0;
            },

            addRoom(id, name, price, quantity, totalPrice) {
                const room = {
                    id: id,
                    name: name,
                    price: price,
                    quantity: quantity,
                    totalPrice: totalPrice,
                    checkIn: checkIn,
                    checkOut: checkOut
                }
                console.log("room = ", room);

                if (rooms.length === 0) {
                    room.totalPrice = room.price * quantity;
                    rooms.push(room);
                } else if (rooms.length !== 0 && rooms.find(room => room.id == id)) {
                    rooms.map(room => {
                        if (room.id == id) {
                            room.quantity += quantity;
                            room.totalPrice = room.price * room.quantity
                        }
                    })
                } else {
                    room.totalPrice = room.price * quantity;
                    rooms.push(room);
                }
                localStorage.setItem('rooms', JSON.stringify(rooms))
            },

            updateRoom(id, quantity, totalPrice) {
                rooms.map(room => {
                    if (room.id == id) {
                        room.quantity = quantity;
                        room.totalPrice = room.quantity * room.price;
                        localStorage.setItem('rooms', JSON.stringify(rooms));
                    }
                })
            },

            deleteRoom(id) {
                const index =  rooms.indexOf(id);
                rooms.splice(index,1);
                localStorage.setItem('rooms', JSON.stringify(rooms));
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