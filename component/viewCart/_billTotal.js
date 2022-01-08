export default class BillTotal{
    billTotalContainer;

    titleBill;
    billTotal;

    constructor(_billTotal){
        console.log(_billTotal,"asdf")
        this.billTotalContainer=document.createElement("div");

        this.titleBill=document.createElement("h1");
        this.titleBill.textContent="Cộng giỏ hàng : ";
        this.titleBill.setAttribute("class", "text-4xl font-bold");

        this.billTotal=document.createElement("div");
        this.billTotal.textContent=`${_billTotal}`
     

    }

    render(container){
        this.billTotalContainer.appendChild(this.billTotal);
        this.billTotalContainer.appendChild(this.titleBill);

        container.appendChild(this.billTotalContainer);
    }


}