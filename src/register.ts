const registerForm = document.getElementById("registerForm") as HTMLFormElement;
const nameInput = document.getElementById("regName") as HTMLInputElement;
const emailInput = document.getElementById("regEmail") as HTMLInputElement;
const passwordInput = document.getElementById(
  "regPassword"
) as HTMLInputElement;

let emailError = document.getElementById("regEmailError") as HTMLDivElement;
let passwordError = document.getElementById(
  "regPasswordError"
) as HTMLDivElement;

if (!emailError) {
  emailError = document.createElement("div");
  emailError.id = "regEmailError";
  emailError.style.color = "red";
  emailError.style.fontSize = "0.95em";
  emailInput.insertAdjacentElement("afterend", emailError);
}
if (!passwordError) {
  passwordError = document.createElement("div");
  passwordError.id = "regPasswordError";
  passwordError.style.color = "red";
  passwordError.style.fontSize = "0.95em";
  passwordInput.insertAdjacentElement("afterend", passwordError);
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
function isValidPassword(password: string): boolean {
  return /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password);
}

emailInput.addEventListener("input", () => {
  if (!emailInput.value) {
    emailError.textContent = "";
  } else if (!isValidEmail(emailInput.value)) {
    emailError.textContent = "Email noto'g'ri kiritilgan!";
  } else {
    emailError.textContent = "";
  }
});


passwordInput.addEventListener("input", () => {
  if (!passwordInput.value) {
    passwordError.textContent = "";
  } else if (!isValidPassword(passwordInput.value)) {
    passwordError.textContent =
      "Parol kamida 8 ta belgidan iborat, kamida 1 ta harf va 1 ta raqam bo'lishi kerak!";
  } else {
    passwordError.textContent = "";
  }
});

registerForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const password = passwordInput.value;

  let valid = true;

  if (!name) {
    alert("Ismni kiriting!");
    nameInput.focus();
    valid = false;
  }

  if (!isValidEmail(email)) {
    emailError.textContent = "Email noto'g'ri kiritilgan!";
    emailInput.focus();
    valid = false;
  } else {
    emailError.textContent = "";
  }

  if (!isValidPassword(password)) {
    passwordError.textContent =
      "Parol kamida 8 ta belgidan iborat, kamida 1 ta harf va 1 ta raqam bo'lishi kerak!";
    passwordInput.focus();
    valid = false;
  } else {
    passwordError.textContent = "";
  }

  if (!valid) return;

  console.log({ name, email, password });
  alert("Ro'yxatdan muvaffaqiyatli o'tdingiz!");
registerForm.reset();
emailError.textContent = "";
passwordError.textContent = "";
});

const resetForm = document.getElementById("resetForm") as HTMLButtonElement;
if (resetForm) {
  resetForm.addEventListener("click", function () {
    registerForm.reset();
    emailError.textContent = "";
    passwordError.textContent = "";
    nameInput.focus();
  });
}