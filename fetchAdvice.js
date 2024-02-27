// Fetch random advice from Advice Slip JSON API

import axios from "axios";

let adviceNumber;
let advice;

async function fetchAdvice() {
  try {
    const fetchedResponse = await axios.get('https://api.adviceslip.com/advice');
    adviceNumber = fetchedResponse.data.slip.id;
    advice = fetchedResponse.data.slip.advice;
    return [adviceNumber, advice];
  } catch (error) {
    console.error(error);
    return null;
  }
}

export default fetchAdvice;