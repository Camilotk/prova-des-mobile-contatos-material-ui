import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
  btn: {
    border: 'none',
    borderRadius: 6,
    textTransform: 'uppercase',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    cursor: 'pointer',
    color: '#fff',
    backgroundSize: '200%',
    transition: '0.4s',
    '&:hover': {
      backgroundPosition: 'right'
    }
  },
   btn1: {
    backgroundImage: 'linear-gradient(45deg, #e74c3c, #8e44ad, #f1c40f)'
   },
   btn2: {
    backgroundImage: 'linear-gradient(to left, #34495e, #9b59b6, #3498db)'
   }
})

export function ButtonPP(props) {
    const classes = useStyles()
    return (
      <>
        <div className={classes.container}>
            <Button className={ `${classes.btn} ${classes.btn1}`} onClick={props.fn}>{props.children}</Button>
        </div>
      </>
    )
  }

  export function ButtonBP(props) {
    const classes = useStyles()
    return (
      <>
        <div className={classes.container}>
          <Button className={ `${classes.btn} ${classes.btn2}`} onClick={props.fn}>{props.children}</Button>
        </div>
      </>
    )
  }