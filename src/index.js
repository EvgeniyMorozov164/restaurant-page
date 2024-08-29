import "./Pixelify.ttf";
import "./reset.css";
import "./styles.css";
import { renderHomePage } from "./home";
import { renderMenuPage } from "./menu";

document.addEventListener("DOMContentLoaded", renderHomePage);

const homeBtn = document.querySelector("#home");
const menuBtn = document.querySelector("#menu");

homeBtn.addEventListener("click", renderHomePage);
menuBtn.addEventListener("click", renderMenuPage);


