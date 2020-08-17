import React from 'react'
import Autentication from "modules/Autentication";
import { GeneralSection } from './Login.style';
import { LoginSection } from './Login.style';

const Login = () => {
    return (
        <GeneralSection>
            <LoginSection> 
                    <Autentication />
            </LoginSection>
        </GeneralSection>
    )
}

export default Login

