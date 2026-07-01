class Cart {
  cartItems;
  #localStorageKey; //private -can only be accessed inside the class itself hence preventing the change of property by accident.

  constructor(localStorageKey) {
    //parameter for constructor is given when the object is created.
    this.#localStorageKey = localStorageKey; //this here refers to the object created using the class
    this.#loadFromStorage();
    //constructor has to be named constructor it shouldn't return anything.
  }

  #loadFromStorage() {
    //making a private method
    this.cartItems = JSON.parse(
      localStorage.getItem(this.#localStorageKey),
    ) || [
      {
        productId: "83d4ca15-0f35-48f5-b7a3-1ea210004f2e",
        quantity: 2,
        deliveryOptionId: "1",
      },
      {
        productId: "54e0eccd-8f36-462b-b68a-8182611d9add",
        quantity: 1,
        deliveryOptionId: "2",
      },
    ];
  }
  saveToStorage() {
    localStorage.setItem(this.#localStorageKey, JSON.stringify(this.cartItems));
  }
  addToCart(productId) {
    let matchingItem;
    // const productQuantity = Number(
    //   document.querySelector(`.js-quantity-selector-${productId}`).value,
    // );
    this.cartItems.forEach((cartItem) => {
      if (productId === cartItem.productId) {
        matchingItem = cartItem;
      }
    });

    if (matchingItem) {
      matchingItem.quantity += 1;
    } else {
      this.cartItems.push({
        productId,
        quantity: 1,
        delivryOptionId: "1",
      });
    }
    this.saveToStorage(); //acess function inside the object
  }

  removeFromCart(productId) {
    this.cartItems.forEach((cartItem, index) => {
      if (cartItem.productId === productId) {
        this.cartItems.splice(index, 1);
      }
    });
    this.saveToStorage();
  }
  updateDeliveryOption(productId, deliveryOptionId) {
    let matchingItem;
    this.cartItems.forEach((cartItem) => {
      if (productId === cartItem.productId) {
        matchingItem = cartItem;
      }
    });
    matchingItem.deliveryOptionId = deliveryOptionId;

    this.saveToStorage();
  }

  calculateCartQuantity() {
    let cartQuantity = 0;
    cart.forEach((cartItem) => {
      cartQuantity += cartItem.quantity;
    });
    if (cartQuantity === 0) {
      cartQuantity = "";
    }
    return cartQuantity;
    // document.querySelector(className).innerHTML = cartQuantity;
  }
}

const cart = new Cart("cart-oop");
const businessCart = new Cart("cart-business");
const newCart = new Cart("cart-new");

console.log(cart);
console.log(businessCart);
console.log(newCart);

console.log(businessCart instanceof Cart); //checks if this object/instance was created from this class.
// cart.#localStorageKey = "highhl"; private field cannot be accessed outside.
