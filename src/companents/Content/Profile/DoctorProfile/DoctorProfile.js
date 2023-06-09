import dcProfileStyle from '../style/doctorProfile.module.css'
import DcMainInfo from "./DcMainInfo";
import DcAbout from "./DcAbout";
import DcClinic from "./DcClinic";
import DcContacts from "./DcContacts";
import DcSchedule from "./DcSchedule";
import DcReviews from "./DcReviews";

function DoctorProfile() {
    return (
        <div className={dcProfileStyle.container}>
            <div></div>
            <div>
                <DcMainInfo/>
                <DcAbout/>
                <DcClinic/>
                <DcContacts/>
                <DcSchedule/>
                <DcReviews/>
            </div>
            <div></div>
        </div>
    )
}

export default DoctorProfile