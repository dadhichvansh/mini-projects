"use strict";

const boxItem = document.querySelector(".box-item");
const boxes = document.querySelectorAll(".box");

const dragStart = () => {
  boxItem.addEventListener("dragstart", (e) => {
    e.target.className += " hold";
    setTimeout(() => {
      e.target.className = "hide";
    }, 0);
  });
};

const dragEnd = () => {
  boxItem.addEventListener("dragend", (e) => {
    e.target.className = "box-item";
  });
};

const main = () => {
  dragStart();
  dragEnd();
  
  for (let box of boxes) {
    box.addEventListener("dragover", (e) => {
      e.preventDefault();
    });
    box.addEventListener("drop", (e) => {
      e.target.appendChild(boxItem);
    });
  }
};

main();
