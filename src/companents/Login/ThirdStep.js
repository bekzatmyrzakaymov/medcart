import signInStyle from "./css/signIn.module.css";


function ThirdStep(){
    return(
        <div>
            <label className={signInStyle.label} htmlFor='email'>Email:</label>
            <input type='text' name='email' placeholder='Email' id='email' className={signInStyle.input}/>

            <label className={signInStyle.label} htmlFor='password'>Password:</label>
            <input type='password' name='password' placeholder='Password' id='password' className={signInStyle.input}/>

            <label className={signInStyle.label} htmlFor='re-pass'>Confirm password:</label>
            <input type='password' name='re-pass' placeholder='Password' id='re-pass' className={signInStyle.input}/>

            <button className={signInStyle.signInBtn}>Sign Up</button>
        </div>
    )
}

export default ThirdStep;