import React from 'react';
import { LayoutStyle,ImageStyle } from './Layout.style';
import conEdison_logo from '../../assets/icons/conEdison_logo.png'



const Layout = (props: any) => {
    return (
        <LayoutStyle>
            
                    <ImageStyle src={conEdison_logo} alt="conEdison logo" width="180"/>            
            
                {props.children}
        </LayoutStyle>
    )
}
export default Layout


