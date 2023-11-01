var cart = JSON.parse(localStorage.getItem("cart")) || [];
var itemCounts = JSON.parse(localStorage.getItem("itemCounts")) || {};
var NavCount = localStorage.getItem("cartCount");

console.log(cart);
console.log(itemCounts);
if (NavCount == 0 || NavCount == null || NavCount == undefined) {
  document.getElementById("cart-count").innerText = 0;
} else {
  document.getElementById("cart-count").innerText = NavCount;
}

var amount = 0;
for (var x of cart) {
  var card = document.createElement("div");
  var cardList = document.getElementById("card-list");
  card.innerHTML = `<div class="checkout-card">
                        <div><img class="checkout-product-img"
                                src=${x.preview}>
                        </div>
                        <div>
                            <h4>${x.name}</h4>
                            <p>${itemCounts[x.id] || 0}</p>
                            <p><span id = "amount">Amount: Rs </span><span>${
                              x.price * (itemCounts[x.id] || 0)
                            } </span></p>
                        </div>
                    </div>`;
  cardList.append(card);
  amount = amount + x.price * (itemCounts[x.id] || 0);

  document.getElementById("total-amount").innerText = amount;
  document.getElementById("item-count").innerText = cart.length;
}
