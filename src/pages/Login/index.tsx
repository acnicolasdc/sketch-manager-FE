import React from 'react'
import { GeneralSection,LoginSection } from './Login.style';
import Authentication from '../../modules/Authentication';
import Layout from '../../components/Layout';


const Login = () => {
    return (
        <GeneralSection> 
            <LoginSection> 
                    <Layout children = {<Authentication/>}/>
            </LoginSection>
        </GeneralSection>
    )
}

export default Login

