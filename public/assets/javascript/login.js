/* Function: login_valid
 * --------------------
 * This function will validate the email and passwords through connecting to the database
 */

async function loginFormHandler(event) {
    event.preventDefault();

    const email = document.querySelector("#email").value.trim();
    const password = document.querySelector("#passwrd").value.trim();

    if (email && password) {
        var db_response;
        const response = await fetch('/api/customers/login', {
            method: 'post',
            body: JSON.stringify({
                email,
                password
            }),
            headers: { 'Content-Type': 'application/json' }
        })
        .then(response => response.json())
        .then(data => db_response=data);
        if(db_response.customer === undefined){
            
        }
        else{
            document.location.replace('/');
            localStorage.setItem("logged_in", db_response.customer.first_name);
        }
        // if (response.ok) {
        //     document.location.replace('/');
        //     localStorage.setItem("logged_in", "true");
        // }
        // else {
        //     alert(response.statusText);
        // }
    }

}

document.querySelector(".login").addEventListener('submit', loginFormHandler);
