import React, {useState} from 'react'
import { Input } from "baseui/input";
import { Button } from "baseui/button";
import { useHistory } from 'react-router';
import {TicketSection} from './Ticket.style';

const Ticket = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [pin, setPin] = useState<string>("");

    const history = useHistory();
    
    const handleClick = ():any => {
        history.push('/Sketch');
    }

    const handleDisable = (): boolean => {
        if (pin === '') return true
        return false
    }
    
    return (
            <TicketSection>
            <Input
                value={pin}
                onChange={event => setPin(event.currentTarget.value)}
                placeholder="Ticket Number"
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
            
            
            <Button type="submit" disabled={handleDisable()}
                onClick={handleClick}
                overrides={{ BaseButton: { style: { width: "100%" } } }}>NEXT
            </Button>
            </TicketSection>
        
    )
}

export default Ticket
