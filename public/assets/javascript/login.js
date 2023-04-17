/* Function: login_valid
 * --------------------
 * This function will validate the email and passwords through regex
 */

function login_valid(bttnValue) {
    //this is to change the nav bar. when you finish the function u can move this line wherever it should go.
    localStorage.setItem("logged_in", "true")

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
