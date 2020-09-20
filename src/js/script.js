"use strict";

document.querySelector("button").onclick = myClick;

function myClick() {
    let a = document.querySelector(".myInput").value;
    document.querySelector(".textOutput").innerHTML = prepare(a);
    document.querySelector(".myInput").value = '';
}

function prepare(text) {
    return text
      .split(' ')
      .map(word => {
        if(word.length === 0) {
            return word;
        }
        let classes = [];

        if(word.length > 3) {
            classes.push('three-chr');
        }

        if(word.match(/[!@#$&*%]/)) {
            classes.push('special-chr');
        }
    
        classes = classes.join(' ');
        return `<span class="${classes}">${word}</span>`;
      }).join(' ');
  }