import homePage from "./home.js";
import { menuPage } from "./menu.js";
import { aboutPage } from "./about.js";

const headerComponent = () => {
  const content = document.querySelector("#content");

  const header = document.createElement("header");
  header.className =
    "absolute top-10 left-1/2 z-20 -translate-x-1/2 flex items-center justify-around w-full h-12 gap-1 px-4 max-w-[95vw] glass sm:max-w-[85vw] md:max-w-[70vw] lg:max-w-[55vw] xl:max-w-[45vw]";

  const title = document.createElement("h1");
  title.textContent = "@Daily Kitchen";
  title.className = "text-lg font-bold text-white";
  title.textContent = title.textContent.toUpperCase();

  const btn_container = document.createElement("nav");
  btn_container.className = "flex items-center gap-6";

  const home_btn = document.createElement("button");
  home_btn.className = "btn-custom";
  home_btn.textContent = "Home";
  home_btn.addEventListener("click", function () {
    content.innerHTML = "";
    headerComponent();
    homePage();
  });

  const menu_btn = document.createElement("button");
  menu_btn.className = "btn-custom";
  menu_btn.textContent = "Menu";
  menu_btn.addEventListener("click", function () {
    content.innerHTML = "";
    menuPage();
  });

  const about_btn = document.createElement("button");
  about_btn.className = "btn-custom";
  about_btn.textContent = "About";
  about_btn.addEventListener("click", function () {
    content.innerHTML = "";
    aboutPage();
  });

  btn_container.appendChild(home_btn);
  btn_container.appendChild(menu_btn);
  btn_container.appendChild(about_btn);
  header.appendChild(title);
  header.appendChild(btn_container);

  content.appendChild(header);
};

export default headerComponent;
