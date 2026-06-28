export const cart = JSON.parse(localStorage.getItem("cart")) || [
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

//writing export tells which variable can be accessed outside this file.

//type module lets us use module and module only works with live server not raw html file.
//<script type="module" src="scripts/amazon.js"></script>
//the order of using the script tag to load the .js files is necessary as 2md tag uses code in the first tag. so wrrite tag first products.json  (with module there's no problem of the order)

export function addToCart(productId) {
  let matchingItem;
  const productQuantity = Number(
    document.querySelector(`.js-quantity-selector-${productId}`).value,
  );
  cart.forEach((cartItem) => {
    if (productId === cartItem.productId) {
      matchingItem = cartItem;
    }
  });

  if (matchingItem) {
    matchingItem.quantity += productQuantity;
  } else {
    cart.push({
      productId,
      quantity: productQuantity,
      delivryOptionId: "1",
    });
  }
  saveToStorage();
}

export function removeFromCart(productId) {
  cart.forEach((cartItem, index) => {
    if (cartItem.productId === productId) {
      cart.splice(index, 1);
    }
  });
  calculateCartQuantity(".js-return-to-home-link");
  saveToStorage();
}

function saveToStorage() {
  localStorage.setItem("cart", JSON.stringify(cart));
}

export function calculateCartQuantity(className) {
  let cartQuantity = 0;
  cart.forEach((cartItem) => {
    cartQuantity += cartItem.quantity;
  });
  if (cartQuantity === 0) {
    cartQuantity = "";
  }
  document.querySelector(className).innerHTML = cartQuantity;
}
