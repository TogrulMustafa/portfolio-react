import React from 'react'

const Footer = _ => {


    // const year = document.querySelector('#currentYear')
    // const currentTime = new Date()
    // const currentYear = currentTime.getFullYear()
    // year.innerHTML = currentYear


    return (
        <div id='footer' class="footer">
            <div class="container">
                <div class="row footer-items">
                    <div class="footer-left">
                        <span>Nizami district,Gara Garaev 59,apt.80</span>
                        <span>+994-50-7404140</span>
                        <span>togrulmustafazade8@gmail.com</span>
                    </div>
                    <div class="footer-center">
                        <a href="#">Home</a>
                        <a href="#">About me</a>
                        <a href="#">Services</a>
                        <a href="#">Experience</a>
                        <a href="#">Contact</a>
                    </div>
                    <div class="footer-right">
                        <div>
                            <a href="#">
                                <i class="fab fa-facebook-f"></i>
                            </a>
                            <a href="#">
                                <i class="fab fa-twitter"></i>
                            </a>
                            <a href="#">
                                <i class="fab fa-youtube"></i>
                            </a>
                            <a href="#">
                                <i class="fab fa-instagram"></i>
                            </a>
                        </div>
                        <p>Copyright <i class="far fa-copyright"></i>2021 Mustafazade Togrul | All Rights Reserved</p>
                        {/* <p>Copyright <i class="far fa-copyright"></i><span id='#currentYear'></span> Mustafazade Togrul | All Rights Reserved</p>
                             footerda 2022'ni JS ile yazanda saytin goruntusu itir? */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
