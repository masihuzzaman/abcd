// script.js

document.addEventListener("DOMContentLoaded", function () {
  const lettersContainer = document.getElementById("letters-container");

  // Array of alphabet letters
  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

  // Create and append letter elements
  alphabet.forEach((letter) => {
    const letterElement = document.createElement("div");
    letterElement.classList.add("letter");
    letterElement.textContent = letter.toUpperCase();
    lettersContainer.appendChild(letterElement);

    // Add click event listener to each letter
    letterElement.addEventListener("click", function () {
      enlargeLetter(this);
      playLetterSound(letter);
      blinkCurrentLetter(this); // Call the blinkCurrentLetter function
      changeBackgroundColor(this);
      makeLetterBold(this); // Call the makeLetterBold function
    });
  });

  // Function to enlarge clicked letter
  function enlargeLetter(letterElement) {
    // Reset font size for all letters
    document.querySelectorAll(".letter").forEach((el) => {
      el.style.fontSize = "";
    });
    // Enlarge clicked letter
    letterElement.style.fontSize = "2em"; // Adjusted font size for smaller screens
    letterElement.style.fontWeight = "bold";
  }

  // Function to play letter sound
  function playLetterSound(letter) {
    const audio = document.getElementById("audio-letter");
    audio.src = `sounds/${letter}.mp3`;
    audio.play();
  }

  // Function to make only the current letter blink
  function blinkCurrentLetter(currentLetterElement) {
    // Remove blink class from all letters
    document.querySelectorAll(".letter").forEach((el) => {
      el.classList.remove("blink");
    });

    // Add blink class to the clicked letter
    currentLetterElement.classList.add("blink");

    setTimeout(function () {
      // Remove blink class after 1 second
      currentLetterElement.classList.remove("blink");
    }, 10000);
  }

  // Function to change background color to a random eye-soothing color
  function changeBackgroundColor(element) {
    const colors = ["#87CEEB", "#90EE90", "#FFB6C1", "#FFD700", "#ADD8E6"]; // Add more colors as needed
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    element.style.backgroundColor = randomColor;
  }
});
