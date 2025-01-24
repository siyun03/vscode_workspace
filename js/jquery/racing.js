let speedRate = 1.0;
let interval1 = null;
let interval2 = null;
let interval3 = null;
let intervalBanner = null;
let started = false;
let rate = [];

const printResult = () => {
    console.log("경주 결과:", rate);
};

$(document).ready(() => {
    $("#horse1").css("left", "0px");
    $("#horse2").css("left", "0px");
    $("#horse3").css("left", "0px");
    $("#horse4").css("left", "0px");
});

$("#start").click(() => {
    // $("#banner").html(3);
    $("#start").prop("disabled", true);
    intervalBanner = setInterval(bannerTimer, 1000);
    comStart();
});

const run = function(horse) {
    const currLeft = parseInt(horse.css("left"), 10);
    if (currLeft > 820) {
        clearInterval(interval1);
        clearInterval(interval2);
        clearInterval(interval3);
    }
    const distance = Math.ceil(Math.random() * 10 * speedRate) + 3;
    horse.css("left", (currLeft + distance) + "px");
};

const comStart = () => {
    interval1 = setInterval(run, Math.ceil(Math.random() * 50) + 100, $("#horse1"));
    interval2 = setInterval(run, Math.ceil(Math.random() * 50) + 100, $("#horse2"));
    interval3 = setInterval(run, Math.ceil(Math.random() * 50) + 100, $("#horse3"));
    started = true;
    
};

$("#level").change(e => {
    switch (e.target.value) {
        case "easy":
            speedRate = 1.0;
            break;
        case "normal":
            speedRate = 1.5;
            break;
        case "hard":
            speedRate = 2.0;
    }
});

$(document).keyup(e => {
    if (started) {
        const horse4Left = parseInt($("#horse4").css("left"), 10) ;
        if (horse4Left < 1080) {
            if (e.originalEvent.code === "Space") {
                $("#horse4").css("left", (horse4Left + 18) + "px");
            }
            if (e.originalEvent.code === "KeyB") {
                $("#horse4").css("left", (horse4Left + 36) + "px");
            }
        } else {
            if (rate.length != 4) {
                if (rate.indexOf(4) === -1) rate.push(4);
            }
            printResult();
        }
    }
});

const bannerTimer = () => {
    let bannerValue = parseInt($("#banner").html(), 10);
    if (bannerValue > 1) {
        $("#banner").html(bannerValue - 1);
    } else {
        clearInterval(intervalBanner);
    }
};
