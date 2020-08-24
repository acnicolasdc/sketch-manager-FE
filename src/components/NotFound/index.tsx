import React from 'react'
import horizontalLogin from '../../assets/icons/conEdison_horizontal.png';
import {LogoContainer,
    GeneralSection, 
    ImgStyle, 
    LeftDiv,
    RigthDiv,
    ImgNotFound,
    ContainerPage} from './NotFound.style';
import { StyledLink } from "baseui/link";
import imgNotFound from '../../assets/images/404.png';


const NotFound = () => {
    return (
    <GeneralSection>
        <LogoContainer>
            <ImgStyle src={horizontalLogin} alt="ConEdison Logo"/>
        </LogoContainer>
        <ContainerPage>
            <LeftDiv className = 'Title'>
                <div>
                    <h1>We are sorry. We couldn't find the page</h1>
                    <h3>We moved a lot of things, and your page must be lost between the changes. <br/>
                    Try re-entering the address or just go back to the home page.</h3>
                </div>
                <StyledLink href="/">Go back</StyledLink>
            </LeftDiv>
            <RigthDiv>
                <ImgNotFound src={imgNotFound} alt="404 NOT FOUND"/>
            </RigthDiv>
        </ContainerPage>
    </GeneralSection>
    )
}

export default NotFound
