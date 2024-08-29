import "./Pixelify.ttf";
import "./reset.css";
import "./styles.css";

class Food {
  constructor(name, price) {    
    this.name = name;
    this.price = price;
  }
}

const sushi = [
  new Food("Syake", 99),
  new Food("Unagi", 129),
  new Food("Ebi", 89),
  new Food("kai Ese", 69)
];

const rolls = [
  new Food("Syake Maki", 229),
  new Food("Unagi Maki", 189),
  new Food("Tai Maki", 149),
  new Food("Kappa Maki", 99)
];

const noodles = [
  new Food("Fuka Soba with chicken", 269),
  new Food("Fuka Soba with pork", 309),
  new Food("Fuka Soba with shrimps", 289),
  new Food("Fuka Soba with vegetables", 249)
];

const tea = [  
  new Food("jasmine", 299),
  new Food("strawberry", 299),
  new Food("mango", 299),
  new Food("melon", 299)
];

const gigaList = [sushi, rolls, noodles, tea];

const createSection = (parent, name) => {
  const section = document.createElement("div");
  section.setAttribute("class", `${name}`);
  parent.appendChild(section);
  const sectionName = document.createElement("h2");
  sectionName.classList.add("menu-section");
  sectionName.textContent = `${name.toUpperCase()}`;
  section.appendChild(sectionName);
};

const createMenuElement = (parent, item, price) => {
  const menuItem = document.createElement("div");
  menuItem.classList.add("menu-item");
  const menuItemName = document.createElement("div");
  menuItemName.classList.add("menu-item-name");
  const menuItemText = document.createElement("p");
  menuItemText.textContent = `${item}`;

  parent.appendChild(menuItem);
  menuItem.appendChild(menuItemName);
  menuItemName.appendChild(menuItemText);

  const itemPrice = document.createElement("div");
  itemPrice.classList.add("menu-item-price");
  const priceValue = document.createElement("p");
  priceValue.textContent = `${price}`;
  
  parent.appendChild(itemPrice);
  itemPrice.appendChild(priceValue);
};

const renderMenuPage = () => {  
  const content = document.querySelector("#content");
  content.innerHTML = "";

  const list = ["sushi", "rolls", "noodles", "tea"];

  const menu = document.createElement("div");
  menu.classList.add("menu");
  menu.classList.add("flex"); 
  content.appendChild(menu); 

  for (let i = 0; i < list.length; i++) {
    createSection(menu, list[i]);
    for (let j = 0; j < 4; j++) {
      createMenuElement(menu.children[i], gigaList[i][j].name, gigaList[i][j].price);
    }
  }   
  
}

export {renderMenuPage};