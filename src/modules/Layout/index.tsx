import React from 'react';
import { LayoutStyle } from './Layout.style';
import { ImageStyle } from './Layout.style';

import conEdison_logo from '../../assets/icons/conEdison_logo.png'



const Layout = (props: any) => {
    return (
        <LayoutStyle>
            <figure>
                <ImageStyle>
                    <img className = 'image__container--details' 
                    src={conEdison_logo} alt="conEdison logo" width="180"/>
                </ImageStyle>
            </figure>
            <section className="children__container">
                {props.children}
            </section>
        </LayoutStyle>
    )
}

export default Layout


