import { useDispatch, useSelector } from 'react-redux';
import React, { Fragment, useState } from 'react';
import CreateCampaignBtn from './CreateCampaignBtn';
import CampaignsTable from './CampaignsTable';
import SentTable from './SentTable';
import ScheduledTable from './ScheduledTable';
import DraftTable from './DraftTable';
import Search from '../Images/Search.png';
import Recent from '../Images/Recent.png';
import Sent from '../Images/Sent.png';
import Scheduled from '../Images/Scheduled.png';
import Draft from '../Images/Draft.png';
import ModalCreateCampaign from './ModalCreateCampaign';
import PageCreateCampaign from './PageCreateCampaign';
import EditCampaign from './EditCampaign';
import classes from './Campaign.module.css';
import { recentActions } from '../store/recentTable-slice';
import { sentActions } from '../store/sentTable-slice';
import { scheduledActions } from '../store/scheduledTable-slice';
import { draftActions } from '../store/draftTable-slice';
import { searchActions } from '../store/search-slice';
// import Item from 'antd/lib/list/Item';


let Items = [];
let TempItems = [];
let Found = [];
let newCampaign = {};
let editCampaign = {};
let cName = '';
let EditedcampaignName = '';
let EditedmailerName = '';
let Editedname = '';
let Editedemail = '';
let Editedsubject = '';
let EditedemailTemplate = '';
let editingId = '';
let Editindex = '';

let logs = {}


