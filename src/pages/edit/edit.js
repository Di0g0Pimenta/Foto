document.addEventListener("DOMContentLoaded", function () {
  var capturedImage = document.getElementById("capturedImage");
  capturedImage.src = localStorage.getItem("capturedImage");

  var saveButton = document.querySelector(".save");
  if (saveButton) {
    saveButton.addEventListener("click", function () {
      saveFunction();
    });
  }

  var cancelButton = document.querySelector(".cancel");
  if (cancelButton) {
    cancelButton.addEventListener("click", function () {
      cancelFunction();
    });
  }
});

function cancelFunction() {
  window.location.href = "../camera/camera.html";
}

function saveFunction() {
    var capturedImage = document.getElementById("capturedImage");
  
    var canvas = document.createElement("canvas");
    canvas.width = 400;
    canvas.height = 400;
  
    var context = canvas.getContext("2d");
  
    context.drawImage(capturedImage, 0, 0, 400, 400);
  
    context.beginPath();
    context.arc(200, 200, 200, 0, 2 * Math.PI);
    context.closePath();
    context.clip();
  
    context.drawImage(capturedImage, 0, 0, 400, 400);
  
    var imageDataUrl = canvas.toDataURL();
  
    localStorage.setItem("capturedImage", imageDataUrl);
  
    window.location.href = "/index.html";
  }
