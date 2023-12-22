// Main game process for Keysurf
// andrewdotjs

const createSentenceHTML = require("./lib/html/createSentenceHTML.js");
const incorrectInput = require("./lib/input/incorrectInput.js");
const updateTime = require("./lib/stats/updateTime.js");
const updateProgress = require("./lib/html/updateProgress.js");
const updateWPM = require("./lib/stats/updateWPM.js");
const updateCompletion = require("./lib/stats/updateCompletion.js");
const randomSentence = require("./lib/sentences/randomSentence.js");

let index = 0;
let secondsPassed = 1;

window.onload = () => {
  const sentenceBlock = document.getElementById("sentence");
  const input = document.getElementById("input");
  const sentence = randomSentence(); // Would like to replace this with a GET request to an external API to alleviate resource demands on client.

  createSentenceHTML(sentenceBlock, sentence);
  const letters = document.getElementsByClassName("sentence-letter");
  updateCompletion(index, sentence.length); 
  input.focus();

  const timerID = setInterval(() => {
    updateTime(secondsPassed);
    secondsPassed++;
  }, 1000);

  input.oninput = (event) => {
    switch (event.target.value) {
      case (sentence[index]):
        event.target.value = "";
        updateProgress(index, letters);
        updateCompletion(index, sentence.length);
        incorrectInput(false);
        
        index++;

        if (index === sentence.length) {
          clearInterval(timerID);
          updateWPM(secondsPassed, sentence);
        }
        
        break;
      case "":
        incorrectInput(false);
        break;
      default:
        incorrectInput(true);
        break;
    }
  }
}