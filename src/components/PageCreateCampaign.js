import React, { Fragment, useState } from 'react';

import { useDispatch } from 'react-redux';
import { PageCCbuttonActions } from '../store/PageCCbutton-slice';
// import { buttonActions } from '../store/CCbutton-slice';
import { uiActions } from '../store/ui-slice';

import classes from './PageCreateCampaign.module.css';

let op = 0;
let cl = 0;
const PageCreateCampaign = props => {

    const dispatch = useDispatch();

    const [mailerName, setMailerName] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [emailTemplate, setEmailTemplate] = useState('');

    const mailerNameChangeHandler = (event) =>{
        setMailerName(event.target.value);
    }
    const nameChangeHandler = (event) =>{
        setName(event.target.value);
    }
    const emailChangeHandler = (event) =>{
        setEmail(event.target.value);
    }
    const subjectChangeHandler = (event) =>{
        setSubject(event.target.value);
    }
    const emailTemplateChangeHandler = (event) =>{
        setEmailTemplate(event.target.value);
    }

    const submitHandler = (event) => {
        event.preventDefault();
        if(mailerName.trim().length === 0){
            return;    
        }
        if(name.trim().length === 0){
            return;    
        }
        if(email.trim().length === 0){
            return;    
        }
        if(subject.trim().length === 0){
            return;    
        }
        if(emailTemplate.trim().length === 0){
            return;    
        }
        // console.log('mailerName=', mailerName);
        // console.log('name=', name);
        // console.log('email=', email);
        // console.log('subject=', subject);
        // console.log('emailTemplate=', emailTemplate);
        if(cl !== 0)
        {
            cl++;
        }
        console.log('op, cl bedore props.onPagecreateSubmit:>> ', op, cl);
        props.onPageCreateSubmit(mailerName, name, email, subject, emailTemplate, op, cl);

        setMailerName('');
        setName('');
        setEmail('');
        setSubject('');
        setEmailTemplate('');

        dispatch(PageCCbuttonActions.toggle());
        dispatch(uiActions.toggle());
        props.showAlert('Campaign Created!', 'success');
        // dispatch(buttonActions.toggle());
    }

    const cancelButtonHandler = (event) => {
        event.preventDefault();
        console.log("PageCC cancelButtonHandler is Here");
        if(mailerName.trim().length === 0){
            return;    
        }
        if(name.trim().length === 0){
            return;    
        }
        if(email.trim().length === 0){
            return;    
        }
        if(subject.trim().length === 0){
            return;    
        }
        if(emailTemplate.trim().length === 0){
            return;    
        }
        if(cl !== 0 )
        {
            op++;
            cl++;
        }
        console.log('op, cl bedore props.onCancelDraft:>> ', op, cl);
        props.onCancelDraft(mailerName, name, email, subject, emailTemplate, op, cl);

        setMailerName('');
        setName('');
        setEmail('');
        setSubject('');
        setEmailTemplate('');

        dispatch(PageCCbuttonActions.toggle());
        dispatch(uiActions.toggle());
        props.showAlert('Draft Created!', 'success');
        // dispatch(buttonActions.toggle());
    };

    return (
        <Fragment>  
            <form className={classes.Fragment} onSubmit={submitHandler}>              
                <div className= {classes.Tofield}>
                    <h1>{props.Title}</h1>
                    <h2>
                        To:
                    </h2>
                    <label>   
                        Mailer Name:  
                    </label>   
                    <select value={mailerName} onChange={mailerNameChangeHandler}> 
                        <option value=" "></option>  
                        <option value="Divya">Divya</option>  
                        <option value="Ayushi">Ayushi</option>  
                        <option value="Bharti">Bharti</option>  
                        <option value="Damon">Damon</option>  
                        <option value="Matt">Matt</option>  
                        <option value="Tylor">Tylor</option>  
                    </select> 
                </div>

                <div className= {classes.Fromfield}>
                    <h2>
                        From:
                    </h2>

                    <div className= {classes.MainFromfield}>
                        <label htmlFor="name">Name</label>        
                        <input type="text" value={name} onChange={nameChangeHandler}  size="20"/>
                        <label htmlFor="email"> Email </label> 
                        <input type="email" value={email} onChange={emailChangeHandler} id="email" />     
                        <label htmlFor="subject"> Subject </label> 
                        <input type="text" value={subject} onChange={subjectChangeHandler} id="subject"/> 
                        <label>   
                            Email template:  
                        </label>   
                        <select value={emailTemplate} onChange={emailTemplateChangeHandler}>  
                            <option value=" "></option>  
                            <option value="Promotional">Propotional</option>
                            <option value="Review">Review</option>  
                            <option value="Offer">Offer</option>  
                            <option value="Report">Report</option>  
                            <option value="Terms">Terms</option>  
                        </select>  
                    </div> 
                         
                </div>

                <div className= {classes.Buttonfield}>
                    <button type="submit">Send Campaign</button>
                    <button onClick={ cancelButtonHandler } >Cancel</button>
                </div>   
            
            </form>  
        </Fragment>
    )
}

export default PageCreateCampaign;

