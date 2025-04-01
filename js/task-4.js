const form = document.querySelector("form.login-form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = e.target.elements.email;
  const password = e.target.elements.password;
  if (!email.value.trim() || !password.value.trim()) {
    alert("All form fields must be filled in");
  } else {
    const user = {
      email: email.value.trim(),
      password: password.value.trim(),
    };
    console.log(user);
    form.reset();
  }
});
