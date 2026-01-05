import headerComponent from "./header.js";

export const aboutPage = () => {
  const content = document.querySelector("#content");
  headerComponent();

  const about = document.createElement("div");
  about.className =
    "relative flex items-center w-full h-[130vh] bg-gray-400 shadow-lg";
  const heading_one = document.createElement("h1");
  heading_one.className =
    "relative z-10 px-6 font-bold text-center text-white customClamp";
  heading_one.textContent = "about page.";
  heading_one.textContent = heading_one.textContent.toUpperCase();

  about.appendChild(heading_one);
  content.appendChild(about);
};
