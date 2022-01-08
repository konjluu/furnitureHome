import {db,viewCartRef,viewCartMock} from "../constant/firebase.js"
import {
    getDocs,
    query
}from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";

import InformationOfPurchasedProduct from "../viewCart/informationOfPurchasedProduct.js"
import BillTotal from "../viewCart/_billTotal.js"
export default class ViewCardChild{
    $viewCardChildContainer;

    $parameter;  // gom : Sản phẩm, Giá, Số lượng, Tổng
    $nameProduct;
    $cost
    $quantily;
    $total;

    $informationOfPurchasedProduct; //thông tin của sản phẩm đã mua

    $updateViewCart;        //gom ; ma san pham, update gio hang
    $codeSale;
    $applyButton;
    $updateViewCartButton;

    $calculateViewCart;
    constructor() {
        
        this.$viewCardChildContainer=document.createElement("div");


        this.$parameter=document.createElement("div");

        this.$nameProduct=document.createElement("p");
        this.$nameProduct.textContent="Sản phẩm";

        this.$cost=document.createElement("p");
        this.$cost.textContent="Giá";

        this.$quantily=document.createElement("p");
        this.$quantily.textContent="Số lượng";

        this.$total=document.createElement("p");
        this.$total.textContent="Tổng";

        this.$informationOfPurchasedProduct=document.createElement("div");
        // this.$informationOfPurchasedProduct=new InformationOfPurchasedProduct();

        this.$updateViewCart=document.createElement("div");

        this.$codeSale=document.createElement("input");
        this.$codeSale.type="";
        this.$codeSale.placeholder="Mã ưu đãi";

        this.$applyButton=document.createElement("button");
        this.$applyButton.textContent="Áp dụng";

        this.$updateViewCartButton=document.createElement("button");
        this.$applyButton.textContent="Cập nhật giỏ hàng";

        // this.getAllData();

        this.$calculateViewCart=new BillTotal(this.getAllData());


    }

    async getAllData(){
        const querySnapshot = await getDocs(viewCartRef);
        let _billTotal=0;
        querySnapshot.forEach((doc) => {
            console.log(doc.data());
            const itemsOnviewCart=new InformationOfPurchasedProduct(doc.data());
            itemsOnviewCart.render(this.$informationOfPurchasedProduct);
            _billTotal+=doc.data().total
        });
        console.log(_billTotal)
        return _billTotal;
    }

    

    render(container){
        this.$parameter.appendChild(this.$nameProduct);
        this.$parameter.appendChild(this.$cost);
        this.$parameter.appendChild(this.$quantily);
        this.$parameter.appendChild(this.$total);


        this.$updateViewCart.appendChild(this.$codeSale);
        this.$updateViewCart.appendChild(this.$applyButton);
        this.$updateViewCart.appendChild(this.$updateViewCartButton);

        this.$viewCardChildContainer.appendChild(this.$parameter);
        this.$viewCardChildContainer.appendChild(this.$informationOfPurchasedProduct);
        // this.$informationOfPurchasedProduct.render(this.$viewCardChildContainer);
        this.$viewCardChildContainer.appendChild(this.$updateViewCart);

        this.$calculateViewCart.render(this.$viewCardChildContainer);

        container.appendChild(this.$viewCardChildContainer)

    }


}