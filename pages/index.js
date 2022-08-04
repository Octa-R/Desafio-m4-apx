function main() {
    Header(document.querySelector(".home"));
    const serviceContainer = document.querySelector(".services__container");
    Services(serviceContainer);
    Contact(document.querySelector(".contact__container"))
    Footer(document.body)
}

main()