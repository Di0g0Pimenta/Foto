document.addEventListener("DOMContentLoaded", function () {
  const overlayIcon = document.querySelector(".overlay-icon");
  const profileImage = document.getElementById("profileImage");

  if (overlayIcon) {
    overlayIcon.addEventListener("click", function () {
      redirectToCamera();
    });
  }

  // Verifique se há uma imagem capturada no localStorage
  const capturedImage = localStorage.getItem("capturedImage");

  // Se houver uma imagem capturada, defina como profile-image
  if (capturedImage) {
    profileImage.src = capturedImage;
  } else {
    // Se não houver uma imagem capturada, use uma imagem padrão
    profileImage.src = "./assets/profile.svg";
  }
});

function redirectToCamera() {
  window.location.href = "./src/pages/camera/camera.html";
}
