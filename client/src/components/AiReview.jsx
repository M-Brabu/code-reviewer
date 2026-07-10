import React from 'react'
import ReactMarkdown from "react-markdown"
const AiReview = ({review}) => {
  return (
    <div className='review-words'>
     <ReactMarkdown>{review}</ReactMarkdown> 
      </div>
  )
}

export default AiReview