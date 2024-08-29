import "./Pixelify.ttf";
import "./reset.css";
import "./styles.css";


const renderHomePage = () => {
  const content = document.querySelector("#content");
  content.innerHTML = "";

  const welcome = document.createElement("div");
  welcome.classList.add("welcome");

  const hi = document.createElement("h2");
  hi.classList.add("hi");
  hi.textContent = "Welcome!";

  const info = document.createElement("div");
  info.classList.add("info");

  const p1 = document.createElement("p");
  p1.classList.add("pic-like");
  p1.classList.add("flex");
  p1.innerHTML= "SAMURAI <br> RESTAURANT";

  const p2 = document.createElement("p");
  p2.classList.add("about-us");
  p2.textContent = `Restaurant Samurai welcomes you! Here you will find the best
             sushi, rolls and noodles! You can also quench your thirst with
              selected natural tea!`;
  
  content.appendChild(welcome);
  welcome.appendChild(hi);
  welcome.appendChild(info);
  info.appendChild(p1);
  info.appendChild(p2);
}

export {renderHomePage};