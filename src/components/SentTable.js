import React, { Fragment, useState } from 'react';
import classes from './CampaignsTable.module.css';
import TableItems from './TableItems';
import { useSelector, useDispatch } from 'react-redux';
import NoDataBox from '../Images/NoDataBox.png';
import {emptyTableActions} from '../store/emptyTable-slice';
import { USERS_PER_PAGE } from '../utils/Constants';
import Pagination from './Pagination';

let Items = [];
let SentItems = [];

const SentTable = (props) => {

  const [page, setPage] = useState(1);
    // const [totalPages, setTotalPages] = useState(0);
    console.log('USERS_PER_PAGE :>> ', USERS_PER_PAGE);

  const showAlertCT = (message, type) =>{
    props.showAlert(message, type);
  }

  const dispatch = useDispatch();
    
  const EmptyTableHandler = () =>{
    dispatch(emptyTableActions.nodata());
    console.log("No data called!");
  }
  const DataTableHandler = () =>{
    dispatch(emptyTableActions.hasdata());
    console.log("Has data called!");
  }
  
  Items = props.newCampaignData;
  if(SentItems.length) {
    DataTableHandler();
  }
  else{
    EmptyTableHandler();
  }
  
  SentItems =  Items.filter(function(Items){
    return Items.status === 'Submit';
  });

  props.clearValue();

  console.log('SentItems=', SentItems);
  console.log('CTable SentItems string=', JSON.stringify(SentItems));
  console.log('CTable SentItems length=', SentItems.length);

  const editButtonHandler = (editId) =>{
    props.onEdit(editId);
  };
  const deleteButtonHandler = (delId) =>{
    props.onDelete(delId);
  };

  const totalPages = Math.ceil(SentItems.length / USERS_PER_PAGE);
    const startIndex = (page - 1) * USERS_PER_PAGE;
    const selectedUsers = SentItems.slice(startIndex, startIndex + USERS_PER_PAGE);
    const leftArrowClickHandler = () =>{
        if((page-1) !== 0){
            setPage(page - 1);
        }
        // showAlertCT('Left Arrow Clicked !', 'success');
    }
    const rightArrowClickHandler = () =>{
        if((page+1) <= totalPages){
            setPage(page + 1);
        }
        // showAlertCT('Right Arrow Clicked !', 'success');
    }

  const tableHasNoData = useSelector(state => state.emptyT.tableIsEmpty);

  return(
    <Fragment className={classes.frag}>
      <table className={classes.table}>
        <thead>
          <tr>
            <th>Campaign</th>
            <th>Status</th>
            <th>Opens</th>
            <th>Clicks</th>
            <th>Actions</th>
          </tr>
        </thead>
        <div className={classes.emptyBoxDiv}>
                {tableHasNoData &&< tbody><img className={classes.emptyBox} src={NoDataBox} alt='' text = 'No Data'/></tbody>}
        </div>
        {!tableHasNoData &&
          <tbody className={classes.fillBoxDiv}>
            <Fragment className={classes.tableItem}>
              {selectedUsers.map((cItems) => (<TableItems editButtonHandler={editButtonHandler} deleteButtonHandler={deleteButtonHandler}
                key = {cItems.id}
                CId = {cItems.id}
                CTitle={cItems.cName}
                CStatus={cItems.status}
                COpens={cItems.opens}
                CClicks={cItems.clicks}
                showAlert={showAlertCT}
                />                    
              ))}
            </Fragment>
          </tbody>
        }
      </table>
      <div className={classes.pagination}>
        <Pagination page={page} leftArrowClickHandler={leftArrowClickHandler} rightArrowClickHandler={rightArrowClickHandler}/>
      </div>
    </Fragment>
  );
};

export default SentTable;

