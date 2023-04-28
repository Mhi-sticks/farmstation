const username = document.querySelector("#username").value;
const email = document.querySelector("#email").value;
const password = document.querySelector("#password").value;

const form = document.querySelector("form"); // select the form element
const submitButton = form.querySelector(".login-btn"); // select the submit button

submitButton.addEventListener("click", (e) => {
  e.preventDefault(); // prevent the default form submission behavior

  const username = form.elements.username.value;
  const email = form.elements.email.value; // get the value of the email input field
  const password = form.elements.password.value; // get the value of the password input field

  fetch("/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
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
    })
    .catch((error) => {
      console.error(error);
    });
});
