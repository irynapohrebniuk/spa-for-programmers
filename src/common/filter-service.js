
const path = "http://localhost:3000/";

/**  
 * Checks if the room is free for the specified period 
 */
function isRoomFree(room, from, to) {
    const periods = room.isNotFree;
    const bookedPeriods = periods.filter((period) => {
        period.checkIn >= from && period.checkOut <= to
    })
    

}

export const filterService = {

    filterService(typeOfService, checkInInput, checkOutInput) {
        return fetch(path + typeOfService)
            .then(response => response.json())
            .then(results => results.filter(result => isFree(result, checkInInput, checkOutInput)))
    }
}

//!(checkIn>=dateIn && checkOut<=dateOut)? 'free' : 'is not free'

//filter(res => !(checkInInput >= res.checkIn && checkOutInput <= res.checkOut))

// function isFree(result, checkInInput, checkOutInput) {
//     const checkIn = result.isnotFree.checkIn
//     const checkOut = result.isnotFree.checkOut
//     if (!(checkInInput >= checkIn && checkOutInput <= checkOut)) {
//         console.log(result)
//     }
//     return result
// }