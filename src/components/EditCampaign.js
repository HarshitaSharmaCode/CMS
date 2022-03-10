import React, { Fragment, useState } from 'react';
import { useDispatch } from 'react-redux';
import { editActions } from '../store/editCampaign-slice';
// import { buttonActions } from '../store/CCbutton-slice';
import { uiActions } from '../store/ui-slice';
import classes from './EditCampaign.module.css';


const EditCampaign = (props) => {

    const dispatch = useDispatch();

    const [campaignName, setCampaignName] = useState('');
    const [mailerName, setMailerName] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [emailTemplate, setEmailTemplate] = useState('');
    
    const nameCChangeHandler = (event) =>{
        setCampaignName(event.target.value);
    };
    const mailerNameChangeHandler = (event) =>{
        setMailerName(event.target.value);
    };
    const nameChangeHandler = (event) =>{
        setName(event.target.value);
    };
    const emailChangeHandler = (event) =>{
        setEmail(event.target.value);
    };
    const subjectChangeHandler = (event) =>{
        setSubject(event.target.value);
    };
    const emailTemplateChangeHandler = (event) =>{
        setEmailTemplate(event.target.value);
    };
    const cancelButtonHandler = () => {
        dispatch(editActions.toggle());
        dispatch(uiActions.toggle());
        // dispatch(buttonActions.toggle());
    };
    const submitHandler = (event) => {
        event.preventDefault();
        if(campaignName.trim().length === 0){
            return;    
        }
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
        console.log('After Editing campaignName=', campaignName);
        console.log('After Editing mailerName=', mailerName);
        console.log('After Editing name=', name);
        console.log('After Editing email=', email);
        console.log('After Editing subject=', subject);
        console.log('After Editing emailTemplate=', emailTemplate);

        props.onEditCampaignSubmit(campaignName, mailerName, name, email, subject, emailTemplate);

        setCampaignName('');
        setMailerName('');
        setName('');
        setEmail('');
        setSubject('');
        setEmailTemplate('');

        dispatch(editActions.toggle());
        dispatch(uiActions.toggle());
        // dispatch(buttonActions.toggle());
        props.showAlert('Campaign Edited!', 'success');
    };



  return(
    <Fragment>
        <form onSubmit={submitHandler} className={classes.Form}>
            <h2>Edit Your Campaign Here:</h2>
            <div>
                <h4><label htmlFor="name">Name</label></h4>
                <input type="text" value={campaignName} onChange={nameCChangeHandler} placeholder="Campaign name.."/>            
            </div>

            <div className= {classes.Tofield}>
                <h4>
                    To:
                </h4>
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
                <h4>
                    From:
                </h4>
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
  );
};


export default EditCampaign;
