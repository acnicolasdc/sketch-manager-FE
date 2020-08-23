import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { validTicketServicesRequest } from 'redux/thunks/validTicket.thunk';
import { Input } from "baseui/input";
import { Button } from "baseui/button";
import {
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    ModalButton,
    FocusOnce,
  } from 'baseui/modal';
import { useHistory } from 'react-router';
import { TicketSection } from './Ticket.style';

const Ticket = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [pin, setPin] = useState<string>("");
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [error, setError] = useState<boolean>(false);
    const [errorMessage, setErrorMessage] = useState<String>("");
    const [isOpen, setOpen] = useState<boolean>(false);    

    const history = useHistory();
    const dispatch = useDispatch();

    const { fetching } = useSelector((state: any) => state.get('validTicket').toObject());

    const handleClick = async () => {
        const ticketData = await validTicketServicesRequest(dispatch, { number: pin });
        console.log('ticketData', ticketData)
        if (Object.prototype.hasOwnProperty.call(ticketData, "error")) {
            setErrorMessage(ticketData.error);
            setError(true);
            setOpen(true);
            resetFields();
        } else {
            history.push('/Sketch');
        }
    }

    const resetFields = () => {
        setPin("");
    }

    const handleDisable = (): boolean => {
        if (pin === '') return true
        return false
    }

    return (
        <TicketSection>
            {error &&
                <Modal onClose={() => setOpen(false)} isOpen={isOpen}>
                <FocusOnce>
                  <ModalHeader>Oops! Something happened to your search</ModalHeader>
                </FocusOnce>
                <ModalBody>
                  {errorMessage}
                </ModalBody>
                <ModalFooter>
                  <ModalButton
                    kind="tertiary"
                    onClick={() => setOpen(false)}
                  >
                    Cancel
                  </ModalButton>
                  <ModalButton autoFocus onClick={() => {
                      setOpen(false);
                      history.push('/Sketch');
                    }}>
                    Confirm
                  </ModalButton>
                </ModalFooter>
              </Modal>
            }
            <Input
                value={pin}
                onChange={event => setPin(event.currentTarget.value)}
                placeholder="Ticket Number"
                overrides={{
                    Root: {
                        style: ({ $theme }) => {
                            return {
                                marginBottom: `10px`,
                            };
                        }
                    }
                }}
            />
            <Button type="submit" disabled={handleDisable() || fetching}
                onClick={handleClick}
                isLoading={fetching}
                overrides={{ BaseButton: { style: { width: "100%" } } }}>NEXT
            </Button>
        </TicketSection>

    )
}

export default Ticket
