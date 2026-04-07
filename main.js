function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let divs = document.querySelectorAll(".grid-container span");

function randomize() {
    divs.forEach(function (div) {
        let scale = randomNumber(5, 12) / 10;
        let translateX = randomNumber(-50, 50);
        let translateY = randomNumber(-30, 30);
        let rotate = randomNumber(0, 360);
        div.style.transform =
            `scale(${scale}) translate(${translateX}%, ${translateY}%) rotate(${rotate}deg)`;
    });
    console.log(divs.length, "randomize!");
}

document.addEventListener("click", randomize);
