import React from 'react'

const Food = (props) => {
    return (
        <div>
            <img src={props.img} />
            <h1> {props.title}</h1>
            <p>{props.desc}</p>
            <h4>{props.price}</h4>
        </div>
    )
}

export default Food