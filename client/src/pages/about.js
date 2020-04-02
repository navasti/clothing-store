import React from 'react'

const About = () => {
    return (
    <div className="about">
        <nav className="quick-nav">
            <p>Who</p>
            <p>Why</p>
            <p>Where</p>
        </nav>
        <div className="who">
            <h2>Who are we</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla libero magna, blandit nec ex eu, malesuada finibus lectus. Proin risus nisi, viverra eu placerat in, eleifend in quam. Praesent eget risus hendrerit enim ultricies ullamcorper. Aenean dictum ex ac lorem tincidunt pellentesque. Suspendisse id neque eu magna vulputate lacinia eu vel turpis. Aliquam dui leo, laoreet sit amet neque vel, sodales sagittis sapien. Sed tincidunt in est in porttitor. Aenean id risus vel magna scelerisque pharetra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Fusce blandit pretium purus, eu blandit massa fringilla eu. Mauris ut elit dolor. Cras eleifend nibh id varius suscipit. Nunc sit amet purus scelerisque augue fermentum semper ac vulputate neque. Nunc lobortis lorem nisi, quis venenatis nunc accumsan quis.</p>
        </div>
        <div className="why">
            <h2>Why us</h2>
            <p>Etiam maximus, turpis sed ultricies vehicula, libero risus porta felis, vitae eleifend velit nunc a metus. Nullam in malesuada leo. Nam gravida et nisl sit amet laoreet. Nunc sagittis odio erat, in eleifend velit sagittis nec. Vestibulum condimentum et nisi vel hendrerit. Phasellus vel velit vel tortor feugiat sollicitudin sit amet vel massa. Phasellus aliquam faucibus lectus id dapibus. Nullam vel faucibus diam. Nunc volutpat feugiat enim, vitae congue quam rutrum quis. Nunc ut massa purus. Morbi iaculis purus tellus, id ultricies tellus facilisis vel. Etiam varius eros iaculis feugiat vestibulum. Suspendisse pretium erat accumsan, porta est sit amet, tincidunt ligula.</p>
        </div>
        <div className="where">
            <h2>Where are we placed</h2>
            <div className="location">
                <p>icon</p>
                <div>
                    <p>Trafalgar Square,</p>
                    <p>GV5C+6C, London,</p>
                    <p>Great Britain</p>
                </div>
            </div>
            <div className="contact">
                <h2>Contact Us</h2>
                <div className="tele">
                    <p>icon</p>
                    <p>+44 7480728290</p>
                </div>
                <div className="mail">
                    <p>icon</p>
                    <p>email@address.com</p>
                </div>
            </div>
        </div>
        <div className="map">
            <p>map</p>
        </div>
    </div>
    )
}

export default About
