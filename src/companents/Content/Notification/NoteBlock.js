import NoteStyle from './css/Notification.module.css'
import ActionButtons from "./ActionButtons";

function NoteBlock(){
    return(
        <div className={NoteStyle.noteBlock}>
            <div></div>
            <div>
            <div className={NoteStyle.header}>
                <div className={NoteStyle.noteTitle}>Time for drugs</div>
                <div className={NoteStyle.datetime}> <span>22:17</span><span>26.02.2023</span></div>
            </div>
            <div className={NoteStyle.noteDescription}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam amet architecto debitis eius illo natus nostrum rem suscipit. At eius expedita explicabo ipsum laborum quae repellendus sed tempore veritatis vitae.</div>
            <div className={NoteStyle.actions}>
                <ActionButtons />
            </div>
            </div>
            <div></div>
        </div>
    )
}
export default NoteBlock;