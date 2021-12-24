import React from 'react'
import Typed from 'react-typed';

const Header = _ => {
    return (
        <div className='header-wrapper'>
            <div className="main-info">
                <h1>Web-Development and Services</h1>
                <Typed
                strings={[
                    'Front-end Developer',
                    'Bachelor',
                    'World Economy'
                   ]}
                    typeSpeed={40}
                    backSpeed={50}
                    loop >
                </Typed>
            </div>
            
        </div>
    )
}

export default Header
