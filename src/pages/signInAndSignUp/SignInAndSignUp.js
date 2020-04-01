import React from 'react';
import './SignInAndSignUp.style.scss';
import SignIn from '../../component/signin/SignIn'
import SignUp from '../../component/signup/Signup'


const SignInAndSignUp =()=>{
    return(
        <div className='sign-in-and-sign-up'>
            <SignIn/>
            <SignUp/>
        </div>
    )
}

export default SignInAndSignUp;