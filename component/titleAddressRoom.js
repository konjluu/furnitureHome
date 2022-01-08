export default class TitleAddressRoom{
    $titleAddress;

    constructor(title){
        this.$titleAddress=document.createElement("p");
        this.$titleAddress.textContent=title;
        this.$titleAddress.setAttribute("class", "mt-8 mb-12 ml-2 text-3xl text-gray-400")
    }

    render(container){
        container.appendChild(this.$titleAddress);
    }
}