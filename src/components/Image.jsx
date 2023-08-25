import React from 'react'

// handling props through functional-way

export default function Image(props) {
  return (
    <div>
      {props.data.map((image)=>{
        return <img key = {image.id} className='img' src={image.img} alt=""></img>
      })}
    </div>
  )
}
