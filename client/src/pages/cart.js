import React from 'react'

const Cart = () => {
    return (
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
    )
}

export default Cart
