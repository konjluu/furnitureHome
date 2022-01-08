
export default class InformationOfPurchasedProduct {
    informationOfPurchasedProduct_Container;

    itemDeleteButton;
    illustration;
    nameProduct;
    cost;
    quantily;
    total;

    constructor(items) {
        this.informationOfPurchasedProduct_Container = document.createElement("div");
        this.informationOfPurchasedProduct_Container.setAttribute('class'," flex  mt-20")

        this.itemDeleteButton = document.createElement("button");

        this.product = document.createElement("div")
        this.product.setAttribute('class','w-40 content-center')

        this.illustration = document.createElement("img");
        this.illustration.src=items.img;
        this.illustration.setAttribute(
            "class",
            "w-10 h-10 object-cover hover:scale-110 duration-300"
        );
        

        this.nameProduct = document.createElement("p");
        this.nameProduct.textContent=items.name;

        this.cost = document.createElement("p");
        this.cost.textContent=`${items.cost}`;
        this.cost.setAttribute('class','ml-10 w-40')

        this.quantily = document.createElement("input");
        this.quantily.value=items.quantily;
        this.quantily.textContent=items.quantily;
        this.quantily.setAttribute(
            "class",
            "w-40 ml-10 border border-gray-500");

        this.total = document.createElement("p");
        this.total.textContent=items.total;
        this.total.setAttribute('class','ml-10 w-40')
    }

    render(container) {
        this.informationOfPurchasedProduct_Container.appendChild(this.itemDeleteButton);
        this.product.appendChild(this.nameProduct)
        this.product.appendChild(this.illustration)

        this.informationOfPurchasedProduct_Container.appendChild(this.product);
        // this.informationOfPurchasedProduct_Container.appendChild(this.nameProduct);
        this.informationOfPurchasedProduct_Container.appendChild(this.cost);
        this.informationOfPurchasedProduct_Container.appendChild(this.quantily);
        this.informationOfPurchasedProduct_Container.appendChild(this.total);

        container.appendChild(this.informationOfPurchasedProduct_Container);

    }
}
