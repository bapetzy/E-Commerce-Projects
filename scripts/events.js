document.querySelector('.registration-form').addEventListener('submit', function(event) {
  event.preventDefault();

  let isValid = true;

  const fullname = document.getElementById('fullname').value.trim();
  const email = document.getElementById('email').value.trim();
  const dob = document.getElementById('dob').value.trim();
  const gender = document.querySelector('input[name="gender"]:checked');
  const terms = document.getElementById('terms').checked;

  if (fullname.length < 2) {
    alert("Full name must be at least 2 characters.");
    isValid = false;
  }

  if (!email.includes('@') || !email.includes('.')) {
    alert("Please enter a valid email address.");
    isValid = false;
  }

  const dobParts = dob.split('/');
  if (
    dobParts.length !== 3 ||
    isNaN(dobParts[0]) || isNaN(dobParts[1]) || isNaN(dobParts[2]) ||
    dobParts[0] < 1 || dobParts[0] > 31 ||
    dobParts[1] < 1 || dobParts[1] > 12 ||
    dobParts[2].length !== 4
  ) {
    alert("Please enter a valid date of birth in DD/MM/YYYY format.");
    isValid = false;
  }

  if (!gender) {
    alert("Please select your gender.");
    isValid = false;
  }

  if (!terms) {
    alert("You must agree to the terms and conditions.");
    isValid = false;
  }

  if (isValid) {
    alert("Registration successful!");
    // this.submit();
  }
});
