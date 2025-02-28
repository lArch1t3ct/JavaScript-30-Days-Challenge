const secondHand = document.querySelector(".second-hand");
const hourHand = document.querySelector(".hour-hand");
const minuteHand = document.querySelector(".min-hand");

function setDate() {
    const now = new Date();
    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60 ) * 360) + 90;
    // In our CSS we start the 90deg angle, therefore
    // we want to offset this with the aim of having
    // the second hand point at the correct angle.

    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

    const minutes = now.getMinutes();
    const minutesDegrees = ((minutes / 60) * 360) + 90;
    minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;

    const hours = now.getHours();
    const hoursDegrees = ((hours / 12) * 360) + 90;
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
}

setInterval(setDate, 1000);