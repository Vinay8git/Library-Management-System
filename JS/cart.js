document.addEventListener("DOMContentLoaded", function() 
{
    // localStorage.clear();
   displayCart();
});

function displayCart() {
  var cartTable = document.getElementById("cartTable");
  var grandTotalDiv = document.getElementById("grandTotal");

  if (localStorage.getItem("cartItems")) {
      var cartItems = JSON.parse(localStorage.getItem("cartItems"));
      var grandTotal = 0;

      cartTable.innerHTML = "<tr><th>Book Name</th><th>Quantity</th><th>Price</th><th>Total</th></tr>";

      cartItems.forEach(function (item) 
      {
          var total = item.quantity * item.price;
          grandTotal += total;

          var row = cartTable.insertRow(-1);
          var cell1 = row.insertCell(0);
          var cell2 = row.insertCell(1);
          var cell3 = row.insertCell(2);
          var cell4 = row.insertCell(3);

          cell1.textContent = item.bookName;
          cell2.textContent = item.quantity;
          cell3.textContent = "$" + item.price;
          cell4.textContent = "$" + total;
      });

      grandTotalDiv.textContent = "Grand Total: $" + grandTotal;
  } 
  else
   {
      cartTable.innerHTML = "<tr><td colspan='4'>Your cart is empty.</td></tr>";
      grandTotalDiv.textContent = "";
  }
}
function clearCart() {
    localStorage.clear();
    displayCart();
}