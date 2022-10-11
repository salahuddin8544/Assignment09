import React from 'react';
const Cart = ({quiz,quizHandle}) => {
    const{id,logo,name}= quiz;
    return (
      <div>
         <div class="col">
          <div class="card h-100">
            <img className='bg-success' src={logo} alt="" />
            <div class="card-body">
              <h5 class="card-title">{name}</h5>
            </div>
              <button onClick={} className='btn btn-primary w-100'>Start Quiz</button>
          </div>
        </div>
      </div>

    );
};

export default Cart;