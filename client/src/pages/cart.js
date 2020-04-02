import React from 'react'

const Cart = () => {
    return (
    <div className="cart">
        <h1>Cart</h1>
        <div className="progress">
        <div className="order active">
            <div><span>1</span></div>
            <p>Order</p>
        </div>
        <div className="line"></div>
        <div className="delivery">
            <div><span>2</span></div>
            <p>Delivery</p>
        </div>
        <div className="line"></div>
        <div className="payment">
            <div><span>3</span></div>
            <p>Payment</p>
        </div>
        </div>
        <div className="in-cart">
        <div className="entities">
            <p>Product</p>
            <div>
                <p>Qty</p>
                <p>Unit</p>
                <p>Subtotal</p>
            </div>
        </div>
        <div className="item">
            <div className="about-item">
                <img src="https://cdn.pixabay.com/photo/2016/11/22/06/27/girl-1848473_960_720.jpg" alt="girl" />
                <div className="description">
                    <p>Description</p>
                    <p>Color</p>
                    <p>Size</p>
                </div>
            </div>
            <div className="amounts">
                <div className="qty">1</div>
                <div className="unit">$19.99</div>
                <div className="subtotal">$19.99</div>
            </div>
        </div>
        <div className="item">
            <div className="about-item">
                <img src="https://cdn.pixabay.com/photo/2016/04/16/19/51/fashion-model-1333640_960_720.jpg" alt="fashion"/>
                <div className="description">
                    <p>Description</p>
                    <p>Color</p>
                    <p>Size</p>
                </div>
            </div>
            <div className="amounts">
                <div className="qty">1</div>
                <div className="unit">$19.99</div>
                <div className="subtotal">$19.99</div>
            </div>
        </div>
        <div className="total">
            <div>
                <p>Total to pay: <span>$39.98</span></p>
                <div className="place-order">Place Order</div>
            </div>
        </div>
        </div>
    </div>
    )
}

export default Cart
