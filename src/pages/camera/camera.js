function setVideoSize() {
    var video = document.getElementById('videoElement');
    var aspectRatio = video.videoWidth / video.videoHeight;

    if (window.innerWidth / window.innerHeight > aspectRatio) {
        video.style.width = '100%';
        video.style.height = 'auto';
    } else {
        video.style.width = 'auto';
        video.style.height = '100%';
    }
}

navigator.mediaDevices.getUserMedia({ video: true })
    .then(function (stream) {
        var video = document.getElementById('videoElement');
        video.srcObject = stream;
        video.addEventListener('loadedmetadata', setVideoSize);
    })
    .catch(function (error) {
        console.log("Error al acceder a la cámara: " + error.message);
    });

window.addEventListener('resize', setVideoSize);