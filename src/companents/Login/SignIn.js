import signInStyle from './css/signIn.module.css'
import welcome_img_sign_in from './imgs/medical-records-request.png'

function SignIn() {
    return (
        <div className={signInStyle.pageContainer}>
            <div className={signInStyle.container}>
                <div className={signInStyle.imgGrid}>
                    <div className={signInStyle.imgBlock}>
                        <img src={welcome_img_sign_in} className={signInStyle.welcome_img}/>
                    </div>
                </div>
                <div className={signInStyle.formGrid}>
                    <div className={signInStyle.formBlock}>
                        <div className={signInStyle.title}>Sign In</div>
                        <form className={signInStyle.form}>
                            <label className={signInStyle.label} for='email'>Email:</label>
                            <input type='text' name='email' placeholder='Email' id='email'
                                   className={signInStyle.input}/>

                            <label className={signInStyle.label} for='password'>Password:</label>
                            <input type='password' name='password' placeholder='Password' id='password'
                                   className={signInStyle.input}/>

                            <input type='button' className={signInStyle.signInBtn} value='Sign In'/>
                            <div className={signInStyle.error}>Incorrect password</div>
                            <div className={signInStyle.otherAction}><a href='#'>Sign Up</a></div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignIn;