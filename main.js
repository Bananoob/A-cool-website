// Definding some variables
const navItemsP = document.querySelectorAll("#navitems a p")
let isExpanded = false;
let expandnavwidth = "expandnavwidth 0.25s ease";
let reducenavwidth = "reducenavwidth 0.25s ease";
let startobjects = "startobjects 0.25s ease";
let fadeup = "fadeup 0.3s ease";



// Add an event listener to check if the list button is pressed
list.addEventListener("click", function () {
  if (isExpanded) {
    nav.style.animation = reducenavwidth;
    nav.style.width = "100px";
    pp.style.display = "none";
    navItemsP.forEach((p) => {
      p.style.display = "none"
    })
    isExpanded = false;
  } else {
    nav.style.animation = expandnavwidth;
    nav.style.width = "200px";
    navItemsP.forEach((p) => {
      p.style.display = "block"
    });
    isExpanded = true;
  }
});

// Start animations
navitems.addEventListener("animationend", function () {
  navitems.style.opacity = "100%";
});

github.addEventListener("animationend", function () {
  github.style.opacity = "100%";
});

navfooter.addEventListener("animationend", function () {
  navfooter.style.opacity = "100%";
});

// 38