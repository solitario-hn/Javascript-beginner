function Cart(localStorageKey) {
  const cart = {
    cartItems: undefined,
    loadFromStorage() {
      this.cartItems = JSON.parse(localStorage.getItem(localStorageKey)) || [
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
    },

    saveToStorage() {
      localStorage.setItem(localStorageKey, JSON.stringify(this.cartItems));
    },

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
    },

    removeFromCart(productId) {
      this.cartItems.forEach((cartItem, index) => {
        if (cartItem.productId === productId) {
          this.cartItems.splice(index, 1);
        }
      });
      this.saveToStorage();
    },

    updateDeliveryOption(productId, deliveryOptionId) {
      let matchingItem;
      this.cartItems.forEach((cartItem) => {
        if (productId === cartItem.productId) {
          matchingItem = cartItem;
        }
      });
      matchingItem.deliveryOptionId = deliveryOptionId;

      this.saveToStorage();
    },

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
    },
  };
  return cart;
}

const cart = Cart("cart-oop");
const businessCart = Cart("cart-business");
cart.loadFromStorage();

businessCart.loadFromStorage();

console.log(cart);
console.log(businessCart);
