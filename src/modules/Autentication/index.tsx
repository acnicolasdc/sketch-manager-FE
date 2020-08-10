import React from 'react'
import { Input } from "baseui/input";
import { Button } from "baseui/button";
import { FormSection } from '../../pages/Login/Login.style';
import { StyledBody, Card } from "baseui/card";


const Autentication = () => {
    return (
        <FormSection>
            <StyledBody>
                <Input placeholder="User Name" type="text" />
                <Input placeholder="Password" type="password" />
            </StyledBody>

            <StyledBody>
                <Button
                    overrides={{ BaseButton: { style: { width: "100%" } } }}>LOGIN</Button>
            </StyledBody>
        </FormSection>
    )
}

export default Autentication


