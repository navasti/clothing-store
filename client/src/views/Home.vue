<template>
  <div class="home">
    <div class="welcome-picture">
      <img src="https://cdn.pixabay.com/photo/2016/11/21/16/01/attractive-1846127_960_720.jpg" alt="fashion"/>
    </div>
    <div class="new-collection">
      <h1>New Collection</h1>
      <div class="gallery">
        <img src="https://cdn.pixabay.com/photo/2019/06/22/05/29/tenderness-4290853_960_720.jpg" alt="tenderness"/>
        <img src="https://cdn.pixabay.com/photo/2016/11/19/17/45/blur-1840538_960_720.jpg" alt="dress" />
        <img src="https://cdn.pixabay.com/photo/2016/11/16/10/27/girl-1828538_960_720.jpg" alt="girl"/>
        <img src="https://cdn.pixabay.com/photo/2018/01/15/07/52/portrait-3083402_960_720.jpg" alt="portrait"/>
      </div>
    </div>
    <div class="promotion">
      <h2>Get -20% for yor order</h2>
      <p>Use 'spring' promo code!</p>
    </div>
    <div class="get-inspired">
      <h1>Get Inspired</h1>
      <div class="slider">
        <div class="left" @click="previousSlide"><font-awesome-icon icon="chevron-left" /></div>
        <img src="https://cdn.pixabay.com/photo/2016/10/16/12/28/mehndi-designs-1745048_960_720.jpg" alt="mehndi"/>
        <div class="right" @click="nextSlide"><font-awesome-icon icon="chevron-right" /></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  methods: {
    nextSlide(){
    console.log('next')
    },
    previousSlide(){
      console.log('previous')
    },
  },
};
</script>

<style lang="scss" scoped>
.home {
  h1{font-size: 2rem; letter-spacing: 1px; margin-bottom: 1rem;}
  .welcome-picture {
    img {
      width: 100%;
    }
  }
  .new-collection {
    margin: 1.5rem 0 2rem 0;
    padding: .8rem;
    .gallery {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      img {
        width: 49%;
        margin: 0.4rem 0;
      }
    }
  }
  .promotion {
    background: linear-gradient(to bottom, rgba(0, 6, 15, 0.6), rgba(0, 0, 0, 0.4)),
    url("https://cdn.pixabay.com/photo/2018/01/29/17/01/beautiful-3116587_960_720.jpg") ;
    height:400px;
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-transform: uppercase;
    letter-spacing: 1px;
    h2{font-size: 2.2rem; color: #ddd; margin-bottom: 1.5rem;}
    p{font-size: 1.6rem; color: #ddd;}
  }
  .get-inspired {
    margin: 2.5rem 0;
    padding: 0 .8rem;
    h1{width: 70%; margin: 0 auto 1rem auto;}
    .slider {
      display: flex;
      align-items: center;
      justify-content: center;
      .left,
      .right{
        cursor: pointer;
        padding: .8rem;
        height: 10rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        svg{
          margin: 0 1.5rem;
          font-size: 2rem;
        }
      }
      img {
        width: 70%;
      }
    }
  }
}
@media (min-width: 750px){
.home {
  h1{font-size: 2.8rem; letter-spacing: 2px; margin-bottom: 1rem;}
  .new-collection {padding: 1rem;
    .gallery {img {margin: 0.5rem 0;}}
  }
  .promotion {
    letter-spacing: 2px;
    h2{font-size: 3.6rem; margin-bottom: 1.8rem;}
    p{font-size: 2.4rem;}
  }
  .get-inspired {
    h1{width: 55%;}
    .slider {
      .left,
      .right{ padding: 1.5rem;  height: 15rem;
        svg{font-size: 2.6rem;}
      }
      img{width: 55%;}
    }
  }
}
}
</style>