import signInStyle from "./css/signIn.module.css";


function FirstStep(){
    return(
        <div>
            <label className={signInStyle.label} htmlFor='userType'>User Type:</label>
            <select name='userType' id='userType'
                    className={signInStyle.input}>
                <option selected='selected'>I am Patient</option>
                <option>I am Doctor</option>
            </select>
            <button className={signInStyle.signInBtn}>Next Step</button>
        </div>
    )
}

export default FirstStep;