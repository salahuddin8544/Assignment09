import React from 'react';
const SingleQuiz = ({singleQuiz}) => {
    const {question,id,options,correctAnswer} = singleQuiz;
        const clicked = (option)=>{
            if(option === correctAnswer){

            }
            else{
                console.log('wrong');
            }
        }

    return (
        <div className='bg-success border m-4'>
            <button>fav</button>
            {question}
           <div className='text-warning'>
            {
                options.map(option=> <button onClick={()=>clicked(option)}><input type="radio" /> {option} 
                </button>)
            }
           </div>
        </div>
    );
};

export default SingleQuiz;