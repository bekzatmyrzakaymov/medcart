import settingStyle from './css/setting.module.css'
import {Link} from "react-router-dom";

function SettingNav() {
    return (
        <div className={settingStyle.setMenuBlock}>
            <ul className={settingStyle.setMenu}>
                <li className={settingStyle.setMenuItem}><Link to="/settings/account">Account Service</Link></li>
                <li className={settingStyle.setMenuItem}><Link to="/settings/notification">Notification</Link></li>
                <li className={settingStyle.setMenuItem}><Link to="/settings/changePassword">Change Password</Link></li>
                <li className={settingStyle.setMenuItem}><Link to="/settings/integration">Email/Phone integration</Link>
                </li>
            </ul>

        </div>
    )
}

export default SettingNav;