/**
* Updates the input element's colors depending on if the user gave incorrect input or not.
* @param {Boolean} bool
* @return {void} Nothing
*/

const incorrectInput = (bool) => {
  if (bool === true) {
    document.getElementById("input").classList.add("incorrect-input");
  } else {
    document.getElementById("input").classList.remove("incorrect-input");
  }
}

module.exports = incorrectInput;