"use strict";
const body = document.body;
const container = document.querySelector(".container");
let slideOne = document.querySelector(".up");
let slideTwo = document.querySelector(".middle");
let slideThree = document.querySelector(".down");
body.addEventListener("keypress", function (e) {
    if (e.key === "w") {
        if (nextS < test.length) {
            currentS++;
            nextS++;
            prevS++;
            slideOne.remove();
            slideTwo.classList.add("up");
            slideTwo.classList.remove("middle");
            slideTwo.setAttribute("data-index", prevS.toString());
            slideThree.classList.add("middle");
            slideThree.classList.remove("down");
            slideThree.setAttribute("data-index", currentS.toString());
            let newSlide = document.createElement("div");
            newSlide.classList.add("down");
            newSlide.setAttribute("data-index", nextS.toString());
            newSlide.textContent = `slide ${nextS}`;
            container.append(newSlide);
            slideOne = document.querySelector(".up");
            slideTwo = document.querySelector(".middle");
            slideThree = document.querySelector(".down");
        }
        else
            e.preventDefault();
    }
    else if (e.key === "s") {
        if (prevS >= 0) {
            currentS--;
            nextS--;
            prevS--;
            slideThree.remove();
            slideTwo.classList.add("down");
            slideTwo.classList.remove("middle");
            slideTwo.setAttribute("data-index", nextS.toString());
            slideOne.classList.add("middle");
            slideOne.classList.remove("up");
            slideOne.setAttribute("data-index", currentS.toString());
            let newSlide = document.createElement("div");
            newSlide.classList.add("up");
            newSlide.setAttribute("data-index", prevS.toString());
            newSlide.textContent = `slide ${prevS}`;
            container.append(newSlide);
            slideOne = document.querySelector(".up");
            slideTwo = document.querySelector(".middle");
            slideThree = document.querySelector(".down");
        }
    }
});
let currentS = 0;
let nextS = 1;
let prevS = -1;
let test = [1, 2, 3, 4, 5, 6, 7];
