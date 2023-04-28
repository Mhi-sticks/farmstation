const username = document.querySelector("#username").value;
const password = document.querySelector("#password").value;

const form = document.querySelector("form"); // select the form element
const loginButton = form.querySelector(".login-btn"); // select the submit button

loginButton.addEventListener("click", (e) => {
  e.preventDefault(); // prevent the default form submission behavior

  const email = form.elements.username.value;
  const password = form.elements.password.value; // get the value of the password input field

  fetch("/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: email,
      password: password,
    }),
  }).then(resp => resp.json())
    .then((result) => {
      if ((result.message = "SUCCESS")) {
        // User authentication successful
        window.location.href = "/index.html";
        // save the token to local storage
      localStorage.setItem("token", data.token);
      // redirect the user to the profile page with the user object in the query string
    //   window.location.href = `/profile?username=${data.user.username}`;
    window.location.href = "/profile.html";
      window.location.href = `/profile?username=${data.user.username}`;
      } else {
        // User authentication failed
        console.log(result);
      }
    })
    .catch((error) => {
      console.error(error);
    });
});
