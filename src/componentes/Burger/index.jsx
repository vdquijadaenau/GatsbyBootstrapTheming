import React from 'react';
import './button.scss'

const BurgerButton = ({toggle = false}) => {
    return (
        <div className="burger-btn">
            < div className={`${toggle ? "menu-btn--open" : "menu-btn"}`}>
                < div className="menu-btn--burger"/>
            </div>
        </div>
    )

};

export default BurgerButton;