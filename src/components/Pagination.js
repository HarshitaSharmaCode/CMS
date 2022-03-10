import React, { Fragment } from 'react';
import classes from './Pagination.module.css';

const Pagination = (props) => {
    
  return(
    <Fragment className={classes.pgFragment}>
        <span className={classes.arrow}>
            <button className={classes.button} onClick={props.leftArrowClickHandler}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" className="h-6 w-6" fill="none" viewBox="0 0 10 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
            </button>
        </span>
        <span className={classes.pgnumber}>{props.page}</span>
        <span className={classes.arrow}>
            <button className={classes.button} onClick={props.rightArrowClickHandler}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" className="h-6 w-6" fill="none" viewBox="0 0 10 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
            </button>            
        </span>
    </Fragment>
)};

export default Pagination;
