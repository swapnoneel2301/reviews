import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const [currentIndex,setCurrentIndex] = useState(0);

  const {name,job,image,text} = people[currentIndex];
  const size = people.length;

  const randomPerson = ()=>{
    let nextIndex=0;
    do{
         nextIndex = Math.floor(Math.random()*size);
         console.log(currentIndex,nextIndex);
    }while(nextIndex===currentIndex);
    setCurrentIndex(nextIndex);
  }
  return (
    <article className='review'>
       <div className='img-container'>
          <img src={image} alt={name} className='person-img'></img>
          <span className='quote-icon'>
            <FaQuoteRight />
          </span>
       </div>
       <h4 className='author'>{name}</h4>
       <p className='job'>{job}</p>
       <p className='info'>{text}</p>
       <div className='btn-container'>
         <button className='prev-btn' onClick={()=>setCurrentIndex((currentIndex-1+size)%size)}><FaChevronLeft /></button>
         <button className='next-btn' onClick={()=>setCurrentIndex((currentIndex+1)%size)}><FaChevronRight /></button>
       </div>
       <button className='random-btn' onClick={randomPerson}>Surprise Me</button>
    </article>
  );
};

export default Review;
