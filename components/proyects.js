async function Proyects(el) {
  const proyectsListEl = document.createElement("ul");
  proyectsListEl.classList.add("proyects");
  const CONTENT_TYPE = "proyect";
  const proyectsList = await getContentByType(CONTENT_TYPE);

  proyectsList.forEach(proyect => {
    const { title, link, description, imgURL } = proyect;

    const newListElement = document.createElement("li");

    newListElement.classList.add("proyect__item-container");

    newListElement.innerHTML = `
            <img class="proyect__item-img" src="https://${imgURL}">
            <h2 class="proyect__item-title">${title}</h2>
            <p class="proyect__item-description">${description}</p>
            <a class="proyect__item-link" href="${link}">link to Github</a>
        `;

    proyectsListEl.append(newListElement);
  });

  el.append(proyectsListEl);
}