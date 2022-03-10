import React, { Fragment, useState } from "react";
import classes from './Dashboard.module.css';
import DashboardLogs from "./DashboardLogs";

const Dashboard = props => {

    const [activityHistory, setActivityHistory] = useState(JSON.parse(localStorage.getItem('data')))
    return (
        <Fragment>
            <div className={classes.dashboard}>
                <div className={classes.dashboardHeader}>
                    <h2>Dashboard Activity</h2>
                </div>
               { activityHistory && 
                    Object.keys(activityHistory).map((keyName, keyIndex) => {
                        return <DashboardLogs date={keyName} data={activityHistory[keyName]} />
                    })
                }
                {!activityHistory && <div>No Enteries Found</div>}
                
            </div>
        </Fragment >
    );
};

export default Dashboard;