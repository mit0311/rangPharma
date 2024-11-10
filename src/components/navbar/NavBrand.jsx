import React from 'react'
import rangLogo from '../../assets/images/lOGO1.jpg'
import rangLogo2 from '../../assets/images/lOGO2.png'

const NavBrand = () => {
    return (
        <div className="flex items-center space-x-4">
            <img className="w-12 select-none" src={rangLogo} alt="logo" />
            <h1 className="text-3xl font-semibold text-blue-600 brand-font select-none">Rang Industries</h1>
        </div>
    )
}

export default NavBrand
