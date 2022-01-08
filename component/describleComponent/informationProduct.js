//Thông tin sản phẩm
import {viewCartRef } from "../constant/firebase.js";
import { addDoc } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";
import InputQuantily from "../InputQuantily.js";

export default class InformationProduct{      
    inforList;

    price;

    cardLi;
    material;
    color;
    size;
    code;
    from;

    cardComplete;
    quantily;
    buttonBuy;

    _appendNotification
    _id;
    _name;
    _imgsrc;
    constructor(appendNotification,id,name,imgsrc) {
        this._appendNotification=appendNotification;
        this._id=id;
        this._name=name;
        this._imgsrc=imgsrc;

        this.inforList=document.createElement("div");

        this.price=document.createElement("p");
        this.price.textContent="2,500,000.00"

        this.cardLi=document.createElement("ul");

        this.material=document.createElement("li");
        this.material.textContent="Chất Liệu: Gỗ cao su";

        this.color=document.createElement("li");
        this.color.textContent="Màu sắc: Không";

        this.size=document.createElement("li");
        this.size.textContent="Kích thước: Cao 45 cm, Đường kính 33 cm";

        this.code=document.createElement("li");
        this.code.textContent="Mã Sản Phẩm: 4469";

        this.from=document.createElement("li");
        this.from.textContent="Xuất Xứ: ViệtNam";


        this.cardComplete=document.createElement("div");

        this.quantily=new InputQuantily(1);
    
        this.buttonBuy=document.createElement("button");
        this.buttonBuy.type="submit";
        this.buttonBuy.textContent="Mua hàng";
        this.buttonBuy.setAttribute(
            "class",
            "bg-red-700 hover:shadow-lg text-white font-bold mt-5 py-1 px-3 rounded"
          );
        this.buttonBuy.addEventListener("click",this.onClickButtonBuy) 
        
    } 

    pushData=()=>{
        const dataViewCart={
            img:this._imgsrc,
            name:this._name,
            cost:2500000,
            quantily: this.quantily.getValueInputQuantily(),
            total: this.quantily.getValueInputQuantily()*2500000,
            id:this._id
        };
        // console.log(dataViewCart,"dataviwecart") ;
        addDoc(viewCartRef, dataViewCart);     
    }

    onClickButtonBuy=((e)=>{
        e.preventDefault();  
        this.pushData();
        this._appendNotification(this.quantily.getValueInputQuantily());
    })

    render(container){
        this.cardLi.appendChild(this.material);
        this.cardLi.appendChild(this.color);
        this.cardLi.appendChild(this.size);
        this.cardLi.appendChild(this.code);
        this.cardLi.appendChild(this.from);

        this.quantily.render(this.cardComplete)
        this.cardComplete.appendChild(this.buttonBuy);

        this.inforList.appendChild(this.price);
        this.inforList.appendChild(this.cardLi);
        this.inforList.appendChild(this.cardComplete);

        container.appendChild(this.inforList);

    }


}