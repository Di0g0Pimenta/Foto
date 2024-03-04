document.addEventListener('DOMContentLoaded', function () {
  // Your code goes here
  const overlayIcon = document.querySelector('.overlay-icon');

  if (overlayIcon) {
    overlayIcon.addEventListener('click', function () {
      // Redirect to another page
      window.location.href = './src/pages/camera/camra.html';
    });
  }
});