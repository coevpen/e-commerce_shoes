async function fillPage(item,size){
  let p = document.getElementById("price-products").innerText;
  document.getElementById("price-products").innerText = parseFloat(p) + parseFloat(item.price);

  document.getElementById("card-holder").innerHTML += '<div class="row d-flex justify-content-center align-items-center product-cart-section"><div class="col-lg-3 col-md-12 mb-4 mb-lg-0"><div class="bg-image rounded"><img src="'+ "/assets/images/"+item.image+'" class="img-fluid rounded-3 product-image" alt="..."></div></div><div class="col-lg-4 col-md-6 mb-4 mb-lg-0"><p class="lead fw-normal mb-2 product-name-label"> ' +item.product_name+'</p><p><span class="text-muted">Size: </span>'+size+'</div><div class="col-lg-5 col-md-6 mb-4 mb-lg-0 test-div justify-content-evenly"><div class="col-md-3 col-lg-3 col-xl-2 d-flex number-input"><button class="btn btn-link px-2 text-decoration-none" onclick="this.parentNode.querySelector(' + "'input[type=number]'" +').stepDown()"> - </button><input id="form1" min="0" name="quantity" value="1" type="number" class="form-control form-control-sm w-auto" style="max-width: 50px; text-align: center"/><button class="btn btn-link px-2 text-decoration-none" onclick="this.parentNode.querySelector('+"'input[type=number]'"+').stepUp()"> + </button></div><div><p class="text-start text-md-center d-inline-block m-4"><strong id="product-price-label">$'+item.price+'</strong></p></div><h2 class="cart-x-btn"><i class="bi bi-x text-muted" onclick="delete_from_cart('+item.id+','+size+')"></i></h1></div><hr class="my-4" /></div>';
}

async function getCart(){
    var ids = localStorage.getItem("cart").split(","); 
    var db_response;
    ids.forEach(async element => {
      x=element.split("-");
      const s = x[1];
      const response = await fetch('/api/products/' +x[0])
      .then(response => response.json())
      .then(data => db_response = data);
      fillPage(db_response, s);
      document.getElementById("price-full").innerHTML = parseFloat(document.getElementById("price-products").innerText) * 0.0825 + parseFloat(document.getElementById("price-products").innerText);
      localStorage.setItem("price",document.getElementById("price-products").innerText);
    });
    
}
if(localStorage.getItem("cart")!="null" && localStorage.getItem("cart")!=""){
  getCart();
}
else if(localStorage.getItem("cart")==="null"){
  document.getElementById("card-holder").innerHTML="<h3 class='text-muted'>Your cart is empty!</h3>";
  document.getElementById("price-products").innerText = 0;
}
//localStorage.setItem("cart","null");