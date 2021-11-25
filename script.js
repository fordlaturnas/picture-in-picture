const button = document.getElementById('button');
const reload = document.getElementById('reload');
const videElement = document.getElementById('video');

// Prompt to select media stream, pass to video element, then play
async function selectMediaStream() {
  try {
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();
    videElement.srcObject = mediaStream;
    videElement.onloadedmetadata = () => {
      videElement.play();
    };
  } catch (error) {
    console.log('whoops, error here:', error);
  }
}

button.addEventListener('click', async () => {
  //Disable Button
  button.disabled = true;
  // Start Picture and Picture
  await videElement.requestPictureInPicture();
  // Reset Button
  button.disabled = false;
});

reload.addEventListener('click', () => {
  location.reload();
});

//On Load
selectMediaStream();
