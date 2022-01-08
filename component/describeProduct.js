// //component con của component introduceProduct
import ImgProduct from "./describleComponent/imgProduct.js"
import InformationProduct from "./describleComponent/informationProduct.js"
import DetailedDescription from "./describleComponent/detailedDescription.js"
import {imgDescribe} from "./API.js"

export default class DescribeProduct{
    $DescribeContainer;

    _Notification;
    _productAdded;
    _viewCart;

    $imgProduct;
    $informationProduct;
    $detailedDescription;

    _functionViewCart;
    _id;
    _name
    _imgsrc;
    constructor(functionViewCart,id,name,imgsrc){
        this._id=id;
        this._imgsrc=imgsrc;
        this._functionViewCart=functionViewCart;
        this._name=name;

        this.$DescribeContainer=document.createElement("div");
        this._Notification=document.createElement("div");
        this.$intro=document.createElement("div");
        
        this.$imgProduct=document.createElement("div");
        this.$informationProduct=new InformationProduct((quanity)=>{
            this.appendNotification(quanity)
        },this._id,this._name,this._imgsrc);

        this.$detailedDescription=new DetailedDescription();
    }

    viewCart=((quanity)=>{
        
        this._functionViewCart(quanity);
    })

    appendNotification(quanity){
        // console.log(quanity);
        this._Notification.innerHTML="";
        const productAdded=document.createElement("p");
        productAdded.textContent=quanity+" x " +`"${this._name}"`+" đã được thêm vào giỏ hàng.";

        const viewCart=document.createElement("button");
        viewCart.textContent="Xem giỏ hàng";
        viewCart.setAttribute(
            "class",
            " bg-gray-700 hover:shadow-lg text-white font-bold mt-5 py-1 px-3 rounded"
          );
        viewCart.addEventListener("click",()=>this.viewCart(quanity.getValueInputQuantily));

        const Notification=document.createElement("div");
        Notification.setAttribute(
            "class",
            "bg-slate-300"
          );
        Notification.appendChild(productAdded);
        Notification.appendChild(viewCart);
        this._Notification.appendChild(Notification);
    }

    render(container){
        const picItemTemp=`picItem${this._id}`;
        const imgs=imgDescribe[picItemTemp];
        // console.log(imgs);
        imgs.forEach(img=>{
            const pic= new ImgProduct(img);
            pic.render(this.$imgProduct);
        })

        this.$DescribeContainer.appendChild(this._Notification);

        this.$intro.appendChild(this.$imgProduct);
        this.$informationProduct.render(this.$intro);
        // this.$intro.setAttribute("class","flex-col")
        this.$DescribeContainer.appendChild(this.$intro);

        this.$detailedDescription.render(this.$DescribeContainer);
        container.appendChild(this.$DescribeContainer);
        

    }
}