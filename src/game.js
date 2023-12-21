// This is the guts of the game

window.onload = () => {
  const sentenceBlock = document.getElementById('sentence');
  const input = document.getElementById('input');
  const sentence = "This is a test sentence";
  let index = 0;
  let seconds = 1;
  
  updateCompletion(index, sentence.length);

  for (let i = 0; i < sentence.length; i++) {
    sentenceBlock.innerHTML += `<letter class="sentence-letter">${sentence[i]}</letter>`;
  }

  input.onkeyup = (event) => {
    if (event.key === sentence[index]) {
      event.target.value = "";
      
      updateProgress(index);
      updateCompletion(index, sentence.length);
      
      index++;
      
      if (index === sentence.length) {
        clearInterval(intervalID);
        updateWPM(seconds, sentence);
      }
    }
  }

  const intervalID = setInterval(() => {
    updateTime(seconds);
    seconds++;
  }, 1000);
}

const updateProgress = (index) => {
  const letters = document.getElementsByClassName("sentence-letter");

  for (let i = 0; i < index + 1; i++) {
    letters[i].classList.add("complete");
  }
}

const updateTime = (rawSeconds) => {
  let seconds = rawSeconds % 60;

  const minutes = Math.floor(rawSeconds / 60);
  seconds = seconds < 10 ? `0${seconds}` : seconds;
  document.getElementById('time').innerText = `${minutes}:${seconds}`;
}

const updateCompletion = (index, length) => {
  document.getElementById('completion').innerText = `${index + 1}/${length}`;
}

const updateWPM = (seconds, sentence) => {
  const wordCount = sentence.split(" ").length;

  console.log(wordCount);

  document.getElementById('wpm').innerText = Math.floor(wordCount / (seconds / 60));
}