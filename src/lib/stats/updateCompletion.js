/**
* Calculates completion of current game session as a percentage and update the element's innerText.
* @param {Number} index
* @param {Number} length
* @return {void} Nothing
*/

const updateCompletion = (index, length) => {
  const percentage = ((index + 1) / length) * 100;
  document.getElementById('completion').innerText = `${percentage.toFixed(0)}%`;
}

module.exports = updateCompletion;