const url = " https://randomuser.me/api/ ";

let picture = document.getElementById("picture");
let fullname = document.getElementById("name");
let username = document.getElementById("username");
let email = document.getElementById("email");
let phone = document.getElementById("phone");
let country = document.getElementById("country");
let btn = document.getElementById("btn");

btn.addEventListener("click", function () {
  fetch(url)
    .then(handleErrors)
    .then(parseJSON)
    .then(updateProfile)
    .catch(printError);
});

function handleErrors(res) {
  if (!res.ok) {
    throw error(res.status);
  }
  console.log(res);
  return res;
}

function parseJSON(res) {
  return res.json();
}

function updateProfile(profile) {
  picture.src = profile.results[0].picture.medium;
  fullname.innerHTML =
    profile.results[0].name.first + " " + profile.results[0].name.last;
  username.innerHTML = profile.results[0].login.username;
  email.innerHTML = profile.results[0].email;
  phone.innerHTML = profile.results[0].phone;
  country.innerHTML = profile.results[0].location.country;
  return 1;
}

function printError(error) {
  console.log(error);
}
