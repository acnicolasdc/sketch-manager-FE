import React from 'react'
// import Autentication from "modules/Layout/components";
import { GeneralSection } from './Login.style';
import { LoginSection } from './Login.style';
import FormControl from '../../modules/FormControl';
import Layout from '../../modules/Layout';

const Login = () => {
    return (
        <GeneralSection>
            <LoginSection> 
                    <Layout children = {<FormControl/>}/>
            </LoginSection>
        </GeneralSection>
    )
}

export default Login

