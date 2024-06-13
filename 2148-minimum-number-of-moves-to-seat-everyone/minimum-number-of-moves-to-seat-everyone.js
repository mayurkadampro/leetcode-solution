/**
 * @param {number[]} seats
 * @param {number[]} students
 * @return {number}
 */
var minMovesToSeat = function (seats, students) {
    students.sort((a, b) => a - b);
    seats.sort((a, b) => a - b);
    let minAdjustSeat = 0;
    for (let i = 0; i < students.length; i++) {
        minAdjustSeat += Math.abs(seats[i] - students[i]);
    }
    return minAdjustSeat;
};