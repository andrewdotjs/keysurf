/**
* Updates the letter element's colors per index in array.
* @param {Number} index
* @param {Array} lettersArray
* @return {void} Nothing
*/

const updateProgress = (index, lettersArray) => {
  lettersArray[index].classList.add("complete");
}

module.exports = updateProgress;