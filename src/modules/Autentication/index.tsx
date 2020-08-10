import React from 'react'
import {FormSection} from '../../pages/Login/Login.style';


const Autentication = () => {
    return (
        <FormSection>
                <input className="login__container--form-input " type="text"  placeholder="UserName"/>
                <input className="login__container--form-input " type="password"  placeholder="Password" />
                <button className="button"><a href="./Home.html">LOGIN</a></button>  
        </FormSection>
    )
}

export default Autentication


