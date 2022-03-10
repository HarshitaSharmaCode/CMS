import { useDispatch } from 'react-redux';
import { buttonActions } from '../store/CCbutton-slice'
import classes from './CreateCampaignBtn.module.css';

const CreateCampaignBtn = props => {

    const dispatch = useDispatch();

    const toggleButtonHandler = () => {
        dispatch(buttonActions.toggle());
    };

    return(
        <button className={classes.button} onClick={ toggleButtonHandler }>
            Create Campaign
        </button>
    );
}
export default CreateCampaignBtn;