<template>
  <div class="home">
    <div class="welcome-picture">
      <img
        src="https://cdn.pixabay.com/photo/2016/11/21/16/01/attractive-1846127_960_720.jpg"
        alt="fashion"
      />
    </div>
    <div class="new-collection">
      <h1>New Collection</h1>
      <div class="gallery">
        <img
          src="https://cdn.pixabay.com/photo/2019/06/22/05/29/tenderness-4290853_960_720.jpg"
          alt="tenderness"
        />
        <img
          src="https://cdn.pixabay.com/photo/2016/11/19/17/45/blur-1840538_960_720.jpg"
          alt="dress"
        />
        <img
          src="https://cdn.pixabay.com/photo/2016/11/16/10/27/girl-1828538_960_720.jpg"
          alt="girl"
        />
        <img
          src="https://cdn.pixabay.com/photo/2018/01/15/07/52/portrait-3083402_960_720.jpg"
          alt="portrait"
        />
      </div>
    </div>
    <div class="promotion">
      <h1>Check out our sales!</h1>
    </div>
    <div class="get-inspired">
      <h1>Get Inspired</h1>
      <div class="slider">
        <p>L</p>
        <img
          src="https://cdn.pixabay.com/photo/2016/10/16/12/28/mehndi-designs-1745048_960_720.jpg"
          alt="mehndi"
        />
        <p>P</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home"
};
</script>

<style lang="scss" scoped>
.home {
  .welcome-picture {
    img {
      width: 100%;
    }
  }
  .new-collection {
    padding: 0.5rem;
    .gallery {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      img {
        width: 49%;
        margin: 0.3rem 0;
      }
    }
  }
  .promotion {
    background: linear-gradient(to bottom, rgba(0, 6, 15, 0.6), rgba(0, 0, 0, 0.4)),
    url("https://cdn.pixabay.com/photo/2018/01/29/17/01/beautiful-3116587_960_720.jpg") ;
    // background-image: url();
    height:400px;
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
    h1{font-size: 3rem; color: #ddd;}
  }
  .get-inspired {
    .slider {
      display: flex;
      align-items: center;
      justify-content: center;
      img {
        width: 85%;
      }
    }
  }
}
</style>