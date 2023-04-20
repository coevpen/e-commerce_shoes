function fillItem(e, id){
  console.log(e);
}

async function fillItemPage(){
  var idm = localStorage.getItem("id");
  var db_response;
  const response = await fetch('/api/products/' +idm)
  .then(response => response.json())
  .then(data => db_response = data);
  console.log(db_response);
  document.title="Soul to Soul - "+db_response.product_name;
  document.getElementById("product-name-label").innerHTML = db_response.product_name;
  document.getElementById("product-price-label").innerHTML = "$"+db_response.price;
  document.getElementById("product-quantity-label").innerHTML = db_response.stockQTY +" in stock";
  document.getElementById("product-image").src="/assets/images/"+db_response.image;


}
fillItemPage();