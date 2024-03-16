"use strict";
document.querySelector(".accordion").addEventListener("click", function (e) {
  // svg icon
  const target = e.target.closest(".icon");

  // Check is element click
  if (!target) return;

  // Adding class
  const addClass = function (element, className) {
    element.classList.add(className);
  };

  // Remove class
  const removeClass = function (element, className) {
    element.classList.remove(className);
  };

  // Item
  const item = target.closest(".item");

  // Target hidden box
  const targetHiddenBox = item.querySelector(
    `.hidden-box--${target.dataset.item}`
  );

  // Remove class show and color-green
  document.querySelectorAll(".hidden-box.show").forEach((box) => {
    box.classList.remove("show");

    box
      .closest(".item")
      .querySelectorAll(".number, .text, .icon")
      .forEach((box) => removeClass(box, "color-green"));
  });

  // Add class show and color-green
  targetHiddenBox.classList.add("show");

  targetHiddenBox
    .closest(".item")
    .querySelectorAll(".number, .text, .icon")
    .forEach((box) => addClass(box, "color-green"));

  // Not clicked boxes
  let notClickedBoxes = [];
  const allBoxes = document.querySelectorAll(".hidden-box");

  // Push not clicked boxes in array
  document.querySelectorAll(".hidden-box").forEach((box) => {
    if (!box.classList.contains("show")) {
      notClickedBoxes.push(box);
    }
  });

  // Styling not clicked boxes
  function updateBoxColors(boxes, classToAdd, classToRemove) {
    boxes.forEach((box) => {
      box
        .closest(".item")
        .querySelectorAll(".number, .text, .icon")
        .forEach((b) => {
          addClass(b, classToAdd);
          removeClass(b, classToRemove);
        });
    });
  }

  if (notClickedBoxes.length === allBoxes.length) {
    updateBoxColors(notClickedBoxes, "main-color", "gray-color");
  }
  if (notClickedBoxes.length < allBoxes.length) {
    updateBoxColors(notClickedBoxes, "gray-color", "main-color");
  }
});
