
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

// Play audio in embedded images
function main() {
  var imageURL = getImage(getPostImages());
  console.log(imageURL);

  var image = download(imageURL);
  console.log(image);

  var size = fileSize(image);
  console.log(size);
}

main();
