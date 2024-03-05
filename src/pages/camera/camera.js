function setVideoSize() {
  var video = document.getElementById("videoElement");
  var aspectRatio = video.videoWidth / video.videoHeight;

  if (window.innerWidth / window.innerHeight > aspectRatio) {
    video.style.width = "100%";
    video.style.height = "auto";
  } else {
    video.style.width = "auto";
    video.style.height = "100%";
  }
}

navigator.mediaDevices
  .getUserMedia({ video: true })
  .then(function (stream) {
    var video = document.getElementById("videoElement");
    video.srcObject = stream;
    video.addEventListener("loadedmetadata", setVideoSize);
  })
  .catch(function (error) {
    console.log("Error al acceder a la cámara: " + error.message);
  });

window.addEventListener("resize", setVideoSize);

function redirectToAnotherPage() {
  window.location.href = "/index.html";
}

document.addEventListener("DOMContentLoaded", function () {
  const cameraButton = document.querySelector(".camera-button");

  if (cameraButton) {
    cameraButton.addEventListener("click", function () {
      takePhoto();
    });
  }
});

function takePhoto() {
  var canvas = document.createElement("canvas");
  var video = document.getElementById("videoElement");
  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;
  var context = canvas.getContext("2d");
  context.drawImage(video, 0, 0, canvas.width, canvas.height);

  var imageDataUrl = canvas.toDataURL();
  localStorage.setItem("capturedImage", imageDataUrl);
  window.location.href = "../edit/edit.html";
}
