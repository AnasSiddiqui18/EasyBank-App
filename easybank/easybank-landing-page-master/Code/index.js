const menuBarEl = document.getElementById("menuBar");
const menuMobileEl = document.querySelector(".menu-mobile");
const onClose = () => {
  menuMobileEl.classList.toggle("show_menu");

  if (menuMobileEl.classList.contains("show_menu")) {
    document.body.style.height = "100vh";
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.height = "auto";
    document.body.style.overflow = "visible";
  }
};

menuBarEl.addEventListener("click", () => {
  onClose();
});

const menuIcon = document.querySelector("#menuBar");
const body = document.querySelector("body");
const overlay = document.createElement("div");
overlay.classList.add("overlay");
body.appendChild(overlay);

menuIcon.addEventListener("click", () => {
  const icon = menuIcon.querySelector("i");
  if (icon.classList.contains("bx-menu")) {
    icon.classList.remove("bx-menu");
    icon.classList.add("bx-x");
    body.classList.add("dark-mode");
    overlay.style.display = "block";
    icon.style.fontSize = "3rem";
  } else {
    icon.classList.remove("bx-x");
    icon.classList.add("bx-menu");
    body.classList.remove("dark-mode");
    overlay.style.display = "none";
    icon.style.fontSize = "";
  }
});

function resetIcon() {
  const icon = menuIcon.querySelector("i");
  icon.classList.remove("bx-x");
  icon.classList.add("bx-menu");
}

const menuLinks = document.querySelectorAll(".links");
menuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    if (overlay.style.display === "block") {
      overlay.style.display = "none"; // hide the overlay when a link is clicked
      resetIcon();
    }
  });
});

// const overlayEl = document.querySelector(".overlay");

// function removeOverlay() {
//   overlayEl.classList.toggle("overlay");
// }

// const menuLinks = document.querySelectorAll(".links");
// menuLinks.forEach((link) => {
//   link.addEventListener("click", () => {
//     removeOverlay();
//   });
// });

//*  Important *//

//? So, in summary, the dark-mode class is not defined in the code snippet I provided, but it would typically have its own set of CSS styles defined elsewhere in the stylesheet to change the appearance of the page when the user switches to a dark mode theme

// const menuIcon = document.querySelector("#menuBar");
// menuIcon.addEventListener("click", () => {
//   const icon = menuIcon.querySelector("i");
//   if (icon.classList.contains("bx-menu")) {
//     icon.classList.remove("bx-menu");
//     icon.classList.add("bx-x");
//     icon.style.background = "3.5rem";
//   } else {
//     icon.classList.remove("bx-x");
//     icon.classList.add("bx-menu");
//     icon.style.fontSize = "";
//   }
// });
