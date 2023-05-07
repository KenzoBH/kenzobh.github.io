
function toggle_mute(video) {
    if (video.muted) {
      video.muted = false;
      video.parentElement.classList.remove("muted");
      video.parentElement.classList.add("unmuted");
    } else {
      video.muted = true;
      video.parentElement.classList.remove("unmuted");
      video.parentElement.classList.add("muted");
    }
    const muteIcon = video.parentElement.querySelector(".mute_icon");
    muteIcon.style.opacity = 1;
    setTimeout(() => {
      muteIcon.style.opacity = 0;
    }, 1000);
  }