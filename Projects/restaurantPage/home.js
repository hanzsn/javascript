const homePage = () => {
  const content = document.querySelector("#content");
  content.className = "flex flex-col";

  const container_uno = document.createElement("div");
  container_uno.className = "relative flex h-[50vh]";

  const heading_container = document.createElement("div");
  heading_container.className = "absolute top-[25vh] flex flex-wrap z-[10]";

  const heading_one = document.createElement("h1");
  heading_one.className =
    "z-10 px-6 font-bold text-center text-white/90 customClamp";
  heading_one.textContent =
    "Every dish is crafted with passion and the finest ingredients.";
  heading_one.textContent = heading_one.textContent.toUpperCase();

  const homepage_img = document.createElement("img");
  homepage_img.src = "./img/photo-1521917441209-e886f0404a7b.avif";
  homepage_img.className =
    "absolute top-0 z-0 object-cover object-center w-full h-full";

  const container_dos = document.createElement("div");
  container_dos.className = "flex flex-col gap-6 p-6";

  const text_wrapper = document.createElement("div");
  text_wrapper.className =
    "z-10 flex flex-col w-full h-full pb-12 max-w-[50vw]";

  const cols_2 = document.createElement("div");
  cols_2.className =
    "flex flex-col items-end w-full h-full gap-2 max-w-[50vw] ml-auto";

  const heading_two = document.createElement("p");
  heading_two.className = "z-10 text-white clampy";
  heading_two.textContent =
    "Welcome to Daily Kitchen, where passion meets quality in every meal. We carefully select the finest ingredients and prepare each dish with love, so you can enjoy comforting flavors made fresh every day.";

  const orderOnline_text = document.createElement("p");
  orderOnline_text.className = "z-10 text-right text-white clampy";
  orderOnline_text.textContent =
    "Order online from Daily Kitchen and enjoy your favorite meals wherever you are. Fresh ingredients, carefully prepared dishes, and comforting flavors just a few clicks away.";

  const order_button = document.createElement("button");
  order_button.className = "btn btn-soft btn-wide";
  order_button.textContent = "Order online";

  const viewMenu_button = document.createElement("button");
  viewMenu_button.className = "btn btn-soft btn-wide";
  viewMenu_button.textContent = "View our menu";

  content.appendChild(container_uno);
  content.appendChild(container_dos);
  container_uno.appendChild(heading_container);
  container_uno.appendChild(homepage_img);
  heading_container.appendChild(heading_one);
  container_dos.appendChild(text_wrapper);
  text_wrapper.appendChild(heading_two);
  cols_2.appendChild(orderOnline_text);
  cols_2.appendChild(viewMenu_button);
  text_wrapper.appendChild(order_button);
  container_dos.appendChild(cols_2);
};

export default homePage;
