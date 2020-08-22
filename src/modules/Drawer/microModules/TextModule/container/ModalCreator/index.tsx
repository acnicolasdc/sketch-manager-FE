import * as React from 'react';
import { Input } from "baseui/input";
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalButton,
  FocusOnce,
} from 'baseui/modal';
import { LABEL } from '../../../../utils/assets';
import { Label } from '../../../../utils/_';
import { StoreContext } from '../../../../providers/Store'

const FAKE_FN = () => {};

export interface ModalCreatorProps {
    cancell?: () => void;
    isOpen?: boolean;
};

const ModalCreator: React.FunctionComponent<ModalCreatorProps> = ({ cancell=FAKE_FN, isOpen= false }) => {
  const [value, setValue] = React.useState<string>('');
  const { addText, texts } = React.useContext(StoreContext);

  const addLabel = () => {
    const newLabel: Label = {...LABEL, id:`rect-code-text-${texts.length}`, text: value};
    addText(newLabel);
    setValue('');
    cancell();
  }

  return (
      <Modal onClose={cancell} isOpen={isOpen} unstable_ModalBackdropScroll={true}>
        <FocusOnce>
          <ModalHeader>Create a Label</ModalHeader>
        </FocusOnce>
        <ModalBody>
        <Input
          value={value}
          onChange={(e: any) => setValue(e.target.value)}
          placeholder="Label text"
        />
        </ModalBody>
        <ModalFooter>
          <ModalButton
            kind="tertiary"
            onClick={cancell}
          >
            Close
          </ModalButton>
          <ModalButton autoFocus onClick={addLabel} disabled={value === ''}>
            Create
          </ModalButton>
        </ModalFooter>
      </Modal>
  );
}

export default ModalCreator;