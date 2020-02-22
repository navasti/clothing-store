<template>
  <div class="about">
    <h1>This is an about page</h1>
    <nav class="quick-nav">
      <p>Who</p>
      <p>Why</p>
      <p>Where</p>
    </nav>
    <div class="who">
      <h2>Who are we</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla libero magna, blandit nec ex eu, malesuada finibus lectus. Proin risus nisi, viverra eu placerat in, eleifend in quam. Praesent eget risus hendrerit enim ultricies ullamcorper. Aenean dictum ex ac lorem tincidunt pellentesque. Suspendisse id neque eu magna vulputate lacinia eu vel turpis. Aliquam dui leo, laoreet sit amet neque vel, sodales sagittis sapien. Sed tincidunt in est in porttitor. Aenean id risus vel magna scelerisque pharetra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Fusce blandit pretium purus, eu blandit massa fringilla eu. Mauris ut elit dolor. Cras eleifend nibh id varius suscipit. Nunc sit amet purus scelerisque augue fermentum semper ac vulputate neque. Nunc lobortis lorem nisi, quis venenatis nunc accumsan quis.</p>
    </div>
    <div class="why">
      <h2>Why us</h2>
      <p>Etiam maximus, turpis sed ultricies vehicula, libero risus porta felis, vitae eleifend velit nunc a metus. Nullam in malesuada leo. Nam gravida et nisl sit amet laoreet. Nunc sagittis odio erat, in eleifend velit sagittis nec. Vestibulum condimentum et nisi vel hendrerit. Phasellus vel velit vel tortor feugiat sollicitudin sit amet vel massa. Phasellus aliquam faucibus lectus id dapibus. Nullam vel faucibus diam. Nunc volutpat feugiat enim, vitae congue quam rutrum quis. Nunc ut massa purus. Morbi iaculis purus tellus, id ultricies tellus facilisis vel. Etiam varius eros iaculis feugiat vestibulum. Suspendisse pretium erat accumsan, porta est sit amet, tincidunt ligula.</p>
    </div>
    <div class="where">
      <h2>Where are we placed</h2>
        <div class="location">
          <font-awesome-icon icon="map-marked-alt" />
          <div>
            <p>Trafalgar Square,</p>
            <p>GV5C+6C, London,</p>
            <p>Great Britain</p>
          </div>
        </div>
        <div class="contact">
          <h3>Contact Us</h3>
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
      <p>map</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'About',
}
</script>

<style lang="scss" scoped>
.about{
  h1{font-size:  2.8rem; text-align: center; margin: 1rem 0;}
  svg{font-size: 2rem; margin-right: 1rem;}
  h2{font-size: 2.2rem;}
  p{font-size: 1.6rem; line-height: 1.4; text-align: justify; letter-spacing: 1px;}
  .quick-nav{
    background-color: #ddd;
    display: flex;
    justify-content: space-around;
    border-top: 1px solid #222;
    border-bottom: 1px solid #222;
    p{
      font-size: 1.6rem;
      text-transform: uppercase;
      padding: 1rem;
    }
  }
  .who,
  .where,
  .why{
    padding: 1.5rem 1rem;
  }
  .where{
    h3{font-size: 2rem; margin-top: 1rem;}
    .location{
      display: flex;
      align-items: center;
    }
    .contact{
      .tele,
      .mail{display: flex;}
    }
  }
  .map{
    background-color: #444;
    height: 30rem;
    color: #fff;
  }
}
</style>
