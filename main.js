import response from './fetchAdvice';

// Display advice number
const numberTarget = document.querySelector('h1');
numberTarget.innerText = `advice #${response[0]}`;

// Display advice
const adviceTarget = document.querySelector('blockquote');
adviceTarget.innerText = `"${response[1]}"`;

// Refresh page when button is clicked
document.querySelector('button').addEventListener('click', () => {
  location.reload();
})