import React from 'react'
import { Input } from "baseui/input";
import { Button } from "baseui/button";
import { FormSection } from '../../pages/Login/Login.style';
import { StyledBody } from "baseui/card";


const Autentication = () => {
    
    const inputRef = React.useRef<HTMLInputElement>(null);

    return (
        <FormSection>
            <StyledBody>
                <Input
                inputRef={inputRef}
                    type ="text"
                    placeholder="User Name"
                    overrides={{
                        Root: {
                            style: ({ $theme }) => {
                                return {
                                    margin:`10px 0`,
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
                                margin:`10px 0`,
                            };
                        }
                    }
                }}
                />
            </StyledBody>

            <StyledBody>
                <Button
                    onClick={() => inputRef.current && inputRef.current.focus()}
                    overrides={{ BaseButton: { style: { width: "110%" } } }}>LOGIN
                </Button>
            </StyledBody>
        </FormSection>
    )
}

export default Autentication


