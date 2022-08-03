async function main() {
    Header(document.querySelector(".home"));

    const url = "https://cdn.contentful.com/spaces/4qwitj0i1jgx/environments/master/entries?access_token=6t903P8lOC4T3JMvGR4qg1xCLkbmeicOKvUFbhNY95I"
    const res = await fetch(url, {
        headers: {
            "content-type": "application/json"
        }
    });

    const json = await res.json()

    console.log(json)

    Footer(document.querySelector("footer"))
}

main()