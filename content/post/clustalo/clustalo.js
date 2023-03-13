// Get references to HTML elements
const form = document.querySelector('#alignment-form');
const results = document.querySelector('#results');

// Handle form submission
form.addEventListener('submit', async (event) => {
  event.preventDefault();
  
  // Get form data
  const formData = new FormData(form);
  
  // Make API request
  const response = await fetch('https://www.ebi.ac.uk/Tools/services/rest/clustalo/run', {
    method: 'POST',
    body: formData,
  });
  
  // Parse response data
  const responseData = await response.text();
  
  // Update results section
  results.innerHTML = `<pre>${responseData}</pre>`;
});
  