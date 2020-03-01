<template>
  <div class="shipping-returns">
      <h1>Shipping & Returns</h1>
      <div class="delivery">
        <h2>Delivery</h2>
        <div class="costs">
          <span>UK - $3.99</span>
          <span>EUROPE - $9.99</span>
          <span>REST OF THE WORLD - $29.99</span>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum id tortor nec justo interdum interdum nec sit amet arcu. Duis congue tristique arcu a venenatis. Proin eget justo at ligula vehicula venenatis. Proin dolor neque, interdum quis tincidunt at, placerat sit amet erat.</p>
        </div>
        <div class="returns">
          <h2>Returns</h2>
          <p>Nulla tincidunt dapibus mi, sed feugiat augue commodo quis. Donec facilisis iaculis nisi, congue bibendum ligula pulvinar id. Sed ut malesuada erat. Phasellus ornare nisi non nibh imperdiet vestibulum. Vivamus efficitur, justo et lacinia lacinia, leo nunc pharetra eros, non lobortis justo orci vitae velit. In posuere tincidunt justo in tristique. In leo odio, suscipit a nisl ut, convallis congue neque.</p>
        </div>
      </div>
  </div>
</template>

<script>
export default {
    name: 'ShippingReturns',
}
</script>

<style lang="scss" scoped>
.shipping-returns{
  padding: 0 .7rem;
  margin-bottom: 3rem;
  h1{text-align: center; font-size: 2.8rem; letter-spacing: 2px; margin: 2.5rem 0 1rem 0;}
  h2{font-size: 1.6rem; text-transform: uppercase; letter-spacing: 1px; padding: 1.5rem 0 .5rem 0;}
  p{font-size: 1.4rem; letter-spacing: 1px; text-align: justify; line-height: 1.4;}
  .costs{
    span{display: block; font-size: 1.4rem; padding: .3rem 0; letter-spacing: 1px;}
    p{margin-top: .5rem;}
  }
}

@media (min-width: 750px){
.shipping-returns{
  padding: 0 1.5rem;
  h1{font-size: 3.8rem; margin: 2.5rem 0 1rem 0;}
  h2{font-size: 2.6rem; letter-spacing: 1px; padding: 2rem 0 1rem 0;}
  p{font-size: 2.2rem; letter-spacing: 2px; line-height: 1.6;}
  .costs{
    span{font-size: 2.2rem; padding: .3rem 0; }
  }
}
}
</style>