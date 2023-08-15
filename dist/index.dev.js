"use strict";

onload = function onload() {
  var c = setTimeout(function () {
    document.body.classList.remove("not-loaded");
    clearTimeout(c);
  }, 1000);
};