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
import { RECT } from '../../../../utils/assets';
import { Rect } from '../../../../utils/_';
import { StoreContext } from '../../../../providers/Store'

const FAKE_FN = () => {};

export interface ModalCreatorProps {
    accept?: () => void;
    cancell?: () => void;
    isOpen?: boolean;
};

const ModalCreator: React.FunctionComponent<ModalCreatorProps> = ({accept=FAKE_FN, cancell=FAKE_FN, isOpen= false}) => {
const [value, setValue] = React.useState([]);
const { addReact, rectangles } = React.useContext(StoreContext);
const addRectangle = () => {
  const newRect:Rect = {...RECT, id:`rect-code-${rectangles.length}`};
    addReact(newRect);
    setValue([]);
    cancell();
  }
  console.log(value)
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
          <ModalButton autoFocus onClick={addRectangle} disabled={value.length === 0}>
            Create
          </ModalButton>
        </ModalFooter>
      </Modal>
  );
}

export default ModalCreator;