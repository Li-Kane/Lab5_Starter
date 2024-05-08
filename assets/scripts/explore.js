// explore.js
window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  const synth = window.speechSynthesis;
  // wait 1s since getVoices needs more loading past initial DOM?
  setTimeout(() => {
    populateVoiceList(synth);
  }, 1000);
  const talkBtn = document.querySelector('button');
  talkBtn.addEventListener('click', () => {handleTalk(synth)});
}

// from api tutorial, populate list with available voices
function populateVoiceList(synth) {
  const voiceSelect = document.querySelector("select");
  let voices = synth.getVoices();

  for (let i = 0; i < voices.length; i++) {
    const option = document.createElement("option");
    option.textContent = `${voices[i].name} (${voices[i].lang})`;

    if (voices[i].default) {
      option.textContent += " — DEFAULT";
    }

    option.setAttribute("data-lang", voices[i].lang);
    option.setAttribute("data-name", voices[i].name);
    voiceSelect.appendChild(option);
  }
}

// have the face talk when the button is pressed
function handleTalk(synth) {
  const voiceSelect = document.querySelector("select");

  // get textinput words and load into our speech synthesizer
  const textContent = document.getElementById('text-to-speak');
  const text = textContent.value;
  const utterThis = new SpeechSynthesisUtterance(text);

  // find the voice that matches what we selected
  const selectedVoice = voiceSelect.selectedOptions[0].getAttribute("data-name");
  const voices = synth.getVoices();
  for (let i = 0; i < voices.length; i++) {
    if (voices[i].name === selectedVoice) {
      utterThis.voice = voices[i];
    }
  }
  synth.speak(utterThis);

  const smile = document.querySelector('img');
  smile.src = "assets/images/smiling-open.png"
  // Periodically check if there is still speaking
  const checkSpeaking = setInterval(() => {

    // Stop checking once synthesis is complete
    if (!synth.speaking) {
      clearInterval(checkSpeaking);
      smile.src = "assets/images/smiling.png"
    }
  }, 100); // Check every 100 milliseconds
}