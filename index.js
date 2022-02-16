let counter30 = document.querySelector(".count-30")
let counter300 = document.querySelector(".count-300")
let counter8 = document.querySelector(".count-8")
let num = 1;

let timer1 = setInterval(() => {
    counter30.innerHTML = num;
    num++
    if (num == 31) {
        clearInterval(timer1)
    }
}, 100);
let num2 = 1;
let timer2 = setInterval(() => {
    counter300.innerHTML = num2;
    num2++
    if (num2 == 301) {
        clearInterval(timer2)
    }
}, 50);
let num3 = 1;
let timer3 = setInterval(() => {
    counter8.innerHTML = num3;
    num3++
    if (num3 == 9) {
        clearInterval(timer3)
    }
}, 100);