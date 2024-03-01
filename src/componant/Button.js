import React from 'react'
import './Button.css'

const Button = (props) => { 
    return (
      <button 
          style={{
              color : props.fontColor,
              backgroundColor : props.backgroundKaColor,
              borderRadius : props.borderKaRadius,
              padding : props.padding,
              border :props.border,
              width :props.width,
              cursor :props.cursor
          }}
          className='button'
      >
          {props.children}
      </button>
    )
  }

  export default Button;
