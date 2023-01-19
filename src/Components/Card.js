import React from 'react'

const Card = (props) => {
  return (
    <div>
         <h1>{props.name}</h1>
         <img alt={props.alt} src={props.source} />
         <p>{props.email}</p>
    </div>
  )
}

export default Card