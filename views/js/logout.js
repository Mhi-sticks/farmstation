const form = document.querySelector("form"); // select the form element
const logoutButton = form.querySelector(".logout-btn"); // select the submit button

logoutButton.addEventListener("click", (e) => {
  e.preventDefault(); // prevent the default form submission behavior

  fetch("/logout", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify({
      ...user
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
