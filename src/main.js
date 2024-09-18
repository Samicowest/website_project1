const dropdownButton = document.getElementById("menu");
const dropdownMenu = document.getElementById("dropdown");

function toggleDropdown() {
  dropdownMenu.classList.toggle("hidden");
}

function closeDropdown() {
  dropdownMenu.classList.add("hidden");
}

dropdownButton.addEventListener("click", function (event) {
  event.stopPropagation();
  toggleDropdown();
});

document.addEventListener("click", function (event) {
  if (!dropdownMenu.classList.contains("hidden")) {
    closeDropdown();
  }
});

window.addEventListener("scroll", function () {
  closeDropdown();
});
