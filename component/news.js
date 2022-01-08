
export default class News{
    newsContainer;

    titleNew;
    content;
    img;

    constructor(){
        this.newsContainer = document.createElement("div");

        this.titleNew = document.createElement("h1");
        this.titleNew.textContent="Tưng bừng khuyến mãi: giảm ngay 20 phí thiết kế";

        this.content = document.createElement("p");
        this.titleNew.textContent="Từ ngày 1/8 đến ngày 30/9, giảm ngay 20 phí thiết kế cho khách hàng liên hệ qua website hoặc điện thoại theo số hotline: 090.247.65.65. Nếu bạn thật sự đang muốn thiết kế không gian sống, nơi làm việc, cửa hàng,… liên hệ ngay với chúng tôi theo hai cách: thông qua website hoặc qua hotline: 0902.47.65.65. Phú Đô sẽ làm bạn hoàn toàn hài lòng.";


        this.img = document.createElement("img");
        this.img.src="./IMG/news.jpeg"
        this.img.setAttribute("class","h-5/6 w-full")


    }

    render(container){
        this.newsContainer.appendChild(this.titleNew);
        this.newsContainer.appendChild(this.content);
        this.newsContainer.appendChild(this.img);

        container.appendChild(this.newsContainer);

    }
}