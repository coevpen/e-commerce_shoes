function createItem(item){
  box = document.getElementById("cards-go-here");
  box.innerHTML += '<div class="col mb-5"><a onclick="clickItem('+item.id+');" class="card-container" title="' + item.product_name + '"><div class="card h-100"><div class="card-img-top" style="max-height: 450px; max-width: 300px;"><img class="card-img" id="product-image" src="'+  "/assets/images/"+ item.image + '" alt="..." /></div><div class="card-body p-4"><div class="text-center"><h5 class="product-name-label fw-bolder" id="product-name-label">' + item.product_name + '</h5><p id="product-price-label"> $' + item.price + '</p></div></div></div></a></div>';
}
async function fillPage(page_num){
  box = document.getElementById("cards-go-here");
  box.innerHTML="";
  var db_response;
  if(localStorage.getItem("category")==="all"){
    document.getElementById("search-results-div").innerText="Showing Results for All";
  const response = await fetch('/api/products')
  .then(response => response.json())
  .then(data => db_response = data);
  var i = 0;
  var slice_start = (page_num-1) * 20;
  var slice_end = (page_num * 20);
  db_response.slice(slice_start, slice_end).forEach(item => {
    createItem(item);
  });{
    console.log(db_response)
  }
  }
  else if(localStorage.getItem("category")==="men"){
    document.getElementById("search-results-div").innerText="Showing Results for Mens";
    const response = await fetch('/api/products/male')
    .then(response => response.json())
    .then(data => db_response = data);
    var i = 0;
  var slice_start = (page_num-1) * 20;
  var slice_end = (page_num * 20);
  db_response.slice(slice_start, slice_end).forEach(item => {
    createItem(item);
  });{
    console.log(db_response)
  }
    }
    else if(localStorage.getItem("category")==="women"){
      document.getElementById("search-results-div").innerText="Showing Results for Womens";
      const response = await fetch('/api/products/female')
      .then(response => response.json())
      .then(data => db_response = data);
      var i = 0;
  var slice_start = (page_num-1) * 20;
  var slice_end = (page_num * 20);
  db_response.slice(slice_start, slice_end).forEach(item => {
    createItem(item);
  });{
    console.log(db_response)
  }
    }
}
fillPage(1);