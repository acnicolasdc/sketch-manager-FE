import React from 'react'
import Autentication from "modules/Autentication";
import { GeneralSection } from './Login.style';
import { TitleSection } from './Login.style';
// import { HeaderSection } from './Login.style';
import { LoginSection } from './Login.style';
// import { FooterSection } from './Login.style'

const Login = () => {
    return (
        <GeneralSection>

            {/* <HeaderSection>
                <img className="header__img" src="" alt="Logo_edison" />
            </HeaderSection> */}

            <TitleSection>
                <h1 className="title__text">As-Con System</h1>
            </TitleSection>


            <LoginSection>
                <section className="login__container">
                    <figure className="login__container--image">
                        <img className="login--image" src={require("assets/icons/lock_icon.png")} alt="login_icon" />
                    </figure>
                    <Autentication />
                </section>
            </LoginSection>

            {/* <FooterSection>
                <a href="/">Con Edison Privacy Policy</a>
                <a href="/">© 2016 - 2019 Consolidated Edison Company of New York, Inc. All Rights Reserved.</a>
            </FooterSection> */}

        </GeneralSection>
    )
}

export default Login

