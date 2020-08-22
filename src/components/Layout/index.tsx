import React from 'react';
import { LayoutStyle,ImageStyle } from './Layout.style';
import conEdison_logo from '../../assets/icons/conEdison_logo.png'


export interface LayoutProps {
    children?: any;
};

const Layout:React.FunctionComponent <LayoutProps> = ({children}) => {
        
    return (
        <LayoutStyle>
                <ImageStyle src={conEdison_logo} alt="conEdison logo" width="180"/>            
                {children}
        </LayoutStyle>
        
    )
}
export default Layout


