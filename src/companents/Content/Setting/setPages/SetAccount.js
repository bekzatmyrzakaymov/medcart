import setAccountStyle from '../css/setaccount.module.css'
import {Link} from "react-router-dom";
import profile_img from '../../../../assets/imgs/profile_img.jpg'

function SetAccount() {

    return (
        <div className={setAccountStyle.container}>
            <div className={setAccountStyle.frame}>
                <div className={setAccountStyle.mainInfo}>
                    <div className={setAccountStyle.photoBlock}>
                        <div className={setAccountStyle.photo}>
                            <img src={profile_img} alt={profile_img.name} className={setAccountStyle.Img}/>
                        </div>
                    </div>
                    <div className={setAccountStyle.fullNameBlock}>
                        <div className={setAccountStyle.fullName}>Kairat Nurtas</div>
                        <div className={setAccountStyle.changePhoto}><Link to='/changePhoto'>Change profile photo</Link>
                        </div>
                    </div>
                </div>
                <div className={setAccountStyle.otherInfo}>
                    <div className={setAccountStyle.formBlock}>
                        <form method='post' className={setAccountStyle.form}>
                            <label htmlFor="city" className={setAccountStyle.label}>City:</label>
                            <input className={setAccountStyle.input} id='city' value="Astana"/>
                            <label htmlFor="city" className={setAccountStyle.label}>Address:</label>
                            <input className={setAccountStyle.input} id='city' value="Mangilik el 52 B1"/>
                            <label htmlFor="city" className={setAccountStyle.label}>IIN:</label>
                            <input className={[setAccountStyle.input, setAccountStyle.closed].join(' ')} readOnly
                                   id='city'
                                   value="040815234566"/>

                            <input type='button' className={setAccountStyle.saveBtn} value='Save Changes'/>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default SetAccount;