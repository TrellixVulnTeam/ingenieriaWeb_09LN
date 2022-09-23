<template>
  <b-carousel
   id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      background="#ababab"
      img-width="1024"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
  >
    <b-carousel-slide 
      caption="First Slide"
      img-src="https://picsum.photos/1024/480/?image=10"
    ></b-carousel-slide>


</b-carousel> 
     

</template>

<script>
  export default {
    data() {
      return {
        slide: 0,
        sliding: null,
        images:[
        { id:1,
          src:"https://picsum.photos/1024/480/?image=10",
          titulo:"Titulo de la imagen"
        },
        { id:2,
          src:"https://picsum.photos/1024/480/?image=10",
          titulo:"Titulo de la imagen"

        },
        { id:3,
          src:"https://picsum.photos/1024/480/?image=10",
          titulo:"Titulo de la imagen"

        }

        ]
      }
    },
    methods: {
      onSlideStart(slide) {
        this.sliding = true
      },
      onSlideEnd(slide) {
        this.sliding = false
      }
    }
  }
</script>