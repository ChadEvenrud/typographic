// HTML Selector Variables

const themeSwitcher = document.getElementById("theme-switcher");
const root = document.documentElement;
const currentTheme = localStorage.getItem("theme");
const nav = document.getElementsByTagName("nav")[0];
const navIcon = document.getElementsByClassName("menu-icon")[0];

//Functions

const switchTheme = () => {
  const dataTheme = root.getAttribute("data-theme");
  if (dataTheme === null || dataTheme === "") {
    root.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
  } else {
    root.setAttribute("data-theme", "");
    localStorage.setItem("theme", "light");
  }
};

const activeNav = () => {
  if (nav.style.transform === "translateX(-100%)") {
    nav.style.transform = "";
  } else {
    nav.style.transform = "translateX(-100%)";
  }
};

//Event Listeners

themeSwitcher.addEventListener("click", switchTheme);
navIcon.addEventListener("click", activeNav);

// Check Local Storage For Theme

if (currentTheme) {
  document.documentElement.setAttribute("data-theme", currentTheme);
  if (currentTheme === "dark") {
    root.setAttribute("data-theme", "dark");
  } else {
    root.setAttribute("data-theme", "");
  }
}

nav.style.transform = "translateX(-100%)";
