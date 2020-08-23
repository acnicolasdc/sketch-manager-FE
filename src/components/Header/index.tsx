import React from 'react';
import { HeaderStyle,ImageStyle } from './Header.style';
import conEdison_logo from '../../assets/icons/conEdison_logo.png'


export interface LayoutProps {
    children?: any;
};

const Header:React.FunctionComponent <LayoutProps> = ({children}) => {
        
    return (
        <HeaderStyle>
                <ImageStyle src={conEdison_logo} alt="conEdison logo" width="180"/>            
                {children}
        </HeaderStyle>
        
    )
}
export default Header
