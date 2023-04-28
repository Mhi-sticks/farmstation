const username = document.querySelector("#username").value;
<<<<<<< HEAD
const email = document.querySelector("#email").value;
const password = document.querySelector("#password").value;

const form = document.querySelector("form"); // select the form element
const submitButton = form.querySelector(".login-btn"); // select the submit button

submitButton.addEventListener("click", (e) => {
  e.preventDefault(); // prevent the default form submission behavior

  const username = form.elements.username.value;
  const email = form.elements.email.value; // get the value of the email input field
=======
const password = document.querySelector("#password").value;

const form = document.querySelector("form"); // select the form element
const loginButton = form.querySelector(".login-btn"); // select the submit button

loginButton.addEventListener("click", (e) => {
  e.preventDefault(); // prevent the default form submission behavior

<<<<<<< HEAD
  const username = form.elements.username.value;
>>>>>>> 93377eb41b5bff77ce56b0dad3bdd8cda1d5e317
=======
  const email = form.elements.username.value;
>>>>>>> 1f637ab76b31638531441f5fc00a585c8652633f
  const password = form.elements.password.value; // get the value of the password input field

  fetch("/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
<<<<<<< HEAD
    body: JSON.stringify({ username, email, password }),
  })
    .then((response) => response.json())
    .then((data) => {
      // save the token to local storage
      localStorage.setItem("token", data.token);
      // redirect the user to the profile page with the user object in the query string
    //   window.location.href = `/profile?username=${data.user.username}`;
    window.location.href = "/profile.html";
      window.location.href = `/profile?username=${data.user.username}`;
=======
    body: JSON.stringify({
      email: email,
      password: password,
    }),
  }).then(resp => resp.json())
    .then((result) => {
      if ((result.message = "SUCCESS")) {
        // User authentication successful
        window.location.href = "/index.html";
      } else {
        // User authentication failed
        console.log(result)
      }
<<<<<<< HEAD
>>>>>>> 93377eb41b5bff77ce56b0dad3bdd8cda1d5e317
    })
    .catch((error) => {
      console.error(error);
=======
>>>>>>> 1f637ab76b31638531441f5fc00a585c8652633f
    });
});
