export function populateHomePage() {
  const header = document.createElement("h1");
  const img = document.createElement("img");
  const info = document.createElement("p");
  const div = document.getElementById("content");

  div.innerHTML = "";

  header.textContent = "Jack's Best Sandwich Shop";
  img.src = "../sandwich.jpg";
  info.textContent =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum nihil sed, hic eos iste ullam voluptas voluptate, repudiandae non ipsa natus facere nemo. Non incidunt labore, sed distinctio enim vel?";

  div.appendChild(header);
  div.appendChild(img);
  div.appendChild(info);
}
