
// Get the post images
function getPostImages() {
	return document.querySelectorAll('[id="postImage"]');
}

// Get the url of the post image
function getImage(postImage) {
	return postImage[0]['src'];
}

// Get the actual file
function download(url) {
  var response;
  var request = new XMLHttpRequest();
  
  request.open("GET",url,false);
  request.send();

  if (request.readyState== 4 && request.status == 200) {
    response = request.responseText;
  }
  return response;
}

// Return the size of a file
function fileSize(file) {
  return file.length;
}

// Block execution for some time
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function getImageOffset(image) {
  var offset = 0;
  offset = image.search("PNG");
  if (offset == 0) {
    console.log("File type not found");
  }
  return offset;
}

function getSoundOffset(image) {
  // Get sound file offset
  var soundOffset;
  soundOffset = image.search("OggS");
  console.log(soundOffset);

  return soundOffset;
}

function retrieveImage() {
  var imageURL = getImage(getPostImages());
  console.log(imageURL);

  var image = download(imageURL);
  console.log(image);
  return image;
}

function parseSound(sound) {
  var audio = new Audio();
  audio.src = sound;
  audio.play();
  return audio;
}

function createPlayer(audio) {
  // Create the player
  var div = document.createElement('div');
  div.class = 'container';

  div.appendChild(audio);
  document.body.insertBefore(getImage(getPostImages()), div);
}

// Play audio in embedded images
function main() {
  var image = retrieveImage();
var size = fileSize(image);
  console.log(size);

  var soundOffset = getSoundOffset();
  
  // If a sound was not found
  if (soundOffset === -1
    || soundOffset === undefined
    || soundOffset === null) {
    // Exit
    return;
  }
  console.log("Sound was found");
  console.log(`Sound Offset: ${soundOffset}`);

  // Else if a sound was found
  if (soundOffset) {
    // Get the image offset
    var imageOffset = getImageOffset(image);
    console.log(`Image Offset: ${imageOffset}`);
    
    // Retrieve the original image
    // The original image dimensions are 0 - soundOffset
    var unembeddedImage = image.slice(0, soundOffset);

    // Retrieve the sound
    // The original sound's dimensions are soundOffset - size
    var sound = image.slice(soundOffset, size);

    var audio = parseSound(sound);

    // Create the audio player
    createPlayer(audio);
  }
}

main();
