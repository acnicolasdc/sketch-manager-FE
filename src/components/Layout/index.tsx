import React from 'react';
import { LayoutStyle,ImageStyle } from './Layout.style';
import conEdison_logo from '../../assets/icons/conEdison_logo.png'



const Layout = (props: any) => {
    return (
        <LayoutStyle>
<<<<<<< HEAD
            
                    <ImageStyle src={conEdison_logo} alt="conEdison logo" width="180"/>            
            
=======
                    <ImageStyle src={conEdison_logo} alt="conEdison logo" width="180"/>            
>>>>>>> 2c1db49c438afaf5acee82dfd025b1062aa31461
                {props.children}
        </LayoutStyle>
    )
}
export default Layout


