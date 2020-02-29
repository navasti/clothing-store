<template>
  <div class="about">
    <nav class="quick-nav">
      <a href="#who">Who</a>
      <a href="#why">Why</a>
      <a href="#where">Where</a>
    </nav>
    <div id="who">
      <h2>Who are we</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla libero magna, blandit nec ex eu, malesuada finibus lectus. Proin risus nisi, viverra eu placerat in, eleifend in quam. Praesent eget risus hendrerit enim ultricies ullamcorper. Aenean dictum ex ac lorem tincidunt pellentesque. Suspendisse id neque eu magna vulputate lacinia eu vel turpis. Aliquam dui leo, laoreet sit amet neque vel, sodales sagittis sapien. Sed tincidunt in est in porttitor. Aenean id risus vel magna scelerisque pharetra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Fusce blandit pretium purus, eu blandit massa fringilla eu. Mauris ut elit dolor. Cras eleifend nibh id varius suscipit. Nunc sit amet purus scelerisque augue fermentum semper ac vulputate neque. Nunc lobortis lorem nisi, quis venenatis nunc accumsan quis.</p>
    </div>
    <div id="why">
      <h2>Why us</h2>
      <p>Etiam maximus, turpis sed ultricies vehicula, libero risus porta felis, vitae eleifend velit nunc a metus. Nullam in malesuada leo. Nam gravida et nisl sit amet laoreet. Nunc sagittis odio erat, in eleifend velit sagittis nec. Vestibulum condimentum et nisi vel hendrerit. Phasellus vel velit vel tortor feugiat sollicitudin sit amet vel massa. Phasellus aliquam faucibus lectus id dapibus. Nullam vel faucibus diam. Nunc volutpat feugiat enim, vitae congue quam rutrum quis. Nunc ut massa purus. Morbi iaculis purus tellus, id ultricies tellus facilisis vel. Etiam varius eros iaculis feugiat vestibulum. Suspendisse pretium erat accumsan, porta est sit amet, tincidunt ligula.</p>
    </div>
    <div id="where">
      <h2>Where are we placed</h2>
        <div class="location">
          <font-awesome-icon icon="map-marked-alt" />
          <div>
            <p>Trafalgar Square,</p>
            <p>GV5C+6Q, London,</p>
            <p>Great Britain</p>
          </div>
        </div>
        <div class="contact">
          <h2>Contact Us</h2>
          <div class="tele">
            <font-awesome-icon icon="phone-alt" />
            <p>+44 7480728290</p>
          </div>
          <div class="mail">
             <font-awesome-icon icon="envelope" />
             <p>email@address.com</p>
          </div>
        </div>
    </div>
    <div class="map">
      <gmap-map :center="center" :zoom="7" style="width: 100%; height: 100%">
        <gmap-marker :key="index" v-for="(m, index) in markers" :position="m.position" :clickable="true" :draggable="true" @click="center=m.position"></gmap-marker>
      </gmap-map>
    </div>
  </div>
</template>

<script>
export default {
  name: 'About',
  data(){
    return{
      center: {lat: 51.5080593, lng: -0.1281717},
      markers: [{
        position: {lat: 51.5080593, lng: -0.1281717}
      }]
    }
  },
}
</script>

<style lang="scss" scoped>
.about{
  svg{font-size: 2rem; margin-right: 1rem;}
  h2{font-size: 2.2rem; margin-bottom: 1rem;}
  p{font-size: 1.6rem; line-height: 1.4; text-align: justify; letter-spacing: 1px;}
  .quick-nav{
    background-color: #ddd;
    margin: 2rem 0 1rem 0;
    display: flex;
    justify-content: space-around;
    border-top: 1px solid #222;
    border-bottom: 1px solid #222;
    a{
      font-size: 1.6rem;
      text-transform: uppercase;
      padding: 1rem;
      text-decoration: none;
      color: #000;
    }
  }
  #who,
  #where,
  #why{
    padding: 1.5rem .7rem;
  }
  #where{
    .location{
      display: flex;
      align-items: center;
    }
    .contact{
      .tele{margin-bottom: 1rem;}
      .tele,
      .mail{display: flex;}
      h2{font-size: 2rem; margin-top: 1rem;}
    }
  }
  .map{
    background-color: #444;
    height: 35rem;
    color: #fff;
  }
}

@media (min-width: 750px){
.about{
  svg{font-size: 2.6rem; margin-right: 2.5rem;}
  h2{font-size: 3.2rem; margin-bottom: 1rem;}
  p{font-size: 2.2rem; letter-spacing: 2px;}
  .quick-nav{margin: 2.5rem 0 1.5rem 0;
    a{font-size: 2.4rem; padding: 1.5rem;}
  }
  #who,
  #where,
  #why{padding: 1.5rem 1.5rem;}
  #where{.contact{h2{font-size: 2.8rem;}}}
  .map{height: 40rem;}
}
}
</style>
