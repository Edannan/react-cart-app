import { forwardRef } from 'react'
import classes from './Input.module.css'

const Input = forwardRef((props, ref) => {
  return (
    <div className={classes.input}>
        <input ref={ref} {...props.input} />     
    </div>
  )
})

export default Input