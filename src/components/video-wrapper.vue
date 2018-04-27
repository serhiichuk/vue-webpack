<template>
  <transition name="show">
    <section id="video-wrapper" v-show="activeVideo">
      <div id="btn-video-close" @touchend="VIDEO_CLOSE"></div>
      <video id="video">
        <source :src="activeVideo" type="video/mp4">
      </video>
    </section>
  </transition>
</template>

<script>
  import {mapMutations, mapState} from 'vuex'

  export default {
    name: "video-wrapper",
    computed: {
      ...mapState(['activeVideo']),
    },
    methods: {
      ...mapMutations(['VIDEO_CLOSE']),
    },
    watch: {
      activeVideo() {
        // Async hook because video is undefined in first call
        setTimeout(() => {
          const video = document.getElementById('video');

          if (this.activeVideo) {
            video.load();
            video.play();
          } else {
            video.pause();
          }
        }, 100)
      }
    }
  }
</script>

<style lang="scss" scoped>
  #video-wrapper {
    position: absolute;
    z-index: 100;
    top: 0;
    left: 0;

    width: 100%;
    height: 100%;
    background-color: #000;

    video {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  }

  #btn-video-close {
    position: absolute;
    top: 50px;
    right: 70px;
    z-index: 10;

    width: 100px;
    height: 100px;

    @include flexCentered;

    &:before, &:after {
      content: '';
      transform-origin: center;
      width: 2px;
      height: 60px;

      background-color: #fff;
    }

    &:before {
      transform: rotate(-45deg);
    }

    &:after {
      transform: rotate(45deg);
    }

    &:active {
      background-color: rgba(#999, .5);
    }
  }

  .show-enter-active, .show-leave-active {
    transition: opacity .4s, transform .4s;
  }

  .show-enter, .show-leave-to {
    opacity: 0;
    transform: scale(.8)
  }

  .show-enter-to, .show-leave {
    opacity: 1;
    transform: scale(1)
  }
</style>
