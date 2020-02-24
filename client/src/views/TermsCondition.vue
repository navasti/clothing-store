<template>
  <div class="terms-condition">
      <h1>Terms & Condition</h1>
      <div class="use-terms">
        <h2>Terms of use</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum id tortor nec justo interdum interdum nec sit amet arcu. Duis congue tristique arcu a venenatis. Proin eget justo at ligula vehicula venenatis. Proin dolor neque, interdum quis tincidunt at, placerat sit amet erat.</p>
      </div>
      <div class="sale-terms">
        <h2>Terms of sale</h2>
        <p>Nulla tincidunt dapibus mi, sed feugiat augue commodo quis. Donec facilisis iaculis nisi, congue bibendum ligula pulvinar id. Sed ut malesuada erat. Phasellus ornare nisi non nibh imperdiet vestibulum. Vivamus efficitur, justo et lacinia lacinia, leo nunc pharetra eros, non lobortis justo orci vitae velit. In posuere tincidunt justo in tristique. In leo odio, suscipit a nisl ut, convallis congue neque. Nam pellentesque faucibus leo et rhoncus. Vestibulum tincidunt turpis dui, a vehicula lacus accumsan at. Sed vel turpis quam. Aliquam tempus risus nisi, sed finibus dui cursus sed.</p>
      </div>
      <div class="security-terms">
        <h2>Security & Privacy</h2>
        <p>Vivamus consectetur, elit in rhoncus egestas, nisl risus dictum odio, vitae vestibulum nunc risus non felis. Phasellus semper eget libero a efficitur. Integer ullamcorper tristique suscipit. Donec dignissim orci justo, a condimentum nunc maximus id. Morbi rutrum vel dolor nec porttitor. Nullam sollicitudin lacus est, vel gravida tellus fermentum ut. Sed eleifend, velit ut varius tincidunt, purus risus semper nisl, at feugiat nisl ex nec dolor. Phasellus varius convallis eros nec bibendum. Vivamus in turpis nec erat fringilla congue. Vivamus eros risus, pulvinar nec rutrum vel, finibus ut enim. Vivamus efficitur, justo et lacinia lacinia, leo nunc pharetra eros, non lobortis justo orci vitae velit. Sed vel turpis quam. Aliquam tempus risus nisi, sed finibus dui cursus sed. Nam pellentesque faucibus leo et rhoncus.</p>
      </div>
  </div>
</template>

<script>
export default {
    name: 'TermsCondition',
}
</script>

<style lang="scss" scoped>
.terms-condition{
  padding: 0 .7rem;
  h1{text-align: center; font-size: 2.8rem; letter-spacing: 2px; margin: 2.5rem 0 1.5rem 0;}
  h2{font-size: 1.6rem; text-transform: uppercase; letter-spacing: 1px; padding: 1.5rem 0 .5rem 0;}
  p{font-size: 1.4rem; letter-spacing: 1px; text-align: justify; line-height: 1.4;}
  .use-terms,
  .sale-terms{
    margin-bottom: 1rem;
  }
}
</style>