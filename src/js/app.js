// Toggle VSL image

let video = document.getElementById("vsl")
let videoOverlay = document.querySelector('.image-banner__video')

videoOverlay.addEventListener("click", toggleMute = () => {
    video.muted = !video.muted;
    videoOverlay.classList.remove('imgOverlay')
});


