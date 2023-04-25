/* Function: singup_valid
 * ---------------------------
 * This function grabs the values inserted by the user and validates them
 * using an async function and connecting to the database
 */

async function signupFormHandler(event) {
    event.preventDefault();

    const first_name = document.querySelector("#fname").value.trim();
    const last_name = document.querySelector("#lname").value.trim();
    const email = document.querySelector("#email").value.trim();
    const password = document.querySelector("#passwrd").value.trim();
    var db_response;
    if (first_name && last_name && email && password) {
        const response = await fetch('/api/customers/', {
            method: 'post',
            body: JSON.stringify({
                first_name,
                last_name,
                email,
                password,
            }),
            headers: { 'Content-Type': 'application/json' }
        })
        .then(response=>response.json())
        .then(data=> db_response = data);
        localStorage.setItem("logged_in",db_response.id);
        document.location.replace('/');
    }
}

document.querySelector('.sign-up').addEventListener('submit', signupFormHandler);