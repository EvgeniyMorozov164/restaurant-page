const renderContactsPage = () => {
  const content = document.querySelector("#content");
  content.innerHTML = "";

  const contacts = document.createElement("div");
  contacts.classList.add("contacts");
  contacts.classList.add("flex");

  content.appendChild(contacts);

  const address = document.createElement("address");
  address.classList.add("address-container");
  address.innerHTML = `
  ou can contact us at:
          <br>
          <a href="mailto:samurai@rest.com" class="link">our e-mail</a>
          <br>
          <a href="tel:+79876543210" class="link">+7-(987)-654-32-10</a>`;
  contacts.appendChild(address);
}

export {renderContactsPage};