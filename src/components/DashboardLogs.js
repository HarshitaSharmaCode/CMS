// import { useSelector, useDispatch } from 'react-redux';
import { Fragment } from 'react';


const DashboardLogs = (props) => {

    return (
        <Fragment>
            <div style={{ width: '100%' }}>
                <span style={{ textAlign: 'left' }}>{props.date}</span>
            </div>

            <table style={{ width: '100%', lineHeight: '2', borderCollapse: 'collapse', border: '0.3px solid rgb(207, 207, 207' }}>
                <tbody>
                    {
                        props.data.map(item =>
                            <tr style={{ textAlign: 'center', borderBottom: '0.3px solid rgb(248, 248, 248)' }}>
                                <td>{item.time}</td>
                                <td>{item.log}</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </Fragment>
    );
}

export default DashboardLogs;