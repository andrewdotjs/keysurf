/**
* Formats time for clock and updates timer element's innerText.
* @param {Number} rawSeconds
* @return {void} Nothing
*/

const updateTime = (rawSeconds) => {
  let seconds = rawSeconds % 60;

  const minutes = Math.floor(rawSeconds / 60);
  seconds = seconds < 10 ? `0${seconds}` : seconds;
  document.getElementById('time').innerText = `${minutes}:${seconds}`;
}

module.exports = updateTime;