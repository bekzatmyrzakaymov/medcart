import signInStyle from './css/signIn.module.css'
import welcome_img_sign_in from './imgs/medical-records-request.png'
import ThirdStep from "./ThirdStep";

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
                        <div className={signInStyle.title}>Sign Up</div>
                        <form className={signInStyle.form}>
                            <ThirdStep/>
                            <div className={signInStyle.error}>Incorrect email address</div>
                            <div className={signInStyle.otherAction}><a href='#'>Sign In</a></div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignIn;