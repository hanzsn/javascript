import headerComponent from "./header.js";

export const menuPage = () => {
  const content = document.querySelector("#content");
  headerComponent();

  const menu = document.createElement("div");
  menu.className =
    "relative flex items-center w-full h-[130vh] shadow-lg bg-red-400";

  const heading_one = document.createElement("h1");
  heading_one.className =
    "relative z-10 px-6 font-bold text-center text-white customClamp";
  heading_one.textContent = "menu page.";
  heading_one.textContent = heading_one.textContent.toUpperCase();

  menu.appendChild(heading_one);
  content.appendChild(menu);
};
