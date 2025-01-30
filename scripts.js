const form = document.getElementById('form');

form.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent default form submission

  const formData = new FormData(form);
  let formDataString = '';

  for (const [key, value] of formData.entries()) {
    formDataString += `${key}: ${value}\n`;
  }

  alert('Form submitted with the following data:\n\n' + formDataString);
});
