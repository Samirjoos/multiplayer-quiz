import React from 'react';
import logo from '../assets/images/logo.svg';

export const Logo = ({text}) => {
    return (
        <div className="auth-form-logo-container">
            <img src={logo} alt="Logo"/>
            <span>&nbsp;&nbsp;{text}</span>
        </div>
    );
};
