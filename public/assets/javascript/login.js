/* Function: login_valid
 * --------------------
 * This function will validate the email and passwords through regex
 */
/*
function login_valid(bttnValue) {
    console.log(bttnValue);
    var email = document.getElementById("email").value;
    //console.log("Email: " + email);
    var emailPattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    var passwrd = document.getElementById("passwrd").value;
    var passwrdPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    var emailmsg;
    var passwrdmsg;

    // Email
    if (!(email.match(emailPattern))) {
        emailmsg = "Invalid email. Please try again.";
        document.getElementById("emailHelp").innerHTML = emailmsg;
    }

    // Password
    if (!(passwrd.match(passwrdPattern))) {
        passwrdmsg = "Invalid password. Please try again (Minimum of 8 characters, at least one uppercase letter, one lowercase letter, and one number.";
        document.getElementById("passwrdHelp").innerHTML = passwrdmsg;
    }

}
*/
async function loginFormHandler(event) {
    event.preventDefault();

    const email = document.querySelector("email").value.trim();
    const password = document.querySelector("passwrd").value.trim();

    if (username && password) {
        const response = await fetch('/api/customers/', {
            method: 'POST',
            body: JSON.stringify({
                email,
                password
            }),
            headers: { 'Content-Type': 'application/json' }
        });

        if (response.ok) {
            document.location.replace('/');
        }
        else {
            alert(response.statusText);
        }
    }

}

document.querySelector(".login").addEventListener('submit', loginFormHandler);