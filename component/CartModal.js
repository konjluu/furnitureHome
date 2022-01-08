export default class CartModal {
    $cartContainer;
    $cartHead;
    $productQuantity;
    $cartList;
    $cartBtn;
    $emptyCartBtn;
    $checkoutBtn;
    $totalPrice;
  
    _handleClickViewCart
    constructor(handleClickViewCart) {
      this._handleClickViewCart=handleClickViewCart

      this.$cartContainer = document.createElement("div");
      this.$cartContainer.setAttribute("class", " shopping-cart hidden");
  
      this.$cartHead = document.createElement("button");
      this.$cartHead.setAttribute("class", " shopping-cart-head flex");
      this.$cartHead.innerHTML =
      "<img src='https://pngimg.com/uploads/shopping_cart/shopping_cart_PNG4.png' alt='yourimgtext' width='30' height='30'' '/>";
      this.$cartHead.addEventListener("click", this._handleClickViewCart);
  
      this.$productQuantity = document.createElement("span");
      this.$productQuantity.textContent ="0";
      this.$productQuantity.setAttribute('class',"")
  
  

      
      this.$cartList = document.createElement("ul");
      this.$cartList.setAttribute("class", "shopping-cart-list");
  
      this.$cartBtn = document.createElement("div");
      this.$cartBtn.setAttribute("class", "cart-buttons ");
  
      this.$emptyCartBtn = document.createElement("a");
      this.$emptyCartBtn.href= "#0"
      this.$emptyCartBtn.textContent = "Huỷ order";
      this.$emptyCartBtn.setAttribute("class", "button empty-cart-btn ");
  
      this.$checkoutBtn = document.createElement("a");
      this.$checkoutBtn.href= "#0"
      this.$totalPrice = document.createElement("span");
      this.$totalPrice.textContent = "0đ";
      this.$totalPrice.setAttribute("class", "total-price ");
      this.$checkoutBtn.textContent =
        "Thanh toán- " + this.$totalPrice.textContent;
      this.$checkoutBtn.setAttribute("class", "button cart-checkout");
    }
    
    render() {
      this.$cartHead.appendChild(this.$productQuantity);
  
      this.$cartBtn.appendChild(this.$emptyCartBtn);
      this.$cartBtn.appendChild(this.$checkoutBtn);
  
      this.$cartContainer.appendChild(this.$cartHead);
      this.$cartContainer.appendChild(this.$cartList);
      this.$cartContainer.appendChild(this.$cartBtn);
  
      return this.$cartContainer;
    }
}