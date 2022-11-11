const usersTable = [
  // Note: This is a fake table for educational purposes. Never store user credentials in plain text.

  // changed user.username to email
  {
    id: 1,
    email: "hello@world.com",
    password: "badpassword"
  },
  {
    id: 2,
    email: "test@user.com",
    password: "badpassword"
  },
  {
    id: 3,
    email: "email@domain.com",
    password: "badpassword"
  },
];
let renderSuccess = () => {
  document.getElementById("success-message").hidden = false;
};
let renderError = () => {
  document.getElementById("error-message").hidden = false;
};
let resetMessage = () => {
  document.getElementById("success-message").hidden = true;
  document.getElementById("error-message").hidden = true;
};

addEventListener("submit", (event) => {
  event.preventDefault();
  resetMessage();

  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  console.log(`email submitted: ${email}`);
  console.log(`password submitted: ${password}`);
  /*
    TODO:
    1. Check if the email and password are valid (using the usersTable)
    2. If they are, call renderSuccess()
    3. If they are not, call renderError()
   */
  usersTable.map((user, index) => {
    // error if user email not found
    if (email != user.email) return renderError()
    // error if password incorrect for user
    if (password != user.password) return renderError()

    renderSuccess()
  })



});