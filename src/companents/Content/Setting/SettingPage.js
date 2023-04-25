import settingStyle from './css/setting.module.css'
import SettingNav from "./SettingNav";
import {Route} from "react-router-dom";
import SetAccount from "./setPages/SetAccount";
import SetNotification from "./setPages/SetNotification";
import SetPassword from "./setPages/SetPassword";
import SetIntegration from "./setPages/SetIntegration";

function SettingPage() {
    return (
        <div className={settingStyle.Container}>
            <div className={settingStyle.podContainer}>
                <div className={settingStyle.nav}>
                    <SettingNav/>
                </div>
                <div className={settingStyle.con}>
                    <Route exact path={['/settings/account', '/settings']}><SetAccount/></Route>
                    <Route path='/settings/notification'><SetNotification/></Route>
                    <Route path='/settings/changePassword'><SetPassword/></Route>
                    <Route path='/settings/integration'><SetIntegration/></Route>
                </div>
            </div>
        </div>
    )
}

export default SettingPage;