import {viewCartRef } from "../component/constant/firebase.js";
import { addDoc } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";
export default class Room {
  $urlImg;
  $saleButton;
  $titleProduct;
  $price;
  $buttonBuy;

  $productItem;
  constructor(room, _handleClickProduct,_handleClickViewCart) {
    this.$productItem = document.createElement("div");
    this.$productItem.setAttribute(
      "class",
      "flex-1 box-content pb-3 px-1 pt-1 m-2 hover:shadow-lg focus:cursor-pointer duration-300 ease-in border border-solid text-center"
    );

    // this.$saleButton = document.createElement("h3");
    // this.$saleButton.textContent = "Giảm Giá";
    // this.$saleButton.setAttribute(
    //   "class",
    //   "bg-red-700 hover:shadow-lg text-white font-bold mt-5 py-1 px-3 rounded-full"
    // );

    this.$urlImg = document.createElement("img");
    this.$urlImg.src = room.img;
    this.$urlImg.id = room.id;
    this.$urlImg.setAttribute(
      "class",
      "w-full h-64 object-cover hover:scale-110 duration-300"
    );
    this.$urlImg.addEventListener("click", () =>
      _handleClickProduct(this.$urlImg.id)
    );

    this.$titleProduct = document.createElement("h2");
    this.$titleProduct.textContent = room.name;
    this.$titleProduct.setAttribute("class", " font-normal mt-1 text-xl");

    this.$price = document.createElement("h4");
    this.$price.textContent = room.price;
    this.$price.setAttribute("class", "text-red-600 font-bold");


    this.$button = document.createElement("div");

    this.$buttonBuy = document.createElement("button");
    this.$buttonBuy.textContent = "Mua hàng";
    this.$buttonBuy.setAttribute(
      "class",
      "bg-red-700 hover:shadow-lg text-white font-bold mt-5 py-1 px-3 rounded"
    );
    this.$buttonBuy.addEventListener("click",this.handleSubmit);

    this.$icon=document.createElement("div");
    this.$icon.innerHTML = '<i class="fas fa-check"></i>';
    this.$icon.setAttribute("class","hidden text-4xl ")

    this.$viewCartInItemsRoom=document.createElement("button");
    this.$viewCartInItemsRoom.textContent = "Xem gio hang";
    this.$viewCartInItemsRoom.setAttribute(
      "class",
      "hidden bg-gray-400 hover:shadow-lg text-white font-bold ml-5 mt-5 py-1 px-3 rounded"
    );
    this.$viewCartInItemsRoom.addEventListener("click",()=>{
      _handleClickViewCart();
    });
  }

  pushData=()=>{
    const dataViewCart={
        img:this.$urlImg.src,
        name:this.$titleProduct.textContent,
        cost:2500000,
        quantily: 1,
        total: 1*2500000,
        id:this.$urlImg.id
    };
    // console.log(dataViewCart,"dataviwecart in ROOM") ;
    addDoc(viewCartRef, dataViewCart);     
  }


  handleSubmit=()=>{
    this.$viewCartInItemsRoom.classList.remove("hidden");
    this.$icon.classList.remove("hidden");
    this.pushData();
  }

  render(container) {
    this.$productItem.appendChild(this.$urlImg);
    // this.$productItem.appendChild(this.$saleButton);
    this.$productItem.appendChild(this.$titleProduct);
    this.$productItem.appendChild(this.$price);

    this.$button.appendChild(this.$buttonBuy);
    this.$button.appendChild(this.$icon);

    this.$productItem.appendChild(this.$button);
    this.$productItem.appendChild(this.$viewCartInItemsRoom);

    container.appendChild(this.$productItem);
  }
}
