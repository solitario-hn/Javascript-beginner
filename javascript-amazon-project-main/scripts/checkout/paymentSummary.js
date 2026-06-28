import { cart } from "../../data/cart.js";
import { products } from "../../data/products.js";
import { deliveryOptions } from "../../data/deliveryOptions.js";

console.log(cart);
export function renderPaymentSummary() {
  console.log("Payment Summary");
  const price = itemPrice();
  const shipping = shippingPrice();
  const totalBeforeTaxCents = itemPrice + shippingPrice;
  const taxCents = totalBeforeTaxCents * 0.1;
  const totalCents = totalBeforeTaxCents + taxCents;

  console.log(price);
  console.log((shippingPrice() / 100).toFixed(2));

  let paymentHTML = "";

  paymentHTML += `
          <div class="payment-summary-title">Order Summary</div>

          <div class="payment-summary-row">
            <div>Items (3):</div>
            <div class="payment-summary-money">$42.75</div>
          </div>

          <div class="payment-summary-row">
            <div>Shipping &amp; handling:</div>
            <div class="payment-summary-money">$4.99</div>
          </div>

          <div class="payment-summary-row subtotal-row">
            <div>Total before tax:</div>
            <div class="payment-summary-money">$47.74</div>
          </div>

          <div class="payment-summary-row">
            <div>Estimated tax (10%):</div>
            <div class="payment-summary-money">$4.77</div>
          </div>

          <div class="payment-summary-row total-row">
            <div>Order total:</div>
            <div class="payment-summary-money">$52.51</div>
          </div>

          <button class="place-order-button button-primary">
            Place your order
          </button>    
  `;
}

function itemPrice() {
  let cost = 0;
  cart.forEach((cartItem) => {
    products.forEach((product) => {
      const productId = product.id;
      if (product.id === cartItem.productId) {
        cost += cartItem.quantity * product.priceCents;
      }
    });
  });
  return cost;
}

function shippingPrice() {
  let shippingPrice = 0;
  deliveryOptions.forEach((option) => {
    cart.forEach((cartItem) => {
      if (cartItem.deliveryOptionId === option.id) {
        shippingPrice += option.priceCents;
      }
    });
  });
  return shippingPrice;
}
