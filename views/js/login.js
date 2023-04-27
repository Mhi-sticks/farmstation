const username = document.querySelector("#username").value;
const password = document.querySelector("#password").value;

const form = document.querySelector("form"); // select the form element
const loginButton = form.querySelector(".login-btn"); // select the submit button

loginButton.addEventListener("click", (e) => {
  e.preventDefault(); // prevent the default form submission behavior

  const username = form.elements.username.value;
  const password = form.elements.password.value; // get the value of the password input field

  fetch("/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: username,
      password: password,
    }),
  })
    .then((response, err) => {
      if (response.ok) {
        // User authentication successful
        window.location.href = "/product.html";
      } else {
        // User authentication failed
        alert(err.message);
      }
    })
    .catch((error) => {
      console.error(error);
    });
});
