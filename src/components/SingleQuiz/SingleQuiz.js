import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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
        <div className='bg-success border m-4'>
          <button onClick={()=>correct()}>Correct</button>
            {question}
           <div className='text-warning'>
           <div>
      </div>
            {
                options.map(option=> <button onClick={()=>clicked(option)}><input type="radio" /> {option} 
                </button>)
            }
            <ToastContainer />
           </div>
        </div>
    );
};

export default SingleQuiz;