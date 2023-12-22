/**
* Calculates WPM and updates the given element's innerText.
* @param {Number} seconds
* @param {String} sentence
* @return {void} Nothing
*/

const updateWPM = (seconds, sentence) => {
  const wordCount = sentence.split(" ").length;
  document.getElementById('wpm').innerText = Math.floor(wordCount / (seconds / 60));
}

module.exports = updateWPM;