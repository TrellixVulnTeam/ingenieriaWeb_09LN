
<template>
<div>
  <b-carousel
    id="carousel-fade"
      v-model="slide"
      :interval="4000"
      controls
      background="#ababab"
      img-width="1024"
      img-height="480"
      label-next=""
      label-prev=""
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd" 
  >
    <b-carousel-slide 
      :caption=items.titulo v-for="items in images"
      :img-src=items.src
    ></b-carousel-slide>
  
  </b-carousel>
</div> 
</template>

<script>
  export default {
    data() {
      return {
        slide: 0,
        sliding: null,
        images:[
        {
          src:'https://picsum.photos/1024/480/?image=52',
          titulo:"Imagen 1"
        },
        {
          src:'https://picsum.photos/1024/480/?image=54',
          titulo:"Imagen 2"
        },
        {
          src:'https://picsum.photos/1024/480/?image=58',
          titulo:"Imagen 3"
        },


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