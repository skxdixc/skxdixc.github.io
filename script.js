const themeToggle = document.getElementById("themeToggle");
const inspirationBtn = document.getElementById("inspirationBtn");
const inspirationSection = document.getElementById("inspirationSection");
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "light") {
  document.body.classList.add("light-theme");
}

if (themeToggle) {
  const setLabel = () => {
    themeToggle.textContent = document.body.classList.contains("light-theme")
      ? "Dark Mode"
      : "Light Mode";
  };

  setLabel();

  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("light-theme");
    localStorage.setItem(
      "theme",
      document.body.classList.contains("light-theme") ? "light" : "dark"
    );
    setLabel();
  });
}

if (inspirationBtn) {
  inspirationBtn.addEventListener("click", () => {
    inspirationSection?.scrollIntoView({ behavior: "smooth", block: "center" });
  });
}
