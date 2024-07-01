const prompt = require('prompt');

prompt.start();

function checkSpeed(speed) {
    const speedLimit = 70;
    const kmPerDemeritPoint = 5;

    if (speed < speedLimit) {
        console.log("Speed: " + speed + " km/h - Ok");
    } else {
        let demeritPoints = Math.floor((speed - speedLimit) / kmPerDemeritPoint);
        console.log("Speed: " + speed + " km/h - Points: " + demeritPoints);

        if (demeritPoints > 12) {
            console.log("License suspended");
        }
    }
}

function promptSpeed() {
    prompt.get(['speed'], function (_, result) {
        let speed = Number(result.speed);

        if (isNaN(speed) || speed < 0) {
            console.log("Invalid input. Please enter a valid speed.");
            promptSpeed();
        } else {
            checkSpeed(speed);
            promptSpeed();
        }
    });
}

promptSpeed();
