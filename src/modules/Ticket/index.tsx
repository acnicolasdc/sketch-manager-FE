import React, {useState, useRef} from 'react'
import { Input } from "baseui/input";
import { Button } from "baseui/button";
import { useHistory } from 'react-router';

const Ticket = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [pin, setPin] = useState<string>("");
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const inputRef = useRef<HTMLInputElement>(null);
    const history = useHistory();
    
    const handleClick = ():any => {
        history.push('/Sketch');
    }

    const handleDisable = (): boolean => {
        if (pin === '') return true
        return false
    }
    
    return (
            <section className= 'ticket__container' >
            <Input
                value={pin}
                onChange={event => setPin(event.currentTarget.value)}
                inputRef={inputRef}
                placeholder="Ticket Number"
            />
            
            <Button type="submit" disabled={handleDisable()}
                onClick={handleClick}
                overrides={{ BaseButton: { style: { width: "100%" } } }}>NEXT
            </Button>
            </section>
        
    )
}

export default Ticket
