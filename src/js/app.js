class PageHandler {
  constructor() {
    if(localStorage.getItem("theme") == "dark") {
      document.documentElement.classList.add("dark");
    }
    this.setThemeIcon();

    document.querySelector("#colorSwitch").addEventListener("click", () => {
      document.documentElement.classList.toggle("dark");

      if(localStorage.getItem("theme") == "dark") {
        localStorage.setItem("theme", "");
      } else {
        localStorage.setItem("theme", "dark");
      }

      this.setThemeIcon();
    });
  }

  setThemeIcon() {
    let colorSwitch = document.querySelector("#colorSwitch");
    if(colorSwitch === null) return;

    if(localStorage.getItem("theme") == "dark") {
      colorSwitch.innerHTML = `
        <img src="/icons/sun.svg" alt="sun" class="w-4 h-4" />
        `;
    }
    else {
      colorSwitch.innerHTML = `
        <img src="/icons/moon.svg" alt="sun" class="w-4 h-4" />
      `;
    }
  }
}

const init = () =>{
  new PageHandler();
};

document.addEventListener("DOMContentLoaded", ()=>init());