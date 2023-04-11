/* Function: login_valid
 * --------------------
 * This function will validate the email and passwords through regex
 */
function login_valid(bttnValue) {
    console.log(bttnValue);
    var email = document.getElementById("email").value;
    //console.log("Email: " + email);
    var emailPattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    var passwrd = document.getElementById("passwrd").value;
    var passwrdPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    var emailmsg;
    var passwrdmsg;

}