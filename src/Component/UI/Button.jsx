import React from 'react'

function Button(... props) {
  return (
    <div>
        <Button classname= {props.button } >{props.text}</Button>
    </div>
  )
}

export default Button
