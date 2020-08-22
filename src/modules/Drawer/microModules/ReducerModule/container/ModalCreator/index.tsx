import * as React from 'react';
import { Select } from "baseui/select";
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalButton,
  FocusOnce,
} from 'baseui/modal';
import { TRIANGLE } from '../../../../utils/assets';
import { Trinagle } from '../../../../utils/_';
import { StoreContext } from '../../../../providers/Store'
import { OPTIONS_TYPES_SIZE } from './utils/assets';

const FAKE_FN = () => {};

export interface ModalCreatorProps {
    cancell?: () => void;
    isOpen?: boolean;
};

const ModalCreator: React.FunctionComponent<ModalCreatorProps> = ({ cancell=FAKE_FN, isOpen= false }) => {
  const [value, setValue] = React.useState<any[]>([]);
  const { addReducers, reducers } = React.useContext(StoreContext);

  const addReducer = () => {
    const newReducer: Trinagle = {...TRIANGLE, id:`rect-code-reducer-${reducers.length}`, value:`${value[0].label}`};
    addReducers(newReducer);
    setValue([]);
    cancell();
  }
  const formVerification = ():boolean => {
    if(value.length === 0)return true;
    return false;
  }
  return (
      <Modal onClose={cancell} isOpen={isOpen} unstable_ModalBackdropScroll={true}>
        <FocusOnce>
          <ModalHeader>Create a Reducer</ModalHeader>
        </FocusOnce>
        <ModalBody>
        <Select
              options={OPTIONS_TYPES_SIZE}
              value={value}
              placeholder="Select size"
              onChange={(params:any) => setValue(params.value)}
        />
        </ModalBody>
        <ModalFooter>
          <ModalButton
            kind="tertiary"
            onClick={cancell}
          >
            Close
          </ModalButton>
          <ModalButton autoFocus onClick={addReducer} disabled={formVerification()}>
            Create
          </ModalButton>
        </ModalFooter>
      </Modal>
  );
}

export default ModalCreator;