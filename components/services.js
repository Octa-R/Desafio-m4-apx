
async function Services(el) {
    const servicesListContainer = document.createElement("ul");
    servicesListContainer.classList.add("services__content-list")

    const SPACE_ID = "4qwitj0i1jgx"
    const ACCES_TOKEN = "6t903P8lOC4T3JMvGR4qg1xCLkbmeicOKvUFbhNY95I"
    const CONTENT_TYPE = "service"

    const url = `https://cdn.contentful.com/spaces/${SPACE_ID}/environments/master/entries?access_token=${ACCES_TOKEN}&content_type=${CONTENT_TYPE}`
    const res = await fetch(url, {
        headers: {
            "content-type": "application/json"
        }
    });
    
    
    const json = await res.json()
    const imgURL = json.includes.Asset[0].fields.file.url.slice(2)
    
    const servicesList = json.items

    servicesList.forEach(service => {

        const {title,description,img} = service.fields
        const liEl = document.createElement("li")
        liEl.classList.add("services__content__item")
        liEl.innerHTML = `
            <img class="services__content-img" src="https://${imgURL}">
            <h2 class="services__content-title">${title}</h2>
            <p class="services__content-description">${description}</p>
        `
        servicesListContainer.append(liEl);
    });

    el.append(servicesListContainer)
}