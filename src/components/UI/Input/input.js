import { forwardRef } from 'react'
import classes from './Input.module.css'

const input = forwardRef((props, ref) => {
  return (
    <div className={classes['button-container']}>
        <input ref={ref} {...props.input} />     
    </div>
  )
})

export default input