<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 10776bfc95c1c0b2a31d3be92220e68798dbecec
import React, { useState} from 'react'
import { Input } from "baseui/input";
import { Button } from "baseui/button";
import { AuthenticationSection } from './Authenticacion.style';
<<<<<<< HEAD
import Ticket from 'modules/Ticket';
import { useHistory } from 'react-router';

=======
=======
import React, {useState} from 'react'
import { Input } from "baseui/input";
import { Button } from "baseui/button";
import { AuthenticationSection } from './Authenticacion.style';
import { useHistory } from 'react-router';

>>>>>>> 2c1db49c438afaf5acee82dfd025b1062aa31461
>>>>>>> 10776bfc95c1c0b2a31d3be92220e68798dbecec



const Authentication = () => {

    const [user, setUser] = useState<string>("");
    const [password, setPassword] = useState<string>("");
<<<<<<< HEAD
    const history = useHistory();

=======
<<<<<<< HEAD

=======
    const history = useHistory();
>>>>>>> 2c1db49c438afaf5acee82dfd025b1062aa31461
>>>>>>> 10776bfc95c1c0b2a31d3be92220e68798dbecec

    const handleDisable = (): boolean => {
        if (user === '' || password === '') return true
        return false
    }

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> 10776bfc95c1c0b2a31d3be92220e68798dbecec
    const handleClick = ():any => {
        history.push('/Ticket');
    };

<<<<<<< HEAD
=======
>>>>>>> 2c1db49c438afaf5acee82dfd025b1062aa31461
>>>>>>> 10776bfc95c1c0b2a31d3be92220e68798dbecec
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
<<<<<<< HEAD
                                margin: `10px 0`,
=======
<<<<<<< HEAD
                                margin: `10px 0`,
=======
                                marginBottom: `15px`,
>>>>>>> 2c1db49c438afaf5acee82dfd025b1062aa31461
>>>>>>> 10776bfc95c1c0b2a31d3be92220e68798dbecec
                            };
                        }
                    }
                }}
            />
<<<<<<< HEAD

            <Button type="submit" disabled={handleDisable()}
                onClick={handleClick}
                overrides={{ BaseButton: { style: { width: "100%" } } }}>LOGIN
=======
<<<<<<< HEAD

            <Button type="submit" disabled={handleDisable()}
            overrides={{ BaseButton: { style: { width: "100%" } } }}>LOGIN
=======
            <Button type="submit" disabled={handleDisable()}
                onClick={handleClick}
                overrides={{ BaseButton: { style: { width: "100%" } } }}>LOGIN
>>>>>>> 2c1db49c438afaf5acee82dfd025b1062aa31461
>>>>>>> 10776bfc95c1c0b2a31d3be92220e68798dbecec
            </Button>
        </AuthenticationSection>
    )
}

export default Authentication
