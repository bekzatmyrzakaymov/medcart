import NoteStyle from './css/Notification.module.css'

function ActionButtons(){
    return(
        <div className={NoteStyle.actionButtons}>
            <button className={NoteStyle.set_aside}>Set Aside</button>
            <button className={NoteStyle.done}>Done</button>
        </div>
    )
}

export default ActionButtons;