// cart.js

function displayCart() {
  var cartContentDiv = document.getElementById("cartContent");

  if (localStorage.getItem("cartItems")) {
      var cartItems = JSON.parse(localStorage.getItem("cartItems"));

      var cartHTML = "<h2>Cart Items</h2>";
      cartHTML += "<table>";
      cartHTML += "<tr>";
      cartHTML += "<th>Book Name</th>";
      cartHTML += "<th>Quantity</th>";
      cartHTML += "<th>Unit Price</th>";
      cartHTML += "<th>Total Amount</th>";
      cartHTML += "</tr>";

      var grandTotal = 0;

      cartItems.forEach(function (item) {
          var total = item.quantity * item.price;
          grandTotal += total;

          cartHTML += "<tr>";
          cartHTML += "<td>" + item.bookName + "</td>";
          cartHTML += "<td>" + item.quantity + "</td>";
          cartHTML += "<td>$" + item.price.toFixed(2) + "</td>";
          cartHTML += "<td>$" + total.toFixed(2) + "</td>";
          cartHTML += "</tr>";
      });

      cartHTML += "</table>";

      cartHTML += "<p><strong>Grand Total:</strong> $" + grandTotal.toFixed(2) + "</p>";

      cartContentDiv.innerHTML = cartHTML;
  } else {
      cartContentDiv.innerHTML = "<p>Your cart is empty.</p>";
  }
}
