import { useDispatch } from 'react-redux';
import { uiActions } from '../store/ui-slice';
import { editActions } from '../store/editCampaign-slice';
import React from "react";
import classes from "./TableItems.module.css";
import Edit from '../Images/tableEdit.png'; 
import Delete from '../Images/tableDelete.png'; 


const TableItems = (props) => {

  const dispatch = useDispatch();

  const CId = props.CId;

  const onEditButtonHandler = () => {
    props.editButtonHandler(CId);
    console.log('Edit ID = ', CId);
    dispatch(uiActions.toggle());
    dispatch(editActions.toggle());
  };
  
  const onDeleteButtonHandler = ()  => {
    props.deleteButtonHandler(CId);
    console.log('Delete ID = ', CId);
    props.showAlert('Campaign Deleted!', 'success');
  };

  return (
    <tr className= {classes.trow}>
      <td>{props.CTitle}</td>
      <td>{props.CStatus}</td>
      <td>{props.COpens}</td>
      <td>{props.CClicks}</td>
      <td>
        <button className= {classes.button} onClick={onEditButtonHandler}><img src={Edit} alt=""/></button>
        <button className= {classes.button} onClick={onDeleteButtonHandler}><img src={Delete} alt=""/></button>
      </td>
    </tr>
  );
};
export default TableItems;
