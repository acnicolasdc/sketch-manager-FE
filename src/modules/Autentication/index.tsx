import React  from 'react'
import { Layout } from '../../pages/Login/Login.style';
import conEdison_logo from '../../assets/icons/conEdison_logo.png';
import Form from './microModules/Form';

const Autentication = () => {
    return (
        <Layout>
            <figure className='image__container'>
                <img src={conEdison_logo} alt="conEdison logo" width="180" />
            </figure> 
                <Form/>
        </Layout>       
    )
}

export default Autentication


