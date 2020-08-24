import React from 'react'
import { GeneralSection,LoginSection, SloganStyle,PointStyle } from './Login.style';
import Authentication from '../../modules/Authentication';
import Layout from '../../components/Layout';


const Login = () => {
    return (
        <GeneralSection> 
            <LoginSection> 
                    <Layout>
                        <PointStyle>.........................</PointStyle>
                        <SloganStyle>EVERYTHING MATTERS</SloganStyle>
                            <Authentication/>
                    </Layout>
            </LoginSection>
        </GeneralSection>
    )
}

export default Login

