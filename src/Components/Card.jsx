
import './styles/Card.css'
import React from 'react'

function Card({ title, content,image,image1 }) {
  
  return (
    <><div>

      <card className='cards'><img src={image} width="" height="" alt="logo" /> <p>{title}</p><img1 src={image1}></img1>
        <h2>{content}</h2> </card>
    </div>
    </>
  )
}

export default Card
