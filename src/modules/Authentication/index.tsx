import React, { useState, useRef } from 'react'
import { Input } from "baseui/input";
import { Button } from "baseui/button";
import { AuthenticationSection } from './Authenticacion.style';
import Ticket from 'modules/Ticket/components';
import { useHistory } from 'react-router';




const Authentication = () => {

    const [user, setUser] = useState<string>("");
    const [password, setPassword] = useState<string>("");
<<<<<<< HEAD
    const history = useHistory();
    const inputRef = useRef<HTMLInputElement>(null);
=======

>>>>>>> dfa4f040286a77b19ea1844f50055ff27b0065b3

    const handleDisable = (): boolean => {
        if (user === '' || password === '') return true
        return false
    }

    const handleClick = ():any => {
        history.push('/Ticket');
    };

    return (
        <AuthenticationSection>
            <Input
                value={user}
                onChange={event => setUser(event.currentTarget.value)}
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
                value={password}
                onChange={event => setPassword(event.currentTarget.value)}
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

            <Button type="submit" disabled={handleDisable()}
<<<<<<< HEAD
                onClick={handleClick}
                overrides={{ BaseButton: { style: { width: "80%" } } }}>LOGIN
=======
                overrides={{ BaseButton: { style: { width: "100%" } } }}>LOGIN
>>>>>>> dfa4f040286a77b19ea1844f50055ff27b0065b3
            </Button>
        </AuthenticationSection>
    )
}

export default Authentication
