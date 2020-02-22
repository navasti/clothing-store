<template>
  <div class="cloths">
    <h1>Our Offer</h1>
    <div class="filter">
      <p>Categories</p>
      <div>
        <p>Filter</p>
        <p>Sort</p>
      </div>
    </div>
    <div class="products">
      <div class="item">
        <img src="https://cdn.pixabay.com/photo/2016/04/16/19/51/fashion-model-1333640_960_720.jpg" alt="fashion"/>
        <p>Description</p>
        <span>$39.99</span>
      </div>
     <div class="item">
        <img src="https://cdn.pixabay.com/photo/2020/02/05/11/06/portrait-4820889_960_720.jpg" alt="portrait"/>
        <p>Description</p>
        <span>$59.99</span>
     </div>
      <div class="item">
        <img src="https://cdn.pixabay.com/photo/2016/11/22/06/27/girl-1848473_960_720.jpg" alt="girl" />
        <p>Description</p>
        <span>$79.99</span>
      </div>
      <div class="item">
        <img src="https://cdn.pixabay.com/photo/2019/07/13/23/53/spring-equinox-4335941_960_720.jpg" alt="spring"/>
        <p>Description</p>
        <span>$54.99</span>
      </div>
    </div>
    <div class="load-more">Load More</div>
  </div>
</template>

<script>
export default {
  name: "Cloths"
};
</script>

<style lang="scss" scoped>
.cloths {
  h1 {
    font-size: 2.8rem;
    text-align: center;
  }
  .filter {
    display: flex;
    background-color: #ddd;
    justify-content: space-between;
    div {
      display: flex;
    }
    p {
      padding: 1rem;
      font-size: 1.8rem;
    }
  }
  .load-more {
    font-size: 1.6rem;
    text-transform: uppercase;
    border: 1px solid #222;
    width: 14rem;
    text-align: center;
    padding: 1rem;
    margin: 0 auto;
  }
}
</style>