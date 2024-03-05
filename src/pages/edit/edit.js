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
    // Obtenha a imagem capturada
    var capturedImage = document.getElementById("capturedImage");
  
    // Crie um canvas temporário com as dimensões desejadas
    var canvas = document.createElement("canvas");
    canvas.width = 400;
    canvas.height = 400;
  
    // Obtenha o contexto 2D do canvas
    var context = canvas.getContext("2d");
  
    // Desenhe a imagem no canvas com as dimensões e borda arredondada desejadas
    context.drawImage(capturedImage, 0, 0, 400, 400);
  
    // Adicione a borda arredondada
    context.beginPath();
    context.arc(200, 200, 200, 0, 2 * Math.PI);
    context.closePath();
    context.clip();
  
    // Desenhe a imagem no canvas novamente (agora com borda arredondada)
    context.drawImage(capturedImage, 0, 0, 400, 400);
  
    // Converta o canvas para formato base64
    var imageDataUrl = canvas.toDataURL();
  
    // Salve a imagem no localStorage
    localStorage.setItem("capturedImage", imageDataUrl);
  
    // Redirecione para outra página, se necessário
    window.location.href = "/index.html";
  }
