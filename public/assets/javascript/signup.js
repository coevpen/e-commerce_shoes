/* Function: singup_valid
 * ---------------------------
 * This function grabs the values inserted by the user and validates them
 * using regex and javascript
 */
/*
function signup_valid(bttnValue) {
    console.log(bttnValue);

    // First and Last Name
    var first_name = document.getElementById("fname").value;
    console.log("First Name: " + first_name);
    var last_name = document.getElementById("lname").value;
    console.log("Last Name: " + last_name);

    // Email
    var email = document.getElementById("email").value;
    var email_pattrn = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!(email.match(email_pattrn))) {
        var email_msg = "Invalid email. Please try again.";
        document.getElementById("emailHelp").innerHTML = email_msg;
    }

    // Password
    var passwrd = document.getElementById("passwrd").value;
    var passwrd_pattrn = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    if (!(passwrd.match(passwrd_pattrn))) {
        var passwrd_msg = "Invalid password. Please try again (Minimum of 8 characters, at least one uppercase letter, one lowercase letter, and one number.";
        document.getElementById("passwrdHelp").innerHTML = passwrd_msg;
    }

    // Phone Number
    var phnum = document.getElementById("phnum").value;
    var phnum_pattrn_a = /^[1-9]\d{2}-\d{3}-\d{4}/;
    var phnum_pattrn_b = /^\(\d{3}\)\s\d{3}-\d{4}/;
    var phnum_pattrn_c = /^[1-9]\d{2}\s\d{3}\s\d{4}/;
    var phnum_pattrn_d = /^[1-9]\d{2}\.\d{3}\.\d{4}/;
    var phnum_pattrn_e = /^[1-9]\d{2}\d{7}/;
    if (!(phnum.match(phnum_pattrn_a)) || !(phnum.match(phnum_pattrn_b)) || !(phnum.match(phnum_pattrn_c)) || !(phnum.match(phnum_pattrn_d)) || !(phnum.match(phnum_pattrn_e))) {
        var phnum_msg = "Invalid phone number. Please try again.";
        document.getElementById("phnumHelp").innerHTML = phnum_msg;
    }

    
}
*/
async function signupFormHandler(event) {
    event.preventDefault();

    const fname = document.querySelector("#fname").value.trim();
    const lname = document.querySelector("#lname").value.trim();
    const email = document.querySelector("#email").value.trim();
    const passwrd = document.querySelector("#passwrd").value.trim();
    const phnum = document.querySelector("#phnum").value.trim();
    const addr = document.querySelector("#addr").value.trim();

    if (fname && lname && email && passwrd && phnum && addr) {
        const response = await fetch('/api/customers/', {
            method: 'post',
            body: JSON.stringify({
                fname,
                lname,
                email,
                passwrd,
                phnum,
                addr
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

document.querySelector('.sign-up').addEventListener('submit', signupFormHandler);