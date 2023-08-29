import Location from "../location.png";

export function populateContactPage() {
  const header = document.createElement("h1");
  const img = document.createElement("img");
  const info = document.createElement("p");
  const div = document.getElementById("content");

  div.innerHTML = "";

  header.textContent = "Contact Us";
  img.src = Location;
  info.textContent = "delicious sammies";

  div.appendChild(header);
  div.appendChild(img);
  div.appendChild(info);
}
