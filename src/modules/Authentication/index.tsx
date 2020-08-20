import React, { useState} from 'react'
import { Input } from "baseui/input";
import { Button } from "baseui/button";
import { AuthenticationSection } from './Authenticacion.style';



const Authentication = () => {

    const [user, setUser] = useState<string>("");
    const [password, setPassword] = useState<string>("");


    const handleDisable = (): boolean => {
        if (user === '' || password === '') return true
        return false
    }

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
            overrides={{ BaseButton: { style: { width: "100%" } } }}>LOGIN
            </Button>
        </AuthenticationSection>
    )
}

export default Authentication
