"use strict";

document.querySelector("button").onclick = myClick;

function myClick() {
    let a = document.querySelector(".myInput").value;
    document.querySelector(".textOutput").innerHTML = a;
}