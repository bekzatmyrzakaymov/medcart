import setNotificationStyle from "../css/setnotification.module.css";


function NoteCheckBoxBlock() {
    return (
        <div className={setNotificationStyle.itemBlock}>
            <div className={setNotificationStyle.itemName}>
                Type of notification
            </div>
            <div className={setNotificationStyle.itemAction}>
                <input type='checkbox' className={setNotificationStyle.checkbox}/>
            </div>
        </div>
    )
}

export default NoteCheckBoxBlock;