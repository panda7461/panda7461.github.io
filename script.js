const startButton = document.getElementById("start");
const resultElement = document.getElementById("result");

// Check if SpeechRecognition is available
if (window.SpeechRecognition || window.webkitSpeechRecognition) {
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  const recognition = new SpeechRecognition();

  recognition.lang = "ja-JP"; // Set the language
  recognition.interimResults = false; // Set to true if you want interim results

  startButton.addEventListener("click", () => {
    recognition.start();
  });

  recognition.addEventListener("result", (event) => {
    const transcript = event.results[0][0].transcript;
    resultElement.textContent = transcript;
  });

  recognition.addEventListener("error", (event) => {
    console.error("Error occurred in recognition: " + event.error);
  });
} else {
  startButton.disabled = true;
  resultElement.textContent = "SpeechRecognition API not supported in this browser.";
}
