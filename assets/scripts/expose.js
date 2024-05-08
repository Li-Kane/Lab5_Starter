// expose.js
window.addEventListener('DOMContentLoaded', init);

function init() {
  // Add event listener for the horn selection
  const select = document.getElementById('horn-select');
  select.addEventListener('change', updateImage);

  const jsConfetti = new JSConfetti();  // jsConfetti creates a canvas so only create it once
  // Add event listener for the play button
  const button = document.querySelector('button');
  button.addEventListener('click', ()=>{playSound(jsConfetti)});

  // Add event listener for the volume slider
  const slider = document.getElementById('volume');
  slider.addEventListener('input', adjustVolume);         // pass in volume to avoid multiple selects
}

function updateImage(event) {
  // Get the image and sound elements
  const image = document.querySelector('img');
  const sound = document.querySelector('audio');

  // Get the selected horn
  const horn = event.target.value;

  // Update the image and sound
  image.src = `assets/images/${horn}.svg`;
  sound.src = `assets/audio/${horn}.mp3`;
}

function playSound(jsConfetti) {
  // Get the sound element
  const sound = document.querySelector('audio');
  const select = document.getElementById('horn-select');
  console.log(select.value);

  // show confetti if party horn
  if(select.value == 'party-horn'){
    jsConfetti.addConfetti();
  }
  else if(select.value == 'select'){      // don't play a sound if nothing selected
    return;
  }

  // Play the sound
  sound.play();
}

function adjustVolume(event) {
  const volume = event.target.value;
  // select volume icon
  const images = document.querySelectorAll('img');
  const volumeIcon = images[1];
  // select audio
  const sound = document.querySelector('audio');

  // check which volume icon should be displayed
  if(volume == 0){
    volumeIcon.src = 'assets/icons/volume-level-0.svg';
  }
  else if(volume < 33){
    volumeIcon.src = 'assets/icons/volume-level-1.svg';
  }
  else if(volume < 67){
    volumeIcon.src = 'assets/icons/volume-level-2.svg';
  }
  else {
    volumeIcon.src = 'assets/icons/volume-level-3.svg';
  }

  // set volume
  sound.volume = volume / 100;
}