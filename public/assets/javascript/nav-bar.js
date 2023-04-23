
  
 async function logIn(){
  if(localStorage.getItem("logged_in") !== "false"){
    var db_response;
    const response = await fetch('api/customers/'+localStorage.getItem("logged_in"))
    .then(response => response.json())
    .then(data => db_response = data);
    console.log(db_response);
    box = document.getElementById("navbar-change");
    box.innerHTML = '<a id="navbarDropdown" class="d-flex nav-link dropdown-toggle align-items-center justify-content-center" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"><h2 id="h2-nav" class="m-0 d-flex align-items-center px-1" title="Account"><img src="assets/images/rabbit.png" style="border: solid black 2px; padding: 2px; border-radius: 21px; margin-right:2px;"></h2>'+db_response.first_name+'<a style="display: none;"href="https://www.flaticon.com/free-icons/rabbit" title="rabbit icons">Rabbit icons created by Freepik - Flaticon</a></a><ul class="dropdown-menu" aria-labelledby="navbarDropdown" data-bs-popper="none"><li><a class="dropdown-item" onclick="logout()">Log Out</a></li><li><hr class="dropdown-divider"></li><li><a class="dropdown-item" href="order-history.html">Order History</a></li><li><a class="dropdown-item" href="account.html">Account Information</a></li></ul>';
  }
  else{
    box = document.getElementById("navbar-change");
    box.innerHTML = '<a id="navbarDropdown" class="d-flex nav-link dropdown-toggle align-items-center justify-content-center" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"><h2 id="h2-nav" class="m-0 d-flex align-items-center px-1" title="Sign In"><i class="bi bi-person-circle"></i> </h2></a><ul class="dropdown-menu" aria-labelledby="navbarDropdown" data-bs-popper="none"><li><a class="dropdown-item" href="login.html" target="_parent">Sign Up</a></li></ul>';
  }
 }
 
 logIn();
  
  if(localStorage.getItem("cart")==="null"){

  }
  else{
    var t = localStorage.getItem("cart").split(",");
    document.getElementById("cart-num").innerText=t.length;
  }


  function logout(){
    localStorage.setItem("logged_in","false");
    location.reload();
  }