function createItem(item){
  box = document.getElementById("cards-go-here");
  box.innerHTML += '<div class="col mb-5"><a onclick="clickItem('+item.id+');" class="card-container" title="' + item.product_name + '"><div class="card h-100"><div class="card-img-top" style="max-height: 450px; max-width: 300px;"><img class="card-img" id="product-image" src="'+  "/assets/images/"+ item.image + '" alt="..." /></div><div class="card-body p-4"><div class="text-center"><h5 class="product-name-label fw-bolder" id="product-name-label">' + item.product_name + '</h5><p id="product-price-label"> $' + item.price + '</p></div></div></div></a></div>';
}
async function fillPage(page_num){
  box = document.getElementById("cards-go-here");
  box.innerHTML="";
  var db_response;
  
  if(localStorage.getItem("category")==="all" && localStorage.getItem("sortby")==="none") {
    document.getElementById("search-results-div").innerText="Showing Results for All";
    const response = await fetch('/api/products')
    .then(response => response.json())
    .then(data => db_response = data);
    var i = 0;
    var slice_start = (page_num-1) * 20;
    var slice_end = (page_num * 20);
    var proper_response = [];
    if(localStorage.getItem("type")!=="none"){
      db_response.forEach(element => {
        console.log(element.category.category_name);
        console.log(localStorage.getItem("type"));
        if(localStorage.getItem("type") === element.category.category_name){
          proper_response.push(element);
        }
      });
    }else{
      db_response.forEach(element => {
          proper_response.push(element);
      });
    }
    proper_response.slice(slice_start, slice_end).forEach(item => {
      createItem(item);
    });
    {
    console.log(db_response)
    }
  }
  else if(localStorage.getItem("category")==="men" && localStorage.getItem("sortby")==="none"){
    document.getElementById("search-results-div").innerText="Showing Results for Mens";
    const response = await fetch('/api/products/male')
    .then(response => response.json())
    .then(data => db_response = data);
    var i = 0;
  var slice_start = (page_num-1) * 20;
  var slice_end = (page_num * 20);
  var proper_response = [];
    if(localStorage.getItem("type")!=="none"){
      db_response.forEach(element => {
        console.log(element.category.category_name);
        console.log(localStorage.getItem("type"));
        if(localStorage.getItem("type") === element.category.category_name){
          proper_response.push(element);
        }
      });
    }else{
      db_response.forEach(element => {
          proper_response.push(element);
      });
    }
    proper_response.slice(slice_start, slice_end).forEach(item => {
    createItem(item);
  });{
    console.log(db_response)
  }
    }
    else if(localStorage.getItem("category")==="women" && localStorage.getItem("sortby")==="none"){
      document.getElementById("search-results-div").innerText="Showing Results for Womens";
      const response = await fetch('/api/products/female')
      .then(response => response.json())
      .then(data => db_response = data);
      var i = 0;
  var slice_start = (page_num-1) * 20;
  var slice_end = (page_num * 20);
  var proper_response = [];
    if(localStorage.getItem("type")!=="none"){
      db_response.forEach(element => {
        if(localStorage.getItem("type") === element.category.category_name){
          proper_response.push(element);
        }
      });
    }else{
      db_response.forEach(element => {
          proper_response.push(element);
      });
    }
    proper_response.slice(slice_start, slice_end).forEach(item => {
    createItem(item);
  });{
    console.log(db_response)
  }
    }
    else if (localStorage.getItem("sortby")==="priceASC") {
      document.getElementById("search-results-div").innerText="Showing Results for Low to High";
      const response = await fetch('/api/products/priceasc')
      .then(response => response.json())
      .then(data => db_response = data);
      var i = 0;
      var slice_start = (page_num-1) * 20;
      var slice_end = (page_num * 20);
      var proper_response=[];
      if(localStorage.getItem("category")!=="all"){
              db_response.forEach(element => {
                if(localStorage.getItem("category")==="women" && element.sexCategory==="female"){
                      
                        if(localStorage.getItem("type")!=="none"){
                            if(localStorage.getItem("type") === element.category.category_name){
                              proper_response.push(element);
                            }
                        }
                        else{
                            proper_response.push(element);
                        }
                }
                else if(localStorage.getItem("category")==="men" && element.sexCategory==="male"){
                  if(localStorage.getItem("type")!=="none"){
                    if(localStorage.getItem("type") === element.category.category_name){
                      proper_response.push(element);
                    }
                  }
                  else if(localStorage.getItem("type") === "none"){
                      proper_response.push(element);
                  }
                }
            });}
      else{
        if(localStorage.getItem("type")!=="none"){
          db_response.forEach(element => {
            if(localStorage.getItem("type") === element.category.category_name){
              proper_response.push(element);
            }
          });
          }
          else if(localStorage.getItem("type") === "none"){
            db_response.forEach(element => {
              proper_response.push(element);
          });
      }
      }
      proper_response.slice(slice_start, slice_end).forEach(item => {
        createItem(item);
      });
  }
    else if (localStorage.getItem("sortby")==="priceDESC") {
      document.getElementById("search-results-div").innerText="Showing Results for High to Low";
      const response = await fetch('/api/products/pricedesc')
      .then(response => response.json())
      .then(data => db_response = data);
      var i = 0;
      var slice_start = (page_num-1) * 20;
      var slice_end = (page_num * 20);
      var proper_response = [];
      if(localStorage.getItem("category")!=="all"){
        db_response.forEach(element => {
          if(localStorage.getItem("category")==="women" && element.sexCategory==="female"){
                
                  if(localStorage.getItem("type")!=="none"){
                      if(localStorage.getItem("type") === element.category.category_name){
                        proper_response.push(element);
                      }
                  }
                  else{
                      proper_response.push(element);
                  }
          }
          else if(localStorage.getItem("category")==="men" && element.sexCategory==="male"){
            if(localStorage.getItem("type")!=="none"){
              if(localStorage.getItem("type") === element.category.category_name){
                proper_response.push(element);
              }
            }
            else if(localStorage.getItem("type") === "none"){
                proper_response.push(element);
            }
          }
      });}
else{
  if(localStorage.getItem("type")!=="none"){
    db_response.forEach(element => {
      if(localStorage.getItem("type") === element.category.category_name){
        proper_response.push(element);
      }
    });
    }
    else if(localStorage.getItem("type") === "none"){
      db_response.forEach(element => {
        proper_response.push(element);
    });
}
}
      proper_response.slice(slice_start, slice_end).forEach(item => {
        createItem(item);
      });
      { console.log(db_response) }
    }
    else if (localStorage.getItem("sortby")==="rating") {
      document.getElementById("search-results-div").innerText="Showing Results by Rating";
      const response = await fetch('/api/products/rating')
      .then(response => response.json())
      .then(data => db_response = data);
      var i = 0;
      var slice_start = (page_num-1) * 20;
      var slice_end = (page_num * 20);
      var proper_response = [];
      if(localStorage.getItem("category")!=="all"){
        db_response.forEach(element => {
          if(localStorage.getItem("category")==="women" && element.sexCategory==="female"){
                
                  if(localStorage.getItem("type")!=="none"){
                      if(localStorage.getItem("type") === element.category.category_name){
                        proper_response.push(element);
                      }
                  }
                  else{
                      proper_response.push(element);
                  }
          }
          else if(localStorage.getItem("category")==="men" && element.sexCategory==="male"){
            if(localStorage.getItem("type")!=="none"){
              if(localStorage.getItem("type") === element.category.category_name){
                proper_response.push(element);
              }
            }
            else if(localStorage.getItem("type") === "none"){
                proper_response.push(element);
            }
          }
      });}
else{
  if(localStorage.getItem("type")!=="none"){
    db_response.forEach(element => {
      if(localStorage.getItem("type") === element.category.category_name){
        proper_response.push(element);
      }
    });
    }
    else if(localStorage.getItem("type") === "none"){
      db_response.forEach(element => {
        proper_response.push(element);
    });
}
}
      proper_response.slice(slice_start, slice_end).forEach(item => {
        createItem(item);
      });
      { console.log(db_response) }
    }
    else if (localStorage.getItem("sortby")==="quantity") {
      document.getElementById("search-results-div").innerText="Showing Results by Availability";
      const response = await fetch('/api/products/quantity')
      .then(response => response.json())
      .then(data => db_response = data);
      var i = 0;
      var slice_start = (page_num-1) * 20;
      var slice_end = (page_num * 20);
      var proper_response=[];
      if(localStorage.getItem("category")!=="all"){
        db_response.forEach(element => {
          if(localStorage.getItem("category")==="women" && element.sexCategory==="female"){
                
                  if(localStorage.getItem("type")!=="none"){
                      if(localStorage.getItem("type") === element.category.category_name){
                        proper_response.push(element);
                      }
                  }
                  else{
                      proper_response.push(element);
                  }
          }
          else if(localStorage.getItem("category")==="men" && element.sexCategory==="male"){
            if(localStorage.getItem("type")!=="none"){
              if(localStorage.getItem("type") === element.category.category_name){
                proper_response.push(element);
              }
            }
            else if(localStorage.getItem("type") === "none"){
                proper_response.push(element);
            }
          }
      });}
else{
  if(localStorage.getItem("type")!=="none"){
    db_response.forEach(element => {
      if(localStorage.getItem("type") === element.category.category_name){
        proper_response.push(element);
      }
    });
    }
    else if(localStorage.getItem("type") === "none"){
      db_response.forEach(element => {
        proper_response.push(element);
    });
}
}
      proper_response.slice(slice_start, slice_end).forEach(item => {
        createItem(item);
      });
      { console.log(db_response) }
    }
}
fillPage(1);