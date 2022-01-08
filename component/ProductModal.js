export default class ProductModal {
    $container;
    $guestroom;
    $diningroom;
    $bedroom;

    constructor() {
        this.$container = document.createElement("div");
        this.$container.setAttribute("class", "hidden absolute bg-gray-800 bg-opacity-20 w-28 pl-1");

        this.$guestroom = document.createElement("p");
        this.$guestroom.textContent = "Phòng khách";
        this.$guestroom.setAttribute("class", "text-white text-xs hover:text-red-600 hover:underline mt-2");

        this.$diningroom = document.createElement("p");
        this.$diningroom.textContent = "Phòng ăn";
        this.$diningroom.setAttribute("class", "text-white text-xs hover:text-red-600 hover:underline mt-2");

        this.$bedroom = document.createElement("p");
        this.$bedroom.textContent = "Phòng ngủ";
        this.$bedroom.setAttribute("class", "text-white text-xs hover:text-red-600 hover:underline mt-2");
    }

    onHover() {
        this.$container.classList.remove("hidden");
    }

    onOut() {
        this.$container.classList.add("hidden");
    }

    render(modalContainer) {
        this.$container.appendChild(this.$guestroom);
        this.$container.appendChild(this.$diningroom);
        this.$container.appendChild(this.$bedroom);

        modalContainer.appendChild(this.$container);
    }
}