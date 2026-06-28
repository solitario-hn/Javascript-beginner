import { cart, addToCart, calculateCartQuantity } from "../data/cart.js";
import { products } from "../data/products.js";
import { formatCurrency } from "./utils/money.js";
import dayjs from "https://unpkg.com/supersimpledev@8.5.0/dayjs/esm/index.js";

//setting up date from dayjs  (external library for javascript)

const today = dayjs();
console.log(today);
const deliveryDate = today.add(7, "days");
console.log(deliveryDate);
console.log(deliveryDate.format("dddd,MMMM D"));

let productsHTML = "";

products.forEach((product) => {
  productsHTML += `
        <div class="product-container">
          <div class="product-image-container">
            <img class="product-image"
              src="${product.image}">
          </div>
          <div <img class="product-name limit-text-to-2-lines">
          ${product.name}
          </div>

          <div class="product-rating-container">
            <img class="product-rating-stars"
              src="images/ratings/rating-${product.rating.stars * 10}.png">
            <div class="product-rating-count link-primary">
              ${product.rating.count} 
            </div>
          </div>

          <div class="product-price">
            $${formatCurrency(product.priceCents)}
          </div>

          <div class="product-quantity-container">
            <select class="js-quantity-selector-${product.id}"  >
              <option selected value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>

          <div class="product-spacer"></div>

          <div class="added-to-cart">
            <img src="images/icons/checkmark.png">
            Added
          </div>

          <button data-product-id="${product.id}" class="add-to-cart-button button-primary js-add-to-cart">
            Add to Cart
          </button>
        </div>`;
}); //data attribute helps us to add any attribute to our html elemeent (kebab case data-attribute) and in func it changes into camel case camelCase  and to access all data attributes we use .dataset

document.querySelector(".js-products-grid").innerHTML = productsHTML;

calculateCartQuantity(".js-cart-quantity");

document.querySelectorAll(".js-add-to-cart").forEach((button) => {
  button.addEventListener("click", () => {
    const productId = button.dataset.productId;
    addToCart(productId);
    calculateCartQuantity(".js-cart-quantity");
    console.log(cart);
  });
});

const quantity = () => {
  cart.forEach((cartItem) => {
    quantity += cartItem.quantity;
  });
};
