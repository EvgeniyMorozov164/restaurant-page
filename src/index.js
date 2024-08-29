import "./Pixelify.ttf";
import "./reset.css";
import "./styles.css";
import { renderHomePage } from "./home";

document.addEventListener("DOMContentLoaded", renderHomePage);

const homeBtn = document.querySelector("#home");

homeBtn.addEventListener("click", renderHomePage);



