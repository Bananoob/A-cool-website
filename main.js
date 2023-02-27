const list = document.getElementById("list");
const nav = document.getElementById("nav");

if (nav.style.width == "100px") {
  list.addEventListener("click", function () {
    nav.style.animation = "unset"
    nav.style.animation = "expandnavwidth 0.3s ease";
    nav.style.width = "200px";
  });
} else if (nav.style.width == "200px") {
  list.addEventListener("click", function() {
    nav.style.animation = "reduceNavWidth 0.3s ease";
    nav.style.width = "100px";
  });
}
