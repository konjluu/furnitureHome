export default class Contact {
    $contactContainer;

    constructor() {
        this.$contactContainer = document.createElement("iframe");
        this.$contactContainer.src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.238068186473!2d105.81156956502937!3d21.02315824334522!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab9f10111ae7%3A0x9112347ed343cc56!2zTWluZFggY8ahIHPhu58gVGjDoG5oIEPDtG5nIChUZWNoa2lkcyDEkeG7lWkgdMOqbik!5e0!3m2!1svi!2s!4v1641542528222!5m2!1svi!2s" 
        this.$contactContainer.setAttribute("class","h-5/6 w-full");
    }

    render(container) {
        container.appendChild(this.$contactContainer); 
    }
}
