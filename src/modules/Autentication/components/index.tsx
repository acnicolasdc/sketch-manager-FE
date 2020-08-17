import React  from 'react'
import { Layout } from '../../../pages/Login/Login.style';
import conEdison_logo from '../../../assets/icons/conEdison_logo.png';

const Autentication = (props:any) => {
    return (
        <Layout>
            <figure className='image__container'>
                <img src={conEdison_logo} alt="conEdison logo" width="180" />
            </figure> 
            <section className = "children__container">
                {props.children}
            </section> 
        </Layout>       
    )
}

export default Autentication


