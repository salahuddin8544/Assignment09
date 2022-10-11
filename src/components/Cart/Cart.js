import React from 'react';
import { Link } from 'react-router-dom';
import('./Cart.css')
const Cart = ({quiz,quizHandle}) => {
    const{id,logo,name}= quiz;
    return (
         <div className="col">
          <div className="card h-100">
            <img className='bg-success' src={logo} alt="" />
            <div className="card-body">
              <h5 className="card-title">{name}</h5>
            </div>
              <Link to={`/${id}`} className='btn btn-primary w-100'>Start Quiz</Link>
          </div>
        </div>

    );
};

export default Cart;