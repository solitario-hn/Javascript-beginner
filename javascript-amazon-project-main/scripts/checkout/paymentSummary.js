import { cart, calculateCartQuantity } from "../../data/cart.js";
import { products } from "../../data/products.js";
import { deliveryOptions } from "../../data/deliveryOptions.js";
import { centsToDollar } from "../utils/money.js";

export function renderPaymentSummary() {
  const price = itemPrice();
  const shipping = shippingPrice();
  const totalBeforeTaxCents = price + shipping;
  const taxCents = totalBeforeTaxCents * 0.1;
  const totalCents = totalBeforeTaxCents + taxCents;

  let paymentHTML = "";

  paymentHTML += `
          <div class="payment-summary-title">Order Summary</div>

          <div class="payment-summary-row">
            <div>Items (${calculateCartQuantity()}):</div>
            <div class="payment-summary-money">$${centsToDollar(price)}</div>
          </div>

          <div class="payment-summary-row">
            <div>Shipping &amp; handling:</div>
            <div class="payment-summary-money">$${centsToDollar(shipping)}</div>
          </div>

          <div class="payment-summary-row subtotal-row">
            <div>Total before tax:</div>
            <div class="payment-summary-money">$${centsToDollar(totalBeforeTaxCents)}</div>
          </div>

          <div class="payment-summary-row">
            <div>Estimated tax (10%):</div>
            <div class="payment-summary-money">$${centsToDollar(taxCents)}</div>
          </div>

          <div class="payment-summary-row total-row">
            <div>Order total:</div>
            <div class="payment-summary-money">$${centsToDollar(totalCents)}</div>
          </div>

          <button class="place-order-button button-primary">
            Place your order
          </button>    
  `;
  document.querySelector(".js-payment-summary").innerHTML = paymentHTML;
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
