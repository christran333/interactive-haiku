function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let divs = document.querySelectorAll(".grid-container span");

function randomize() {
    divs.forEach(function (div) {
        let scale = randomNumber(3, 15) / 10;
        let translateX = randomNumber(-200, 200);
        let translateY = randomNumber(-200, 200);
        let rotate = randomNumber(0, 360);
        div.style.transform =
            `scale(${scale}) translate(${translateX}%, ${translateY}%) rotate(${rotate}deg)`;
    });
    console.log(divs.length, "randomize!");
}

document.addEventListener("click", randomize);