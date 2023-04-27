const username = document.querySelector("#username").value;
const email = document.querySelector("#email").value;
const password = document.querySelector("#password").value;


const form = document.querySelector("form"); // select the form element
const submitButton = form.querySelector(".sup-btn"); // select the submit button

submitButton.addEventListener("click", (e) => {
  e.preventDefault(); // prevent the default form submission behavior

  const username = form.elements.username.value;
  const email = form.elements.email.value; // get the value of the email input field
  const password = form.elements.password.value; // get the value of the password input field

  fetch("/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: username,
      email: email,
      password: password,
    }),
  })
    .then((response) => {
      if (response.ok) {
        // User authentication successful
        window.location.href = "/profile.html";
      } else {
        // User authentication failed
        alert("Invalid email or password");
      }
    })
    .catch((error) => {
      console.error(error);
    });
});

