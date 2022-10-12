import React from 'react';
import Cart from '../Cart/Cart';
import qustion from '../images/qustion.png'
import {useLoaderData,} from "react-router-dom";
import('./Home.css')
const Home = () => {
    const data = useLoaderData();
    const quizs = data.data;

    return (
        <div>
            <div className='d-flex title justify-content-around align-item-center bg-primary p-4 text-white'>
                 <img className='rounded' src={qustion} alt="" />
                 <h3>Do you have any question about web development? <br /> So touch theses Cart!</h3>
            </div>
           <div className='row row-cols-md-4'>
           {
                quizs.map(quiz=> <Cart
                key={quiz.id}
                quiz = {quiz}
                ></Cart>)
            }
            {

            }
           </div>
        </div>
    );
};

export default Home;