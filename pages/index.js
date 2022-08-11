function main() {
  Header(document.body);
  const serviceContainer = document.querySelector(".services__container");
  Services(serviceContainer);
  Contact(document.querySelector(".contact__container"));
  Footer(document.body);
}

main();