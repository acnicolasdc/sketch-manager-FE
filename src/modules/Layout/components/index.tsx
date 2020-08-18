import React  from 'react'
import { LayoutStyle } from '../../../pages/Login/Login.style';
import conEdison_logo from '../../../assets/icons/conEdison_logo.png';

const Layout = (props:any) => {
    return (
        <LayoutStyle>
            <figure className='image__container'>
                <img src={conEdison_logo} alt="conEdison logo" width="180" />
            </figure> 
            <section className = "children__container">
                {props.children}
            </section> 
        </LayoutStyle>       
    )
}

export default Layout


