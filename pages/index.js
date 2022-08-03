async function main() {
    Header(document.querySelector(".home"));

    // const SPACE_ID = "4qwitj0i1jgx"
    // const ACCES_TOKEN = "6t903P8lOC4T3JMvGR4qg1xCLkbmeicOKvUFbhNY95I"
    // const CONTENT_TYPE = "service"

    // const url = `https://cdn.contentful.com/spaces/${SPACE_ID}/environments/master/entries?access_token=${ACCES_TOKEN}&content_type=${CONTENT_TYPE}`
    // const res = await fetch(url, {
    //     headers: {
    //         "content-type": "application/json"
    //     }
    // });
    // console.log(json)

    // const json = await res.json()
    const serviceContainer = document.querySelector(".services__container");
    Services(serviceContainer);


    Footer(document.body)
}

main()