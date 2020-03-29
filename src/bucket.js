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

            addRoom(id, name, price) {
                const room = {
                    id: id,
                    name: name,
                    price: price
                }

                rooms.push(room);

                localStorage.setItem('rooms', JSON.stringify(rooms))
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