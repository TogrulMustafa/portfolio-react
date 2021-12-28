import React from 'react'
import Typed from 'react-typed';
import image from '../img/itBrains.jpeg'

const Header = _ => {
    return (
        <div className='header-wrapper'>
            <div className="main-info">
                <h1>Web-Development and Web-Site Services</h1>
                <Typed
                className='typed-text'
                strings={[
                    'Front-end Developer',
                    'Bachelor',
                    'World Economy'
                   ]}
                    typeSpeed={40}
                    backSpeed={50}
                    loop >
                </Typed>
                <a href={image} download className='downloadCV'>Download CV</a>
            </div>
            
        </div>
    )
}

export default Header
