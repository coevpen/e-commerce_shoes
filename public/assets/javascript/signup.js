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
    const phnum = document.querySelector("#phnum").value.trim();
    const address = document.querySelector("#addr").value.trim();

    if (first_name && last_name && email && password && phnum && address) {
        const response = await fetch('/api/customers/', {
            method: 'post',
            body: JSON.stringify({
                first_name,
                last_name,
                email,
                password,
                address
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