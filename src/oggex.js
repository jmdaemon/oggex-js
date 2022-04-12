

// If on anonpone
// Get post images
// Check if post image has sounds

// Anonpone

// Get the post images
function getPostImages() {
	return document.querySelectorAll('[id="postImage"]');
}

// Get the url of the post image
function getImage(postImage) {
	return postImage[0]['src'];
}

function downloadImage(url) {
  var response;
  var request = new XMLHttpRequest();
  request.open("GET",url,true);
  request.send();

  request.onreadystatechange =
    function() {
      if (request.readyState== 4
          && request.status == 200) {
              response = request.responseText;
          }
       }
  console.log(response);
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

function main() {
  var imageURL = getImage(getPostImages());
  console.log(imageURL);

  //var image = downloadImage(imageURL);
  var response;
  var request = new XMLHttpRequest();
  request.open("GET",imageURL,true);
  request.send();

  request.onreadystatechange =
    function() {
      if (request.readyState== 4
          && request.status == 200) {
              response = request.responseText;
          }
       }
  console.log(response);
  console.log(image);
  var size = fileSize(image);
  return size;
}

main();