const Campaign = props => {
    const dispatch = useDispatch();

    const [count, setCount] = useState(0);
    const [editCount, setEditCount] = useState(0);
    const [searchName, setSearchName] = useState('');

    const showAlertC = (message, type) => {
        props.showAlert(message, type);
    }

    const saveEnteredName = (enteredNameData) => {
        cName = enteredNameData;
        console.log('campaignjs=', cName);
    };
    const savePageCCValue = (mailerNameP, nameP, emailP, subjectP, emailTemplateP, op, cl) => {
        let today = new Date();
        let date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        //let dateTime = date + ' ' + time;
        let dateTime = new Date().toLocaleString()

        newCampaign = {
            id: Math.random().toString(),
            cName: cName,
            mailerName: mailerNameP,
            name: nameP,
            email: emailP,
            subject: subjectP,
            emailTemplate: emailTemplateP,
            status: 'Submit',
            opens: op + cl,
            clicks: cl,
            time: dateTime,
        };
        Items.unshift(newCampaign);
        TempItems = Items

        let todayDate = new Date(dateTime).getDate() + " " + new Date(dateTime).toLocaleString('default', { month: 'long' }) + " " + new Date(dateTime).getFullYear()

        let logLocal = JSON.parse(localStorage.getItem('data'));

        let todaylog = []
        if (logLocal){
            todaylog = logLocal[todayDate];
        }
        

        // if (!todaylog) {
        //     todaylog = [];
        // }
        todaylog.unshift({
            "time": new Date(dateTime).toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true }),
            "log": cName + " Created Successfully",
        })

        logs[todayDate] = todaylog;

        localStorage.setItem('data', JSON.stringify(logs));
    };
    const clearValue = () => {
        newCampaign = {};
        console.log('ClearValue called!');
    }
    const onCancelDraft = (mailerNameP, nameP, emailP, subjectP, emailTemplateP, op, cl) => {
        console.log("Inside Campaign onCancelDraft");
        let today = new Date();
        let date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        //let dateTime = date + ' ' + time;
        let dateTime = new Date().toLocaleString()
        newCampaign = {
            id: Math.random().toString(),
            cName: cName,
            mailerName: mailerNameP,
            name: nameP,
            email: emailP,
            subject: subjectP,
            emailTemplate: emailTemplateP,
            status: 'Draft',
            opens: op + cl,
            clicks: cl,
            time: dateTime,
        };
        console.log('newCampaign in onCancelDraft=', newCampaign);
        Items.unshift(newCampaign);
        TempItems = Items
        console.log('Items=', Items);
        newCampaign = {};

        let todayDate = new Date(dateTime).getDate() + " " + new Date(dateTime).toLocaleString('default', { month: 'long' }) + " " + new Date(dateTime).getFullYear()

        let logLocal = JSON.parse(localStorage.getItem('data'));
        let todaylog = logLocal[todayDate];

        if (!todaylog) {
            todaylog = [];
        }
        todaylog.unshift({
            "time": new Date(dateTime).toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true }),
            "log": cName + " Drafted Successfully",
        })

        logs[todayDate] = todaylog;

        localStorage.setItem('data', JSON.stringify(logs));
    };
    const deletingCampaign = (id) => {
        const deletingId = id;
        // console.log('Campaign Deleting ID = ', id);
        const index = Items.findIndex(x => x.id === deletingId);
        console.log('Index in deletingCampaign:>> ', index);

        Items = Items.filter(function (Items) {
            return Items.id !== id;
        });

        TempItems = Items
        setCount(count + 1);

        let dateTime = new Date().toLocaleString()

        let todayDate = new Date(dateTime).getDate() + " " + new Date(dateTime).toLocaleString('default', { month: 'long' }) + " " + new Date(dateTime).getFullYear()

        let logLocal = JSON.parse(localStorage.getItem('data'));
        let todaylog = logLocal[todayDate];

        if (!todaylog) {
            todaylog = [];
        }
        todaylog.unshift({
            "time": new Date(dateTime).toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true }),
            "log": cName + " Deleted Successfully",
        })

        logs[todayDate] = todaylog;

        localStorage.setItem('data', JSON.stringify(logs));

        // console.log('After deleting', Items);   
    }
    const onEditCampaignSubmit = (EcampaignName, EmailerName, Ename, Eemail, Esubject, EemailTemplate) => {
        EditedcampaignName = EcampaignName;
        EditedmailerName = EmailerName;
        Editedname = Ename;
        Editedemail = Eemail;
        Editedsubject = Esubject;
        EditedemailTemplate = EemailTemplate;
        // console.log('EmailerName :>> ', EditedmailerName);
        FinalEdit();
    };
    const editingCampaign = (id) => {
        // console.log('Campaign Editing ID = ', id);
        editingId = id;
        Editindex = Items.findIndex(x => x.id === editingId);
        // console.log('Index in editingCampaign:>> ', Editindex);
    }
    const FinalEdit = () => {
        console.log('EcampaignName :>> ', EditedcampaignName);
        let today = new Date();
        let date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        //let dateTime = date + ' ' + time;
        let dateTime = new Date().toLocaleString()
        
        editCampaign = {
            id: editingId,
            cName: EditedcampaignName,
            mailerName: EditedmailerName,
            name: Editedname,
            email: Editedemail,
            subject: Editedsubject,
            emailTemplate: EditedemailTemplate,
            status: 'Submit',
            opens: '',
            clicks: '',
            time: dateTime,
        };

        let todayDate = new Date(dateTime).getDate() + " " + new Date(dateTime).toLocaleString('default', { month: 'long' }) + " " + new Date(dateTime).getFullYear()

        let logLocal = JSON.parse(localStorage.getItem('data'))
        let todaylog = logLocal[todayDate]

        if (!todaylog) {
            todaylog = []
        }
        todaylog.unshift({
            "time": new Date(dateTime).toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true }),
            "log": cName + " Created Successfully",
        })

        logs[todayDate] = todaylog

        localStorage.setItem('data', JSON.stringify(logs))
        // console.log('editCampaign before IF case :>> ', editCampaign);
        if (editCampaign.name) {
            // console.log('editCampaign before splice (inIF case) :>> ', editCampaign);
            const removeElement = function (index, editCampaign) {
                Items.splice(index, 1, editCampaign);
                return Items;
            };
            Items = removeElement(Editindex, editCampaign);

            TempItems = Items

            // console.log('editCampaign after splice (inIF case) :>> ', editCampaign);
            editCampaign = {};
            // console.log('Items after all splice editing :>> ', Items);
            setEditCount(editCount + 1);
        }
    };

    const searchNameHandler = (event) => {

        if (event.target.value) {
            let searchItems = []

            Items.forEach(function (arrayItem) {
                if (arrayItem.cName.includes(event.target.value)) {
                    console.log("exists ", arrayItem.cName);
                    searchItems.push(arrayItem)
                }
            });

            if (searchItems.length > 0) {
                Items = searchItems
            } else {
                Items = TempItems
            }

        } else {
            Items = TempItems
        }

        setSearchName(event.target.value);

    }

    const searchButtonSubmitHandler = (event) => {
        event.preventDefault();
        // Found = Items.filter(toSearch);

        // function toSearch(Items, val) {
        //     if (searchName === "") {
        //         return;
        //     } else if (val.cName.toLowerCase().includes(searchName.toLowerCase())) {
        //         return val;
        //     }
        // }
        // console.log('searching value (Found)       :>> ', Found);

        let searchItems = []

        Items.forEach(function (arrayItem) {
            if (arrayItem.cName.includes(searchName)) {
                console.log("exists ", arrayItem.cName);
                searchItems.push(arrayItem)
            }
        });

        if (searchItems.length > 0) {
            Items = searchItems
        } else {
            Items = TempItems
        }
        // for (let i=0; i < Items.length; i++) {
        //     if (Items[i].cName === searchName) {
        //         Found = Items[i];
        //         return Found;
        //     }
        // }
        dispatch(recentActions.notVisible());
        dispatch(sentActions.notVisible());
        dispatch(scheduledActions.notVisible());
        dispatch(draftActions.notVisible());
        dispatch(searchActions.visible());
    }

    const RecentButtonHandler = () => {
        dispatch(recentActions.visible());
        dispatch(sentActions.notVisible());
        dispatch(scheduledActions.notVisible());
        dispatch(draftActions.notVisible());
        document.title = 'CMS - Home';
    };
    const SentButtonHandler = () => {
        dispatch(recentActions.notVisible());
        dispatch(sentActions.visible());
        dispatch(scheduledActions.notVisible());
        dispatch(draftActions.notVisible());
        // props.showAlert('Sent Clicked !', 'success');
        document.title = 'CMS - Sent';
    };
    const ScheduledButtonHandler = () => {
        dispatch(recentActions.notVisible());
        dispatch(sentActions.notVisible());
        dispatch(scheduledActions.visible());
        dispatch(draftActions.notVisible());
        document.title = 'CMS - Schedule';
    };
    const DraftButtonHandler = () => {
        dispatch(recentActions.notVisible());
        dispatch(sentActions.notVisible());
        dispatch(scheduledActions.notVisible());
        dispatch(draftActions.visible());
        document.title = 'CMS - Draft';
    };

    const showEditCampaign = useSelector(state => state.edit.editCampIsVisible);
    const showCCModal = useSelector(state => state.btn.cCModalIsVisible);
    const showCCPage = useSelector(state => state.pageCCbtn.PageCCIsVisible);
    const showuiPage = useSelector(state => state.ui.uiIsVisible);
    const recentT = useSelector(state => state.recent.recentIsVisible);
    const sentT = useSelector(state => state.sent.sentIsVisible);
    const scheduledT = useSelector(state => state.scheduled.scheduledIsVisible);
    const draftT = useSelector(state => state.draft.draftIsVisible);
    const searchT = useSelector(state => state.search.searchIsVisible);

    return (
        <Fragment>
            <div className={classes.fragmentCampaign}>

                {showuiPage && <div className={classes.campaignshead}>
                    <h2>Campaign</h2>
                    {/* <form> */}
                    <form onSubmit={searchButtonSubmitHandler}>
                        <input type="search" value={searchName} onChange={searchNameHandler} placeholder="Search Campaign" />
                        {/* <input type="search" placeholder="Search Campaign"/> */}
                        <button type="submit"><img src={Search} alt="" style={{ width: '20px' }} /></button>
                    </form>
                    <CreateCampaignBtn />
                </div>}

                <div className={classes.container}>

                    {showuiPage && <ul>
                        <li><button onClick={RecentButtonHandler}><img src={Recent} alt="" />Recent</button></li>
                        <li><button onClick={SentButtonHandler}><img src={Sent} alt="" />Sent</button></li>
                        <li><button onClick={ScheduledButtonHandler}><img src={Scheduled} alt="" />Schedule</button></li>
                        <li><button onClick={DraftButtonHandler}><img src={Draft} alt="" />Draft</button></li>
                    </ul>}

                    {showuiPage && searchT && <CampaignsTable newCampaignData={Found} clearValue={clearValue} onDelete={deletingCampaign} onEdit={editingCampaign} showAlert={showAlertC} />}
                    {showuiPage && recentT && <CampaignsTable newCampaignData={Items} clearValue={clearValue} onDelete={deletingCampaign} onEdit={editingCampaign} showAlert={showAlertC} />}
                    {showuiPage && sentT && <SentTable newCampaignData={Items} clearValue={clearValue} onDelete={deletingCampaign} onEdit={editingCampaign} showAlert={showAlertC} />}
                    {showuiPage && scheduledT && <ScheduledTable newCampaignData={Items} clearValue={clearValue} onDelete={deletingCampaign} onEdit={editingCampaign} showAlert={showAlertC} />}
                    {showuiPage && draftT && <DraftTable newCampaignData={Items} clearValue={clearValue} onDelete={deletingCampaign} onEdit={editingCampaign} showAlert={showAlertC} />}

                    {showCCModal && <ModalCreateCampaign onGetValue={saveEnteredName} showAlert={showAlertC} />}
                    {showCCPage && <PageCreateCampaign Title={cName} onPageCreateSubmit={savePageCCValue} onCancelDraft={onCancelDraft} showAlert={showAlertC} />}
                    {showEditCampaign && <EditCampaign onEditCampaignSubmit={onEditCampaignSubmit} showAlert={showAlertC} />}

                </div>
            </div>
        </Fragment>
    );
};

export default Campaign;