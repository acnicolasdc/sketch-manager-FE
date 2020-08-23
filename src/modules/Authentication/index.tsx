
import React, { useContext, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Notification, KIND } from 'baseui/notification';
import { Input } from "baseui/input";
import { Button } from "baseui/button";
import { AuthenticationSection } from './Authenticacion.style';
import { SessionContext } from 'providers/session';
import { loginRequest } from 'redux/thunks/auth.thunk';

const Authentication = () => {

    const [user, setUser] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [error, setError] = useState<boolean>(false);
    const { createSession } = useContext(SessionContext);
    const dispatch = useDispatch();
    const { fetching } = useSelector((state: any) => state.get('auth').toObject());

    const handleDisable = (): boolean => {
        if (user === '' || password === '') return true
        return false
    }

    const resetFields = () => {
        setUser("");
        setPassword("");
    }

    const handleClick = async () => {
        const userData = await loginRequest(dispatch, { username: user, password });
        if (Object.prototype.hasOwnProperty.call(userData, "error")) {
            setError(true);
            resetFields();
        } else {
            createSession(userData);
        }
    };

    return (
        <AuthenticationSection>
            {error &&
                <Notification kind={KIND.negative}>
                    Authenticacion Failed
                </Notification>
            }
            <Input
                value={user}
                onChange={event => {
                    setUser(event.currentTarget.value);
                    if (error) setError(false);
                }}
                type="text"
                placeholder="User"
                error={error}
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
                onChange={event => {
                    setPassword(event.currentTarget.value)
                    if (error) setError(false);
                }}
                placeholder="Password"
                type="password"
                error={error}
                overrides={{
                    Root: {
                        style: ({ $theme }) => {
                            return {
                                marginBottom: `15px`,
                            };
                        }
                    }
                }}
            />

            <Button type="submit" disabled={handleDisable() || fetching} onClick={handleClick}
                isLoading={fetching}
                overrides={{ BaseButton: { style: { width: "100%" } } }}>LOGIN
            </Button>
        </AuthenticationSection>
    )
}

export default Authentication
