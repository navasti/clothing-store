<template>
  <div class="faq">
    <h1>FAQ</h1>
    <div class="question">
      <h2>1. Etiam consectetur sem vitae purus aliquam blandit id nec dui? </h2>
      <p>Quisque vel euismod risus. Morbi dictum, ante id commodo pellentesque, arcu tellus elementum urna, et efficitur enim eros in ante. Cras feugiat magna sit amet elit fringilla pretium. Mauris sit amet venenatis arcu. Vivamus at fringilla turpis. Etiam tempor risus ac ipsum semper elementum. Nulla facilisi. Vivamus vel metus id dui facilisis cursus.</p>
    </div>
    <div class="question">
      <h2>2. Cras sodales ante eget tristique ullamcorper? </h2>
      <p>Donec vitae suscipit diam, vel dignissim purus. Nam faucibus, tortor nec consectetur rhoncus, orci odio congue nisl, eget malesuada massa est vitae neque.</p>
    </div>
    <div class="question">
      <h2>3. Phasellus quis commodo nunc?</h2>
      <p>Donec vitae suscipit diam, vel dignissim purus. Nam faucibus, tortor nec consectetur rhoncus, orci odio congue nisl, eget malesuada massa est vitae neque. Morbi nibh nulla, rutrum nec ornare eu, luctus et nisl. Nam faucibus, tortor nec consectetur rhoncus, orci odio congue nisl, eget malesuada massa est vitae neque.</p>
    </div>
    <div class="question">
      <h2>4. Suspendisse tincidunt risus vulputate tempor sodales?</h2>
      <p>Pellentesque id purus sollicitudin quam ultrices elementum. Nulla volutpat tellus in urna fermentum, sit amet euismod enim blandit. Maecenas arcu tellus, eleifend ac pellentesque nec, lacinia ac turpis. Aenean dignissim eros sed tellus tristique, et posuere quam egestas. Phasellus at malesuada purus. Vestibulum ornare sapien mi, ac mattis eros tempus quis. Ut in odio magna. </p>
    </div>
    <div class="question">
      <h2>5. Fusce vitae urna vitae mauris lobortis hendrerit quis a nibh?</h2>
      <p>Pellentesque id purus sollicitudin quam ultrices elementum. Nulla volutpat tellus in urna fermentum, sit amet euismod enim blandit. Maecenas arcu tellus, eleifend ac pellentesque nec, lacinia ac turpis.</p>
    </div>
    <div class="new-question">
      <h2>Haven't found the answer?</h2>
      <p>Send us your question using form below</p>
      <form>
        <label for="username">Name</label>
        <input type="text" id="username">
        <label for="question">Question</label>
        <textarea name="question" id="question"></textarea>
        <button @click="sendQuestion">Send</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FAQ',
  methods: {
    sendQuestion(e){
      e.preventDefault();
    }
  },
}
</script>

<style lang="scss" scoped>
.faq{
  h1{text-align: center; font-size: 2.8rem; letter-spacing: 2px; margin: 2.5rem 0 1rem 0;}
  .question{
    padding: 1rem .7rem;
    line-height: 1.4;
    h2{font-size: 1.6rem;}
    p{font-size: 1.4rem; letter-spacing: 1px; text-align: justify; margin-top: .5rem; }
  }
  .new-question{
    margin-top: 2rem;
    padding: 0 1rem;
    h2{font-size: 1.8rem; letter-spacing: 1px; text-align: center;}
    p{font-size: 1.5rem; letter-spacing: 1px; text-align: center;}
    form{
      display: flex;
      flex-direction: column;
      width: 70%;
      margin: .5rem auto 0 auto;
      label{font-size: 1.6rem; padding: .7rem 0 .3rem 0;}
      input,
      textarea{padding: .4rem .8rem; font-size: 1.6rem;}
      button{text-transform: uppercase; padding: .5rem 1rem; font-size: 1.6rem; letter-spacing: 2px; background-color: #fff; border: 1px solid #aaa; margin-top: 1rem;}
    }
  }
}
</style>