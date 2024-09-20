import React from 'react'
import './header.css'
import { IoIosArrowBack } from 'react-icons/io'
import PdLogo from '../logo/PdLogo.jpg'

const header = () => {
    return (
        <div className='header'>
        <div className='header-container'>
            <div className='icon-back'>
                <IoIosArrowBack size={30}/>
            </div>
            <div className='header-logo'>
                <img src={PdLogo} style={{ height: 70, width: 200 }} alt="Pd Logo" />
            </div>
        </div>
        </div>
    );
};

export default header;