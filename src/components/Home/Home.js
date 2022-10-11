import React from 'react';
import Cart from '../Cart/Cart';
import qustion from '../images/qustion.png'
import {useLoaderData,} from "react-router-dom";
const Home = () => {
    const data = useLoaderData();
    const quizs = data.data;
    const quizHandle =(id)=>{
        console.log(id);
    }
    return (
        <div>
            <div className='d-flex justify-content-around align-item-center bg-info p-4 text-white'>
                 <img className='rounded' src={qustion} alt="" />
                 <h2>Do you have any question about webDevelopment? <br /> So touch these Cart!</h2>
            </div>
           <div className='row row-cols-md-4 w-100'>
           {
                quizs.map(quiz=> <Cart
                key={quiz.id}
                quiz = {quiz}
                quizHandle = {quizHandle}
                ></Cart>)
            }
            {

            }
           </div>
        </div>
    );
};

export default Home;