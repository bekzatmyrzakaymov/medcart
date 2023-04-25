import setNotificationStyle from "../css/setnotification.module.css";
import {Switch} from 'react-switch-input';


function NoteSwitchBlock() {
    return (
        <div className={setNotificationStyle.itemBlock}>
            <div className={setNotificationStyle.itemName}>
                Type of allow
            </div>
            <div className={setNotificationStyle.itemAction}>
                <Switch/>
            </div>
        </div>
    )
}

export default NoteSwitchBlock;