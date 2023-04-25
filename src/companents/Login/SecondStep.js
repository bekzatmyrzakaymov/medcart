import signInStyle from "./css/signIn.module.css";


function SecondStep(){
    return(
        <div>
            <label className={signInStyle.label} htmlFor='fullname'>Fullname:</label>
            <input type='text' name='fullname' placeholder='Fullname' id='fullname'
                   className={signInStyle.input}/>

            <label className={signInStyle.label} htmlFor='phone'>Phone number:</label>
            <input type='text' name='phone' placeholder='+77*********' id='phone'
                   className={signInStyle.input}/>

            <label className={signInStyle.label} htmlFor='IIN'>IIN:</label>
            <input type='text' name='phone' placeholder='************' id='phone'
                   className={signInStyle.input}/>

            <button className={signInStyle.signInBtn}>Next</button>
        </div>
    )
}
export default SecondStep;