export var Bucket = (function() {

    var instance;

    function init() {

        var rooms = JSON.parse(localStorage.getItem('rooms')) || []
        var treatments = JSON.parse(localStorage.getItem('treatments')) || []

        return {
            getRooms() {
                return rooms;
            },

            addRoom(id, roomName) {
                const room = {
                    id: id,
                    name: roomName
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