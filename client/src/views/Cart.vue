<template>
  <div class="cart">
    <h1>Cart</h1>
    <div class="progress">
      <div class="order active">
        <div><span>1</span></div>
        <p>Order</p>
      </div>
      <div class="line"></div>
      <div class="delivery">
        <div><span>2</span></div>
        <p>Delivery</p>
      </div>
      <div class="line"></div>
      <div class="payment">
        <div><span>3</span></div>
        <p>Payment</p>
      </div>
    </div>
    <div class="in-cart">
      <div class="entities">
        <p>Product</p>
        <div>
          <p>Qty</p>
          <p>Unit</p>
          <p>Subtotal</p>
        </div>
      </div>
      <div class="item">
        <div class="about-item">
          <img src="https://cdn.pixabay.com/photo/2016/11/22/06/27/girl-1848473_960_720.jpg" alt="girl" />
          <div class="description">
            <p>Description</p>
            <p>Color</p>
            <p>Size</p>
          </div>
        </div>
        <div class="amounts">
          <div class="qty">1</div>
          <div class="unit">$19.99</div>
          <div class="subtotal">$19.99</div>
         </div>
      </div>
      <div class="item">
        <div class="about-item">
          <img src="https://cdn.pixabay.com/photo/2016/04/16/19/51/fashion-model-1333640_960_720.jpg" alt="fashion"/>
          <div class="description">
            <p>Description</p>
            <p>Color</p>
            <p>Size</p>
          </div>
        </div>
        <div class="amounts">
          <div class="qty">1</div>
          <div class="unit">$19.99</div>
          <div class="subtotal">$19.99</div>
         </div>
      </div>
      <div class="total">
        <div>
          <p>Total to pay: <span>$39.98</span></p>
          <div class="place-order">Place Order</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Cart',
}
</script>

<style lang="scss" scoped>
.cart{
  h1{font-size: 2.8rem; text-align: center;  margin: 3rem 0;}
  .progress{
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 5rem;
    .order,
    .delivery,
    .payment{
      &.active{
        background-color: #000;
        color: #fff;
        border-radius: 50%;
      }
      position: relative;
      p{
        position: absolute;
        left: 50%; bottom: -2rem;
        transform: translateX(-50%);
        font-size: 1.5rem;
        color: #000;
      }
      span{font-size: 2rem;  margin-left: .1rem;}
      div{
        border: 1px solid black;
        border-radius: 50%;
        width: 4rem; height: 4rem;
        line-height: 3.8rem;
        text-align: center;
      }
    }
    .line{
      background-color: #222;
      width: 5rem; height: 2px;
    }
  }
  .in-cart{
    .entities{
      display: flex;
      justify-content: space-between;
      border-bottom: 1px solid #000;
      padding: .5rem;
      p{font-size: 1.8rem;}
      div{display: flex; flex-basis: 50%; justify-content: space-between;}
    }
    .item{
       display: flex;
       padding: .5rem;
       justify-content: space-between;
       border-bottom: 1px solid rgba(0,0,0,.4);
      .about-item{
       flex-basis: 30%;
       display: flex;
       align-items: center;
        img{width: 70%;}
        .description{
          padding: 1rem .5rem;
          font-size: 1.5rem;
        }
      }
      .amounts{
        display: flex; 
        flex-basis: 50%; 
        justify-content: space-between;
        align-items: center;
        padding-left: 1rem;
        font-size: 1.6rem;
      }
    }
  }
  .total{
    display: flex;
    justify-content: flex-end;
    margin: 2rem .5rem 1rem .5rem;
    p{
      font-size: 1.8rem;
    }
    .place-order{
      border: 1px solid black;
      text-align: center;
      padding: .5rem 1rem;
      font-size: 1.8rem;
      margin-top: .5rem;
      letter-spacing: 1px;
    }
  }
}
</style>