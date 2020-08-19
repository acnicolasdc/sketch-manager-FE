import React from 'react'
// import Autentication from "modules/Layout/components";
import { GeneralSection } from './Login.style';
import { LoginSection } from './Login.style';
import Form from '../../modules/Form/components/index';
import Layout from 'modules/Layout/components';

const Login = () => {
    return (
        <GeneralSection>
            <LoginSection> 
                    <Layout children = {<Form/>}/>
            </LoginSection>
        </GeneralSection>
    )
}

export default Login

