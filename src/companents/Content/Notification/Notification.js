import NoteStyle from './css/Notification.module.css'
import NoteBlock from "./NoteBlock";
import {useSelector} from "react-redux";


function Notification() {
    let state = useSelector((state) => state.NoteReducer)
    return (
        <div className={NoteStyle.container}>
            <div></div>
            <div className={NoteStyle.noteContainer}>
                <NoteBlock/>
                <NoteBlock/>
                <NoteBlock/>
                <NoteBlock/>
                <NoteBlock/>
                <NoteBlock/>
                <NoteBlock/>
                <NoteBlock/>
            </div>
            <div></div>
        </div>
    )
}

export default Notification;