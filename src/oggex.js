
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

function retrieveImage() {
  var imageURL = getImage(getPostImages());
  console.log(imageURL);

  var image = download(imageURL);
  console.log(image);
  return image;
}

// Play audio in embedded images
function main() {
  var image = retrieveImage();

  var size = fileSize(image);
  console.log(size);

  // Get sound file offset
  var soundOffset;
  soundOffset = image.search("OggS");
  console.log(soundOffset);
  
  // If a a sound was not found
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
    var unembeddedImage = image.slice(0, imageOffset);

    // Retrieve the sound
    // The original sound's dimensions are soundOffset - size
    var sound = image.slice(soundOffset, size);

    // Create the audio player

    // Parse the sound
    var audio = new Audio();
    audio.src = sound;

    // Create the player
    var div = document.createElement('div');
    div.class = 'container';

    // Create video
    var video = document.createElement('video');
    video.id = 'audio01';
    video.autoplay = '';
    video.controls  = '';

    // Add the video to the player
    div.appendChild(video);
    document.body.insertBefore(getImage(getPostImages()), div);

    audio.play();
  }
}

main();
