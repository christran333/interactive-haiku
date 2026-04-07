function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let spans = document.querySelectorAll(".grid-container span");
let lines = document.querySelectorAll(".grid-container .line");

function randomize() {
    lines.forEach(function (line) {
        let translateX = randomNumber(-30, 30);
        let translateY = randomNumber(-20, 20);
        let rotate = randomNumber(-15, 15);
        line.style.transform =
            `translate(${translateX}%, ${translateY}%) rotate(${rotate}deg)`;
    });

    spans.forEach(function (span) {
        let scale = randomNumber(3, 15) / 10;
        let translateX = randomNumber(-200, 200);
        let translateY = randomNumber(-200, 200);
        let rotate = randomNumber(0, 360);
        span.style.transform =
            `scale(${scale}) translate(${translateX}%, ${translateY}%) rotate(${rotate}deg)`;
    });

    console.log("randomize!");
}

document.addEventListener("click", randomize);