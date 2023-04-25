import menuStyle from './style/menu.module.css'
import {Link} from "react-router-dom";
import {menuArr} from "./MenuArr";
import {useLocation} from "react-router-dom/cjs/react-router-dom";

let Menu = () => {
    let location = useLocation()
    let nav = menuArr.map((menu) => {
        return <Link to={menu.link}>
            <li className={[menuStyle.item, location.pathname === menu.link ? menuStyle.active : ''].join(' ')}>
                <div></div>
                <div>
                    {menu.icon}
                </div>
                <div className={menuStyle.itemName}>{menu.name}</div>
                <div></div>
            </li>
        </Link>
    })
    return (
        <div className={menuStyle.menu}>
            <ul className={menuStyle.list}>
                {nav}
            </ul>
        </div>
    )
}
export default Menu;