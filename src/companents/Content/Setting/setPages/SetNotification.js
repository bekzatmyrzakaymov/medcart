import setNotificationStyle from '../css/setnotification.module.css'
import NoteCheckBoxBlock from "./NoteCheckBoxBlock";
import NoteSwitchBlock from "./NoteSwitchBlock";

function SetNotification() {

    return (
        <div className={setNotificationStyle.container}>
            <div className={setNotificationStyle.checkBoxContainer}>
                <div className={setNotificationStyle.frame}>
                    <NoteCheckBoxBlock/>
                    <NoteCheckBoxBlock/>
                    <NoteCheckBoxBlock/>
                    <NoteCheckBoxBlock/>
                    <NoteCheckBoxBlock/>
                </div>
            </div>
            <div className={setNotificationStyle.switchContainer}>
                <div className={setNotificationStyle.frame}>
                    <NoteSwitchBlock/>
                    <NoteSwitchBlock/>
                    <NoteSwitchBlock/>
                    <NoteSwitchBlock/>
                    <NoteSwitchBlock/>
                </div>
            </div>
        </div>
    )

}

export default SetNotification;