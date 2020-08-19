import React, {useState, useRef} from 'react'
import { Input } from "baseui/input";
import { Button } from "baseui/button";
import { TicketSection } from 'pages/Ticket/Ticket.style';

const Ticket = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [pin, setPin] = useState<string>("");
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const inputRef = useRef<HTMLInputElement>(null);


    const handleDisable = (): boolean => {
        if (pin === '') return true
        return false
    }
    
    return (
        <TicketSection>
            <section className= 'login__container' >
            <Input
                value={pin}
                onChange={event => setPin(event.currentTarget.value)}
                inputRef={inputRef}
                placeholder="Ticket Number"
            />
            
            <Button type="submit" disabled={handleDisable()}
                // onClick={() => inputRef.current && inputRef.current.focus()}
                overrides={{ BaseButton: { style: { width: "80%" } } }}>NEXT
            </Button>
            </section>

        </TicketSection>

    )
}

export default Ticket
