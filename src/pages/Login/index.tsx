import React from 'react'
import Autentication from "modules/Autentication/components";
import { GeneralSection } from './Login.style';
import { LoginSection } from './Login.style';
import Form from '../../modules/Form/Components/index';

const Login = () => {
    return (
        <GeneralSection>
            <LoginSection> 
                    <Autentication children = {<Form/>}/>
            </LoginSection>
        </GeneralSection>
    )
}

export default Login

