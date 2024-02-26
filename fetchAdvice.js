// Fetch random advice from Advice Slip JSON API

import axios from "axios";

let adviceNumber;
let advice;

async function fetchAdvice() {
  try {
    const response = await axios.get('https://api.adviceslip.com/advice');
    adviceNumber = response.data.slip.id;
    advice = response.data.slip.advice;
  } catch (error) {
    console.error(error);
  }
}

await fetchAdvice();

const response = [adviceNumber, advice];
export default response;