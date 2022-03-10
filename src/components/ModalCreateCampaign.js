import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { buttonActions } from '../store/CCbutton-slice'
import { PageCCbuttonActions } from '../store/PageCCbutton-slice';
import { uiActions } from '../store/ui-slice';
import Modal from './Modal';
import classes from './ModalCreateCampaign.module.css';
import classesbtn from './CreateCampaignBtn.module.css';


// import classes from './ModalCreateCampaign.module.css';

const ModalCreateCampaign = (props) => {
    const dispatch = useDispatch();

    const cancelButtonHandler = () => {
        dispatch(buttonActions.toggle());
    };
    const [EnteredName, setEnteredName] = useState('');

    const nameChangeHandler = (event) =>{
        setEnteredName(event.target.value);
    }
    
    
    const submitHandler = (event) => {
        event.preventDefault();
        if(EnteredName.trim().length === 0){
            return;    
        }
        console.log('modal=', EnteredName);
        props.onGetValue(EnteredName);
        setEnteredName('');

        dispatch(PageCCbuttonActions.toggle());
        dispatch(buttonActions.toggle());
        dispatch(uiActions.toggle());
    };

    return(
        <Modal onClose={props.onClose} className={classes.md}>
            <h2 className={classes.heading}>Create Campaign</h2>
            <hr/>
            <div className={classes.container}>
                <form onSubmit={submitHandler}>
                    <label htmlFor="name" >Name</label>
                    <input type="text" value={EnteredName} onChange={nameChangeHandler} placeholder="Campaign name.."/>
                    <hr/>
                    <div>
                        <button className={classesbtn.button} onClick={ cancelButtonHandler } >Cancel</button>
                        <button className={classesbtn.button} type="submit">Create</button>
                    </div>
                    
                </form>
            </div>
        </Modal>
    );
}

export default ModalCreateCampaign;