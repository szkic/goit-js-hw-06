const loginForm = document.querySelector(".login-form");

const submitForm = (e) => {
  e.preventDefault();

  const {
    elements: { email, password },
  } = e.currentTarget;

  if (email.value === "" || password.value === "") {
    alert("Proszę uzupełnić wsystkie pola");
  }

  console.log(`Email: ${email.value}, Password: ${password.value}`);

  e.currentTarget.reset();
};

loginForm.addEventListener("submit", submitForm);
