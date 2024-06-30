function checkSpeed(speed) {
    const speedLimit = 70;
    const kmPerDemeritPoint = 5;
    const pointsPerKmAboveLimit = 1;

    if (speed < speedLimit) {
        console.log("Ok");
    } else {
       
        let demeritPoints = Math.floor((speed - speedLimit) / kmPerDemeritPoint);

        console.log("Points: " + demeritPoints);


        if (demeritPoints > 12) {
            console.log("License suspended");
        }
    }
}
checkSpeed(80); 
checkSpeed(65); 
checkSpeed(110); 
checkSpeed(140); 
