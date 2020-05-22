
export const totalSum = (rooms, treatments) => {
    
    let sumRoom = 0;
    for (let room of rooms) {
        sumRoom += room.totalPrice;
    }
    let sumTreat = 0;
    for (let treatment of treatments) {
        sumTreat += treatment.totalPrice;
    }
    return sumRoom + sumTreat;
}