import * as React from 'react';
import {PinCode} from 'baseui/pin-code';
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalButton,
  FocusOnce,
} from 'baseui/modal';
import { CIRCLE } from '../../../../utils/assets';
import { Circle } from '../../../../utils/_';
import { StoreContext } from '../../../../providers/Store'

const FAKE_FN = () => {};

export interface ModalCreatorProps {
    cancell?: () => void;
    isOpen?: boolean;
};

const ModalCreator: React.FunctionComponent<ModalCreatorProps> = ({ cancell=FAKE_FN, isOpen= false }) => {
  const [value, setValue] = React.useState(Array(5).fill(''));
  const { addDrips, drips } = React.useContext(StoreContext);

  const addValve = () => {
    const newDrips: Circle = {...CIRCLE, id:`rect-code-drip-${drips.length}`, code:`D#${value.join('')}`};
    addDrips(newDrips);
    setValue(Array(5).fill(''));
    cancell();
  }
  return (
      <Modal onClose={cancell} isOpen={isOpen} unstable_ModalBackdropScroll={true}>
        <FocusOnce>
          <ModalHeader>Create a Drip</ModalHeader>
        </FocusOnce>
        <ModalBody>
        <PinCode
          values={value}
          onChange={({values}) => {
            setValue(values);
          }}
        />
        </ModalBody>
        <ModalFooter>
          <ModalButton
            kind="tertiary"
            onClick={cancell}
          >
            Close
          </ModalButton>
          <ModalButton autoFocus onClick={addValve}>
            Create
          </ModalButton>
        </ModalFooter>
      </Modal>
  );
}

export default ModalCreator;