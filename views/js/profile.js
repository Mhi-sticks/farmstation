

// handle the logout feature
fetch('/logout', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    }
  })
  .then((response) => {
    if(response.ok) {
      return response.text();
    } else {
      throw new Error('Something went wrong');
    }
  })
  .then((data) => {
    console.log(data); // should log "Logged out"
  })
  .catch((error) => {
    console.log(error);
  });


//   getting the username of the user in the profile page
  const urlSearchParams = new URLSearchParams(window.location.search);
const params = Object.fromEntries(urlSearchParams.entries());

const username = params.username;

// update the username element in the HTML
const usernameElement = document.getElementById('username');
usernameElement.textContent = username;