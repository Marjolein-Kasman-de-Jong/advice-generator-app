// Display random advice from Advice Slip JSON API

import fetchAdvice from './fetchAdvice';

async function displayAdvice() {
  const advice = await fetchAdvice();
  if (advice) {
    // Display advice number
    const numberTarget = document.querySelector('h1');
    numberTarget.innerText = `advice #${advice[0]}`;
    // Display advice
    const adviceTarget = document.querySelector('blockquote');
    adviceTarget.innerText = `"${advice[1]}"`;
  } else {
    adviceTarget.innerText = "Kon advies niet ophalen.";
  }
}

// Roep displayAdvice() aan om het advies op te halen en weer te geven
displayAdvice();

// Display new advice when button is clicked
document.querySelector('button').addEventListener('click', () => {
  displayAdvice();
})