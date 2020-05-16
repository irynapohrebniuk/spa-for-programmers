
const path = "http://localhost:3000/";

/**  
 * Checks if the room is free for the specified period 
 */
function isRoomFree(room) {
    const periods = room.isnotFree

    const option_1 = (period) => (new Date(from) >= new Date(period.checkIn)) && new Date(to) <= (new Date(period.checkOut))

    const option_2 = (period) => (new Date(from) <= new Date(period.checkIn)) && (new Date(to) >= new Date(period.checkOut))

    const option_3 = (period) => (new Date(from) >= new Date(period.checkIn)) && (new Date(from) <= new Date(period.checkOut)) && (new Date(to) >= new Date(period.checkOut))

    const option_4 = (period) => (new Date(from) <= new Date(period.checkIn)) && (new Date(to) <= new Date(period.checkOut)) && (new Date(to) >= new Date(period.checkIn))
    
    const bookedPeriods = periods.map(period => {

        const r1 = option_1(period)
        const r2 = option_2(period)
        const r3 = option_3(period)
        const r4 = option_4(period)
        
        let isPeriodBooked = r1 || r2 || r3 || r4

        return isPeriodBooked
    })

    const isRoomBooked = bookedPeriods.reduce((accum, current) => accum || current)
    
    return (!isRoomBooked)
}

let from, to

export const filterServices = {

    filterService(typeOfService, checkInInput, checkOutInput) {
        return fetch(path + typeOfService)
            .then(response => response.json())
            .then(results => {
                console.log("results befor filtering = ", results)
                from = checkInInput
                to = checkOutInput
                const filterarray = results.filter(isRoomFree)
                console.log("filterarray : ", filterarray)
                return filterarray
            })
    }
}