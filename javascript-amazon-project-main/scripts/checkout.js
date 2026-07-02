import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";

import { loadProducts } from "../data/products.js";

// import "../data/cart-class.js"; //runs all the codes inside the file

//import "../data/backend-practice.js";

// renderOrderSummary();
// renderPaymentSummary();

loadProducts(() => {
  renderOrderSummary();
  renderPaymentSummary();
});
