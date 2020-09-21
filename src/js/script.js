"use strict";

  first("button").addEventListener("click", function() {
    let val = first(".myInput").value.trim(); {
    if (!val) { return; }
  }
    first(".textOutput").insertAdjacentHTML("beforeEnd", prepare(val));
    first(".myInput").value = '';
  });
  

  function prepare(text) {
    return "<li>" + text.split(/\s+/).map(wrapSpan).join(" ") + "</li>";

    function wrapSpan(word) {    
      let color = /[!@#$&*%]/.test(word) ? "red" : word.length > 3 ? "green" : "";
  
      return `<span style="color: ${ color }">${ word }</span>`;
    }
  }
  
  function first(str) {
    return document.querySelector(str);
  }