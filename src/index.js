import { populateHomePage } from "./home.js";
import { populateMenuPage } from "./menu.js";
import { populateContactPage } from "./contact.js";
import "./styles.css";

const homeBtn = document.getElementById("home-button");
const menuBtn = document.getElementById("menu-button");
const contactBtn = document.getElementById("contact-button");

homeBtn.addEventListener("click", populateHomePage);
menuBtn.addEventListener("click", populateMenuPage);
contactBtn.addEventListener("click", populateContactPage);

console.log("hello");

populateHomePage();
