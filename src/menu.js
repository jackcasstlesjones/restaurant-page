import Menu from "../menu.png";

export function populateMenuPage() {
  const header = document.createElement("h1");
  const img = document.createElement("img");
  const info = document.createElement("p");
  const div = document.getElementById("content");

  div.innerHTML = "";

  header.textContent = "Our Menu";
  img.src = Menu;
  info.textContent = "lorem lorem";
  div.appendChild(header);
  div.appendChild(img);
  div.appendChild(info);
}
