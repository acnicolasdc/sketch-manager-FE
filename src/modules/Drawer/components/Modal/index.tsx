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

const FAKE_FN = () => {};

export interface ModalCreatorProps {
    accept?: () => void;
    cancell?: () => void;
    isOpen?: boolean;
};

const ModalCreator: React.FunctionComponent<ModalCreatorProps> = ({accept=FAKE_FN, cancell=FAKE_FN, isOpen= false}) => {
const [value, setValue] = React.useState([]);
  return (
      <Modal onClose={cancell} isOpen={isOpen}>
        <FocusOnce>
          <ModalHeader>Create a Pipe</ModalHeader>
        </FocusOnce>
        <ModalBody>
        <Select
            options={[
                { label: "PVC", id: "#F0F8FF" },
                { label: "Rigid", id: "#FAEBD7" },
                { label: "PEX", id: "#00FFFF" },
                { label: "Cast Iron", id: "#7FFFD4" },
            ]}
            value={value}
            placeholder="Select Type"
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
          <ModalButton autoFocus onClick={accept}>
            Create
          </ModalButton>
        </ModalFooter>
      </Modal>
  );
}

export default ModalCreator;