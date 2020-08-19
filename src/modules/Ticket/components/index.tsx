import React, {useState, useRef} from 'react'
import { Input } from "baseui/input";
import { Button } from "baseui/button";


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
        <section>
            <div>
            <Input
                value={pin}
                onChange={event => setPin(event.currentTarget.value)}
                inputRef={inputRef}
                placeholder="Controlled Input"
            />
            </div>
            <div>
            <Button type="submit" disabled={handleDisable()}
                // onClick={() => inputRef.current && inputRef.current.focus()}
                overrides={{ BaseButton: { style: { width: "80%" } } }}>LOGIN
            </Button>
            </div>
        </section>

    )
}

export default Ticket
