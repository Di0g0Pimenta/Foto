document.addEventListener("DOMContentLoaded", function () {
  const overlayIcon = document.querySelector(".overlay-icon");
  const profileImage = document.getElementById("profileImage");

  if (overlayIcon) {
    overlayIcon.addEventListener("click", function () {
      redirectToCamera();
    });
  }

  const capturedImage = localStorage.getItem("capturedImage");

  if (capturedImage) {
    profileImage.src = capturedImage;
  } else {
    profileImage.src = "./assets/profile.svg";
  }
});

function redirectToCamera() {
  window.location.href = "./src/pages/camera/camera.html";
}
