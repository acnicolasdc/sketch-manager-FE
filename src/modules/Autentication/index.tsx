import React, { useState, useRef } from 'react'
import { Input } from "baseui/input";
import { Button } from "baseui/button";
import { FormSection } from '../../pages/Login/Login.style';
import conEdison_logo from '../../assets/icons/conEdison_logo.png';


const Autentication = (props: any) => {
    
    const inputRef = React.useRef<HTMLInputElement>(null);

    return (
        <FormSection>
            <figure className='image__container'>
                <img src={conEdison_logo} alt="conEdison logo" width="180" />
            </figure>

            <Input
                inputRef={inputRef}
                type="text"
                placeholder="User"
                overrides={{
                    Root: {
                        style: ({ $theme }) => {
                            return {
                                margin: `10px 0`,
                            };
                        }
                    }
                }}
            />
            <Input
                inputRef={inputRef}
                placeholder="Password"
                type="password"
                overrides={{
                    Root: {
                        style: ({ $theme }) => {
                            return {
                                margin: `10px 0`,
                            };
                        }
                    }
                }}
            />

            <Button type = "submit" disabled 
                // onClick={() => inputRef.current && inputRef.current.focus()}
                overrides={{ BaseButton: { style: { width: "80%" } } }}>LOGIN
            </Button>
        </FormSection>
    )
}

export default Autentication


