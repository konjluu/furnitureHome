export default class Footer {
    $mainContainer;
    $container;
    $introContainer;
    $introTitleEl;
    $introContentEl;
    $contactsContainer;
    $contactTitleEl;
    $addressEl;
    $phoneEl;
    $emailEl;
    $copyrightEl;

    constructor() {
        this.$mainContainer = document.createElement("div");
        this.$mainContainer.setAttribute("class", "w-screen bg-gray-800 flex flex-col items-center mt-4");

        this.$container = document.createElement("div");
        this.$container.setAttribute("class", "w-1/2 flex justify-between mt-2")

        this.$introContainer = document.createElement("div");
        this.$introContainer.setAttribute("class", "w-1/2")

        this.$introTitleEl = document.createElement("p");
        this.$introTitleEl.textContent = "Giới thiệu";
        this.$introTitleEl.setAttribute("class", "text-white font-bold text-xs");

        this.$introContentEl = document.createElement("p");
        this.$introContentEl.textContent = "F4 Company chuyên thiết kế - thi công nội thất đa phong cách cho các dự án biệt thự, căn hộ, nhà phố, khách sạn, văn phòng công ty… Với đội ngũ thiết kế sáng tạo, nhiệt huyết và thi công chuyên nghiệp, nhiều kinh nghiệm, F4 Company tự tin mang đến cho quý khách hàng những dự án kiến trúc - nội thất sang trọng, độc đáo, bền vững và đặc biệt với mức giá vô cùng cạnh tranh.";
        this.$introContentEl.setAttribute("class", "text-white mt-4 text-xs");

        this.$contactsContainer = document.createElement("div");

        this.$contactTitleEl = document.createElement("p");
        this.$contactTitleEl.textContent = "Liên hệ";
        this.$contactTitleEl.setAttribute("class", "text-white font-bold text-xs");

        this.$addressEl = document.createElement("p");
        this.$addressEl.innerHTML = '<i class="fas fa-map-marker-alt"> Số 123 Đường Phan Chu Trinh, Quận 10, TP.HCM</i>';
        this.$addressEl.setAttribute("class", "text-white mt-4 text-xs");

        this.$phoneEl = document.createElement("p");
        this.$phoneEl.innerHTML = '<i class="fas fa-phone-volume"> 0123.456.789</i>';
        this.$phoneEl.setAttribute("class", "text-white text-xs");

        this.$emailEl = document.createElement("p");
        this.$emailEl.innerHTML = '<i class="fas fa-envelope"> contact@demo.com</i>';
        this.$emailEl.setAttribute("class", "text-white text-xs");

        this.$copyrightEl = document.createElement("p");
        this.$copyrightEl.textContent = "Copyright © 2021 F4 Company.";
        this.$copyrightEl.setAttribute("class", "text-white mt-4 text-xs mb-2");
    }

    render(container) {
        this.$introContainer.appendChild(this.$introTitleEl);
        this.$introContainer.appendChild(this.$introContentEl);

        this.$contactsContainer.appendChild(this.$contactTitleEl);
        this.$contactsContainer.appendChild(this.$addressEl);
        this.$contactsContainer.appendChild(this.$phoneEl);
        this.$contactsContainer.appendChild(this.$emailEl);

        this.$container.appendChild(this.$introContainer);
        this.$container.appendChild(this.$contactsContainer);

        this.$mainContainer.appendChild(this.$container);
        this.$mainContainer.appendChild(this.$copyrightEl);

        container.appendChild(this.$mainContainer)
    }
}