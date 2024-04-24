const themeSwitcher = document.getElementById("theme-switcher");
const root = document.documentElement;

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

themeSwitcher.addEventListener("click", switchTheme);

// Check Local Storage For Theme

const currentTheme = localStorage.getItem("theme");
if (currentTheme) {
  document.documentElement.setAttribute("data-theme", currentTheme);
  if (currentTheme === "dark") {
    root.setAttribute("data-theme", "dark");
  } else {
    root.setAttribute("data-theme", "");
  }
}
