import "./Pixelify.ttf";
import "./reset.css";
import "./styles.css";
import { renderHomePage } from "./home";
import { renderMenuPage } from "./menu";
import { renderContactsPage } from "./contacts";

document.addEventListener("DOMContentLoaded", renderHomePage);

const homeBtn = document.querySelector("#home");
const menuBtn = document.querySelector("#menu");
const contactsBtn = document.querySelector("#contacts");

homeBtn.addEventListener("click", renderHomePage);
menuBtn.addEventListener("click", renderMenuPage);
contactsBtn.addEventListener("click", renderContactsPage);

