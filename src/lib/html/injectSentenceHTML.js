/**
* Splits sentence into letter elements and pushes them into sentenceElement's innerHTML.
* @param {Element} sentenceElement
* @param {String} sentence
* @return {void} Nothing
*/

const injectSentenceHTML = (sentenceElement, sentence) => {
  for (let i = 0; i < sentence.length; i++) {
    sentenceElement.innerHTML += `<letter class="sentence-letter">${sentence[i]}</letter>`;
  }
}

module.exports = injectSentenceHTML;