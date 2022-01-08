//mô tả 
export default class DetailedDescription{
    detailedDescriptionContainer;

    describe;

    titleDescribe;
    contentDescribe;
    picture1;


    productOrigin;
    productOriginContent;

    picture2;
    picture3;
    picture4;
    picture5;
    picture6;

    constructor(){
        this.detailedDescriptionContainer=document.createElement("div");
        this.detailedDescriptionContainer.setAttribute("class", "w-1/2 m-auto");


        // this.describe=document.createElement("h3");
        // this.describe.textContent="Mô tả";

        

        this.titleDescribe=document.createElement("h1");
        this.titleDescribe.textContent="Mô tả";
        this.titleDescribe.setAttribute("class", "mt-6 mb-3 font-bold text-2xl");

        this.contentDescribe=document.createElement("p");
        this.contentDescribe.textContent="Thiết kế nội thất khách sạn là một trong những chủ đề đang có xu hướng đi lên rất mạnh do nước ta thuận lợi về ngành đó. Nhưng đề đầu tư cho một khách sạn thu hút khách mỗi khi tìm đến nơi du lịch thi bạn phải nhờ đến những kiến trúc sư dày dạn kinh nghiệm. Việc thiết kế sẽ tạo ra cho các không gian những sự khác biệt hay công năng phù hợp với từng địa điểm du lịch. Và đặc biết là những phòng ngủ là nơi thiết yếu nhất vì nó giữ cho khách hàng những khoảng khắc lâu dài nhất.";
        this.picture1=document.createElement("img");        
        this.picture1.src="./IMG/intro/1.jpeg"



        this.productOrigin=document.createElement("h1");
        this.productOrigin.textContent="Nó đến từ đâu?";
        this.productOrigin.setAttribute("class", "text-2xl font-bold mt-4");

        this.productOriginContent=document.createElement("p");
        this.productOriginContent.textContent="Trái với quan điểm chung của số đông, Lorem Ipsum không phải chỉ là một đoạn văn bản ngẫu nhiên. Người ta tìm thấy nguồn gốc của nó từ những tác phẩm văn học la-tinh cổ điển xuất hiện từ năm 45 trước Công Nguyên, nghĩa là nó đã có khoảng hơn 2000 tuổi.";
        this.productOriginContent.setAttribute("class", "mt-2");

        this.picture2=document.createElement("img");
        this.picture2.src="./IMG/intro/2.jpeg"
        this.picture2.setAttribute("class", "w-full mt-1");
        this.picture3=document.createElement("img");
        this.picture3.src="./IMG/intro/3.jpeg"
        this.picture3.setAttribute("class", "w-full mt-1");
        this.picture4=document.createElement("img");
        this.picture4.src="./IMG/intro/4.jpeg"
        this.picture4.setAttribute("class", "w-full mt-1");
        this.picture5=document.createElement("img");
        this.picture5.src="./IMG/intro/5.jpeg"
        this.picture5.setAttribute("class", "w-full mt-1");
        this.picture6=document.createElement("img");        
        this.picture6.src="./IMG/intro/6.jpeg"
        this.picture6.setAttribute("class", "w-full mt-1");
    }

    render(container){
        // this.detailedDescriptionContainer.appendChild(this.describe);

        this.detailedDescriptionContainer.appendChild(this.titleDescribe);
        this.detailedDescriptionContainer.appendChild(this.contentDescribe);
        this.detailedDescriptionContainer.appendChild(this.picture1);

        this.detailedDescriptionContainer.appendChild(this.productOrigin);
        this.detailedDescriptionContainer.appendChild(this.productOriginContent);

        this.detailedDescriptionContainer.appendChild(this.picture2);
        this.detailedDescriptionContainer.appendChild(this.picture3);
        this.detailedDescriptionContainer.appendChild(this.picture4);
        this.detailedDescriptionContainer.appendChild(this.picture5);
        this.detailedDescriptionContainer.appendChild(this.picture6);


        container.appendChild(this.detailedDescriptionContainer);
    }
}