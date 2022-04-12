
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

// Play audio in embedded images
function main() {
  var imageURL = getImage(getPostImages());
  console.log(imageURL);

  var image = download(imageURL);
  console.log(image);

  var size = fileSize(image);
  console.log(size);

  var soundOffset;
  soundOffset = image.search("OggS");
  
  // If a a sound was not found
  if (soundOffset === -1
    || soundOffset === undefined
    || soundOffset === null) {
    // Exit
    return;
  }

  // Else if a sound was found
  if (soundOffset) {
    // Get the image offset
    var imageOffset = getImageOffset(image);
    
    // Retrieve the original image
    // The original image dimensions are 0 - imageOffset
    var unembeddedImage;

    // Retrieve the sound
    // The original sound's dimensions are imageOffset - size
    var sound;

    // Play the sound
    
  }
}

main();
