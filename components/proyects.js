async function Proyects(el) {
  const proyectsListEl = document.createElement("ul");
  proyectsListEl.classList.add("proyects");

  const SPACE_ID = "4qwitj0i1jgx";
  const ACCES_TOKEN = "6t903P8lOC4T3JMvGR4qg1xCLkbmeicOKvUFbhNY95I";
  const CONTENT_TYPE = "proyect";

  const url = `https://cdn.contentful.com/spaces/${SPACE_ID}/environments/master/entries?access_token=${ACCES_TOKEN}&content_type=${CONTENT_TYPE}`;
  const res = await fetch(url, {
    headers: {
      "content-type": "application/json"
    }
  });

  const json = await res.json();
  const imgURL = json.includes.Asset[0].fields.file.url.slice(2);

  const proyectsList = json.items;

  // console.log(json.includes.Asset)
  // console.log(proyectsList)

  proyectsList.forEach(proyect => {
    const { title, link, descriptionText } = proyect.fields;
    const newListElement = document.createElement("li");

    newListElement.classList.add("proyect__item-container");

    newListElement.innerHTML = `
            <img class="proyect__item-img" src="https://${imgURL}">
            <h2 class="proyect__item-title">${title}</h2>
            <p class="proyect__item-description">${descriptionText}</p>
            <a class="proyect__item-link" href="${link}">link to Github</a>
        `;



    proyectsListEl.append(newListElement);

  });


  el.append(proyectsListEl);


}