//Update Timer
const timerElement = document.getElementById('timer');
setInterval(() => {
  const now = new Date();
  const timeString = now.toLocaleTimeString();
  timerElement.innerText = timeString;
}, 1000);

//Email Validation
function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

//Form Submission and Validation
function submitingForm() {
  const form = document.getElementById('employeeForm');
  const formData = new FormData(form);
  const data = {};

  for (const [key, value] of formData.entries()) {
    data[key] = value;
  }
   // Validating email
   const emailInput = document.getElementById('email');
   const emailValue = emailInput.value.trim();

   if (!validateEmail(emailValue)) {
     alert('Please enter your valid email address.');
     return;
   }

  const outputTextArea = document.getElementById('output');
  outputTextArea.value = JSON.stringify(data, null, 2);
}


