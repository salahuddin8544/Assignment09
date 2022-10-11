import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { EyeIcon } from '@heroicons/react/24/solid'
import {Link} from 'react-router-dom';
import ('./SingleQuiz.css')
const SingleQuiz = ({singleQuiz}) => {
    const {question,id,options,correctAnswer} = singleQuiz;
        const clicked = (option)=>{
            if(option === correctAnswer){
             toast("Correct answer");
            }
            else{
                toast("Wrong answer");
            }
        }
        const correct =()=>{
            toast(`${correctAnswer}`)
        }
    return (
        <div className='bg-primary text-white border m-4 rounded'>
            <h4 className=''>{question}</h4>
           <div className='text-warning'>
           
      </div>
      <div>
            {
                options.map(option=> <p className='border p-2 bg-info m-2 rounded pointer' onClick={()=>clicked(option)}><input type="radio" /> {option} 
                </p>)
            }
                  <Link className='' title='Correct answer' onClick={()=>correct()}><EyeIcon className='eye-icon text-white'></EyeIcon> </Link>
            <ToastContainer />
           </div>
        </div>
    );
};

export default SingleQuiz;