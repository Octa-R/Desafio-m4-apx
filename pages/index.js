async function main() {
    Header(document.querySelector(".home"));

    const url = "https://cdn.contentful.com/spaces/4qwitj0i1jgx"
    const res = await fetch(url, {
        headers: {
            "content-type": "application/json",
            "Authorization":"Bearer 6t903P8lOC4T3JMvGR4qg1xCLkbmeicOKvUFbhNY95I" }
    });

    console.log(res)
}

main()