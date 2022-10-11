import React from 'react';
const Cart = ({quiz}) => {
    const{id,logo,name}= quiz;
    return (
        <div>
            <img src={logo} alt="" />
            <p>Name:{name}</p>
            <button>Start Quiz</button>
        </div>
    );
};

export default Cart;