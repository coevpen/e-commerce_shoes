/* Function: login_valid
 * --------------------
 * This function will validate the email and passwords through connecting to the database
 */

async function loginFormHandler(event) {
    //this is to change the nav bar. when you finish the function u can move this line to whenever login is successfully finished.
    localStorage.setItem("logged_in", "true")
    event.preventDefault();

    const email = document.querySelector("#email").value.trim();
    const password = document.querySelector("#passwrd").value.trim();

    if (email && password) {
        const response = await fetch('/api/customers/login', {
            method: 'post',
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
