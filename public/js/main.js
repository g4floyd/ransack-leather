
document.getElementById('email-form').addEventListener('submit', function(event) {
event.preventDefault();

var email = document.getElementById('email').value;

function writeUserData(email) {
  firebase.database().ref('emails/').push({
    email: email,
  });
}
  writeUserData(email);

})
