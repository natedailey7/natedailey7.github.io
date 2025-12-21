const frameHeight = 128;
const frames = 11;
const yoyo = document.getElementById("animation_yoyo");
let frame = 0;
setInterval(function () {
    const frameOffset = (++frame % frames) * -frameHeight;
    yoyo.style.backgroundPosition = frameOffset + "px " + "0px";
}, 250);

const frameHeight2 = 128;
const frames2 = 3;
const sun = document.getElementById("animation_sun");
let frame2 = 0;


setInterval(function () {
    const frameOffset2 = (11 + (++frame2 % frames2)) * -frameHeight2;

    sun.style.backgroundPosition = frameOffset2 + "px " + "0px";
}, 333);