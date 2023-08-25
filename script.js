// Load the YouTube IFrame API asynchronously
var tag = document.createElement("script");
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// Create an array to store player objects
var players = [];

// This function will be called when the API is ready
function onYouTubeIframeAPIReady() {
  var iframes = document.querySelectorAll(".video-grid iframe");
  iframes.forEach(function (iframe) {
    var player = new YT.Player(iframe, {
      events: {
        onReady: onPlayerReady,
      },
    });
    players.push(player);
  });
}

// This function will be called when each player is ready
function onPlayerReady(event) {
  // You can use the event parameter to control the player
  // For example, event.target.playVideo() to play the video
}

// Function to play all videos
function playAllVideos() {
  players.forEach(function (player) {
    player.playVideo();
  });
}

// Function to pause all videos
function pauseAllVideos() {
  players.forEach(function (player) {
    player.pauseVideo();
  });
}
