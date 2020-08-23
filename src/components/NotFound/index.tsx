import React from 'react'
import horizontalLogin from '../../assets/icons/conEdison_horizontal.png';
import {LogoContainer,GeneralSection, ImgStyle } from './NotFound.style';


const NotFound = () => {
    return (
        <GeneralSection>
        <LogoContainer>
            <ImgStyle src={horizontalLogin} alt="ConEdison Logo"/>
        </LogoContainer>
        </GeneralSection>
    )
}

export default NotFound
