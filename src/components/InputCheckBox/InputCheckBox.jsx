import React, { useState } from 'react'
import "./InputCheckBox.css"

export const InputCheckBox = ({id, respuesta, handleChangeAnswer, currentAnswer}) => {
    
  return (
    <li>
        <input className='checkbox' type="radio" name="" id={id} onChange={()=> handleChangeAnswer(respuesta)} checked={currentAnswer === respuesta? true:false} />
        <label htmlFor={id}>{respuesta}</label>
    </li>
  )
}
