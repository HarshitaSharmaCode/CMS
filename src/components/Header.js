import { useDispatch } from 'react-redux';
import React, { Fragment } from 'react';
import classes from './Header.module.css';
import logo from '../Images/logo.png';
import { campaignActions } from '../store/campaign-slice';
import { dashboardActions } from '../store/dashboard-slice';

const Header = props => {
    const dispatch = useDispatch();

    const CampaignButtonHandler = () => {
        dispatch(campaignActions.visible());
        dispatch(dashboardActions.notVisible());
    };
    const DashboardButtonHandler = () => {
        dispatch(campaignActions.notVisible());
        dispatch(dashboardActions.visible());
    };

    return(
        <Fragment>
            <nav className={classes.navbar}>
                <div className={classes.logo}>
                    <img src={logo} alt="CampaignManagement.com"/>
                </div>
                <h2>Campaign Management</h2>
                
                <ul>
                    {/* <li><a href='/'>Campaign</a></li>
                    <li><a href='/dashboard'>Dashboard</a></li> */}
                    <li><button className={classes.button} onClick={CampaignButtonHandler}>Campaigns</button></li>
                    <li><button className={classes.button} onClick={DashboardButtonHandler}>Dashboard</button></li>
                </ul>
            </nav>
        </Fragment>
    );
};

export default Header;