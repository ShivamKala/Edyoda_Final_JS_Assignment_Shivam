var cart = JSON.parse(localStorage.getItem("cart")) || [];
var itemCounts = JSON.parse(localStorage.getItem("itemCounts")) || {};

console.log(cart);
console.log(itemCounts);

for (var x of cart) {
  var card = document.createElement("div");
  var cardList = document.getElementById("card-list");
  card.innerHTML = `<div class="checkout-card">
                        <div><img class="checkout-product-img"
                                src=${x.preview}>
                        </div>
                        <div>
                            <h4>${x.name}</h4>
                            <p>x3</p>
                            <p><span>Amount: Rs </span><span>${x.price}</span></p>
                        </div>
                    </div>`;
  cardList.append(card);
}
