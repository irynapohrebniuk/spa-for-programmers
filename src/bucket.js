export var Bucket = (function() {

    var instance;

    function init() {

        var rooms = JSON.parse(localStorage.getItem('rooms')) || []
        var treatments = JSON.parse(localStorage.getItem('treatments')) || []

        return {
            getRooms() {
                return rooms;
            },

            isEmpty() {
                return rooms.length === 0;
            },

            addRoom(id, name, price, quantity) {
                const room = {
                    id: id,
                    name: name,
                    price: price,
                    quantity: quantity
                }


                if (rooms.length === 0) {
                    rooms.push(room);
                } else if (rooms.length !== 0 && rooms.find(room => room.id === id)) {
                    rooms.map(room => {
                        if (room.id === id) {
                            room.quantity += quantity
                        }
                    })
                } else {
                    rooms.push(room);
                }


                localStorage.setItem('rooms', JSON.stringify(rooms))
            },

            updateRoom(id, price, quantity) {
                rooms.map(room => {
                    if (room.id === id) {
                        room.quantity += quantity;
                    }
                })
            },

            deleteRoom(id) {
                rooms = rooms.filter(room => room.id !== id);
                localStorage.setItem('rooms', JSON.stringify(rooms))
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