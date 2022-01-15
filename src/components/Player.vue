<template>
  <div class="parent">
    <div class="video-container">    
      <video ref="videoPlayer"  class="video-js vjs-big-play-centered vjs-16-9" data-setup='{ "playbackRates": [1, 1.5, 2] }'></video>
    </div>
  </div>
</template>

<script>

import videojs from "video.js";
import 'videojs-resolution-switcher-webpack/lib/videojs-resolution-switcher.js';
import 'videojs-mobile-ui/dist/videojs-mobile-ui.css';
import 'videojs-mobile-ui';
import 'video.js/dist/video-js.css';
import 'videojs-resolution-switcher-webpack/lib/videojs-resolution-switcher.css';

export default {
  computed: {
    windowWidth(){
      return window.innerWidth;
    },
    options() {
      return {
        autoplay: true,
        controls: true,
        sources: [
          {
            src: `http://168.182.242.231:27015/videos/video/${this.vidName}_480p`,
            type: "video/mp4",
            label: 'SD'
          },
          {
            src: `http://168.182.242.231:27015/videos/video/${this.vidName}_720p`,
            type: "video/mp4",
            label: 'HD'
          },
          {
            src: `http://168.182.242.231:27015/videos/video/${this.vidName}_1080p`,
            type: "video/mp4",
            label: 'FHD'
          },
        ],
        plugins: {
        videoJsResolutionSwitcher: {
          default: 'high',
          dynamicLabel: true
        }
      }    
      };
    },
  },
  data() {
    return {
      vidName: "",
      player: null,
    };
  },
  mounted() {
    this.vidName = this.$route.params.id;    
    this.player = videojs(
      this.$refs.videoPlayer,
      this.options,
      function onPlayerReady() {
        console.log("onPlayerReady", this);
      }
    );
    this.player.mobileUi();
  },
  beforeDestroy() {
    if (this.player) {
      this.player.dispose();
    }
  },
};
</script>


<style>
  
  .video-container {    
    position: relative;
    max-width: 1280px;
    max-height: 720px;
    margin: 0 auto;
  }

  .vjs-menu li {  
    text-transform: unset !important;
  }


  .video-js.vjs-fullscreen.vjs-user-inactive {
    cursor: unset !important;
  }

</style>

