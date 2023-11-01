$(document).ready(function () {
  $(".your-class").slick({
    infinite: false,
    speed: 300,
    dots: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 1000,
  });
});

var read_ajax = () => {
  var a = new XMLHttpRequest();
  a.open("GET", "https://5d76bf96515d1a0014085cf9.mockapi.io/product", true);
  a.send();
  a.onreadystatechange = () => {
    // console.log(a.readyState);
    // console.log(a.status);
    if (a.status == 200 && a.readyState == 4) {
      // console.log(a.responseText);
      var productList = JSON.parse(a.responseText);
      for (var i in productList) {
        //for Accessories

        if (productList[i].isAccessory == true) {
          var div_tag = document.createElement("div");
          div_tag.addEventListener("click", handleClick);
          // div_tag.id = i;
          div_tag.className = "card";
          var img_cover = document.createElement("div");
          div_tag.appendChild(img_cover);
          var details = document.createElement("div");
          details.className = "details_style";
          div_tag.appendChild(details);
          for (var j in productList[i]) {
            if (j == "preview") {
              var img = document.createElement("img");
              img.src = productList[i][j];
              img.className = "imgstyle";
              img_cover.appendChild(img);
            } else if (j == "name") {
              var text_name = document.createElement("h3");
              text_name.innerHTML += productList[i][j];
              text_name.className = "namestyle";
              details.appendChild(text_name);
            } else if (j == "brand") {
              var brand_name = document.createElement("h4");
              brand_name.innerHTML += productList[i][j];
              brand_name.className = "brandstyle";
              details.appendChild(brand_name);
            } else if (j == "price") {
              var price = document.createElement("h5");
              price.innerHTML += "Rs" + productList[i][j];
              price.className = "pricestyle";
              details.appendChild(price);
            }
          }
          document.getElementById("Accessories").appendChild(div_tag);
        }
        // for clothing
        else {
          var div_tag = document.createElement("div");
          div_tag.addEventListener("click", handleClick);
          div_tag.className = "card";
          div_tag.id = i;
          var img_cover = document.createElement("div");
          div_tag.appendChild(img_cover);
          var details = document.createElement("div");
          details.className = "details_style";
          div_tag.appendChild(details);
          for (var j in productList[i]) {
            if (j == "preview") {
              var img = document.createElement("img");
              img.src = productList[i][j];
              img.className = "imgstyle";
              img_cover.appendChild(img);
            } else if (j == "name") {
              var text_name = document.createElement("h3");
              text_name.innerHTML += productList[i][j];
              text_name.className = "namestyle";
              details.appendChild(text_name);
            } else if (j == "brand") {
              var brand_name = document.createElement("h4");
              brand_name.innerHTML += productList[i][j];
              brand_name.className = "brandstyle";
              details.appendChild(brand_name);
            } else if (j == "price") {
              var price = document.createElement("h5");
              price.innerHTML += "Rs" + productList[i][j];
              price.className = "pricestyle";
              details.appendChild(price);
            }
          }
          document.getElementById("clothing").appendChild(div_tag);
        }
      }
    }
  };
};

read_ajax();

function handleClick(e) {
  // console.log(e.target.src);
  var a = new XMLHttpRequest();
  a.open("GET", "https://5d76bf96515d1a0014085cf9.mockapi.io/product", true);
  a.send();
  a.onreadystatechange = () => {
    // console.log(a.readyState);
    // console.log(a.status);
    if (a.status == 200 && a.readyState == 4) {
      var productData = JSON.parse(a.responseText);
      var div_left = document.createElement("div");
      div_left.className = "left ";
      var div_right = document.createElement("div");
      div_right.className = "right ";
      var div_productdescription = document.createElement("div");
      div_right.appendChild(div_productdescription);
      var description = document.createElement("div");
      div_right.appendChild(description);
      var preview = document.createElement("div");
      div_right.appendChild(preview);

      for (var k of productData) {
        // console.log(k.id);
        if (e.target.src == k.preview) {
          for (var x in k) {
            // console.log(x, ":" + k[x]);
            if (x == "name") {
              var h1_name = document.createElement("h1");
              h1_name.innerHTML += k[x];
              div_productdescription.appendChild(h1_name);
            } else if (x == "brand") {
              var h4_brand = document.createElement("h4");
              h4_brand.innerHTML += k[x];
              div_productdescription.appendChild(h4_brand);
            } else if (x == "price") {
              var h3_price = document.createElement("h3");
              h3_price.innerHTML +=
                x[0].toUpperCase() + x.slice(1) + ": " + "Rs ";
              var span = document.createElement("span");
              span.innerHTML += k[x];
              h3_price.appendChild(span);
              div_productdescription.appendChild(h3_price);
            } else if (x == "description") {
              var h3_description = document.createElement("h3");
              h3_description.innerHTML +=
                x[0].toUpperCase() + x.slice(1) + "<br>";
              var p_description = document.createElement("p");
              p_description.innerHTML += k[x];
              description.appendChild(h3_description);
              description.appendChild(p_description);
            } else if (x == "preview") {
              var h3_preview = document.createElement("h3");
              h3_preview.innerHTML += "Product Preview";
              preview.appendChild(h3_preview);
              var img = document.createElement("img");
              img.src += k[x];
              div_left.appendChild(img);
            } else if (x == "photos") {
              var photo_div = document.createElement("div");
              photo_div.setAttribute("id", "photobox");
              for (var j of k[x]) {
                var img_photo = document.createElement("img");
                img_photo.src += j;
                img_photo.className = "previewimg";
                photo_div.appendChild(img_photo);
              }

              preview.appendChild(photo_div);
            }
          }

          var button = document.createElement("btn");
          button.className = "btn";
          button.innerHTML += "Add to Cart";
          button.addEventListener("click", buttonhandle);
          div_right.appendChild(button);

          var remove = document.querySelectorAll(".remove");
          for (var i = 0; i < remove.length; i++) {
            remove[i].remove();
          }

          document.getElementById("main").appendChild(div_left);
          document.getElementById("main").appendChild(div_right);

          //functioning -  toggling the border and prview image on click
          var previewselect = document.getElementsByClassName("previewimg");
          previewselect[0].className += " active";
          for (var i = 0; i < previewselect.length; i++) {
            previewselect[i].addEventListener("click", function () {
              var activeImage = document.querySelector(".active");
              activeImage.classList.remove("active");
              this.classList.add("active");
              var img_element = document.querySelector("div.left img");
              img_element.src = this.src;
            });
          }

          var cart = JSON.parse(localStorage.getItem("cart")) || [];
          var itemCounts = JSON.parse(localStorage.getItem("itemCounts")) || {};
          function buttonhandle() {
            var cartCountElement = document.getElementById("cart-count");
            var cartCount = parseInt(localStorage.getItem("cartCount")) || 0;
            cartCount++;
            cartCountElement.textContent = cartCount;
            localStorage.setItem("cartCount", cartCount);
            var productToAdd = null;
            for (var t of productData) {
              if (t.preview == e.target.src) {
                // console.log(t);
                productToAdd = t;
                // break;
                // elecount++;
              }
              if (productToAdd) {
                // Check if the product is already in the cart
                if (itemCounts[productToAdd.id]) {
                  itemCounts[productToAdd.id]++;
                } else {
                  itemCounts[productToAdd.id] = 1;
                  cart.push(productToAdd);
                }
                // Store the updated cart and item counts in localStorage
                localStorage.setItem("cart", JSON.stringify(cart));
                localStorage.setItem("itemCounts", JSON.stringify(itemCounts));
              }
            }
          }
        }
      }
    }
  };
}
