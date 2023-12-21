/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/***/ (() => {

eval("// This is the guts of the game\n\nwindow.onload = () => {\n  const sentenceBlock = document.getElementById('sentence');\n  const input = document.getElementById('input');\n  const sentence = \"This is a test sentence\";\n  let index = 0;\n  let seconds = 1;\n  \n  updateCompletion(index, sentence.length);\n\n  for (let i = 0; i < sentence.length; i++) {\n    sentenceBlock.innerHTML += `<letter class=\"sentence-letter\">${sentence[i]}</letter>`;\n  }\n\n  input.onkeyup = (event) => {\n    if (event.key === sentence[index]) {\n      event.target.value = \"\";\n      \n      updateProgress(index);\n      updateCompletion(index, sentence.length);\n      \n      index++;\n      \n      if (index === sentence.length) {\n        clearInterval(intervalID);\n        updateWPM(seconds, sentence);\n      }\n    }\n  }\n\n  const intervalID = setInterval(() => {\n    updateTime(seconds);\n    seconds++;\n  }, 1000);\n}\n\nconst updateProgress = (index) => {\n  const letters = document.getElementsByClassName(\"sentence-letter\");\n\n  for (let i = 0; i < index + 1; i++) {\n    letters[i].classList.add(\"complete\");\n  }\n}\n\nconst updateTime = (rawSeconds) => {\n  let seconds = rawSeconds % 60;\n\n  const minutes = Math.floor(rawSeconds / 60);\n  seconds = seconds < 10 ? `0${seconds}` : seconds;\n  document.getElementById('time').innerText = `${minutes}:${seconds}`;\n}\n\nconst updateCompletion = (index, length) => {\n  document.getElementById('completion').innerText = `${index + 1}/${length}`;\n}\n\nconst updateWPM = (seconds, sentence) => {\n  const wordCount = sentence.split(\" \").length;\n\n  console.log(wordCount);\n\n  document.getElementById('wpm').innerText = Math.floor(wordCount / (seconds / 60));\n}\n\n//# sourceURL=webpack://keysurf/./src/game.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/game.js"]();
/******/ 	
/******/ })()
;