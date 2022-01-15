<template>
<div>
  <Video :videoList="videos"/>
</div>
</template>

<script>
import Video from "@/components/Video.vue"
export default {
    components: {
        Video
    },
    head: {
        title: "Home"
    },
    data() {
        return {
            videos: []
        }
    },
    methods: {
        async fetch() {
            this.videos = await fetch(
            'http://168.182.242.231:27015/videos'
            ).then(res => res.json())
        }
    },
    mounted(){
        this.fetch();
    }
}
</script>