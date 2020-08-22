import * as React from 'react';
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalButton,
  FocusOnce,
} from 'baseui/modal';
import { RadioGroup, Radio, ALIGN } from "baseui/radio";
import { COUPLING } from '../../../../utils/assets';
import { LineCoupling, CouplingEnum } from '../../../../utils/_';
import { StoreContext } from '../../../../providers/Store'
const FAKE_FN = () => {};

export interface ModalCreatorProps {
    cancell?: () => void;
    isOpen?: boolean;
};

const ModalCreator: React.FunctionComponent<ModalCreatorProps> = ({ cancell=FAKE_FN, isOpen= false }) => {
  const [value, setValue] = React.useState<string>('ji');
  const { addCoupling, couplings } = React.useContext(StoreContext);

  const addCouplings = () => {
    const text = value==='simple'?'':value;
    const newCoupling: LineCoupling = {...COUPLING, id:`rect-code-coypling-${couplings.length}`, text, type:value};
    addCoupling(newCoupling);
    setValue('');
    cancell();
  }

  return (
      <Modal onClose={cancell} isOpen={isOpen} unstable_ModalBackdropScroll={true}>
        <FocusOnce>
          <ModalHeader>Create a Coupling</ModalHeader>
        </FocusOnce>
        <ModalBody>
        <RadioGroup
          value={value}
          onChange={e => setValue(e.target.value)}
          name="coupling"
          align={ALIGN.horizontal}
        >
          <Radio value={CouplingEnum.tf}>TF</Radio>
          <Radio
            value={CouplingEnum.ij}
          >
            JI
          </Radio>
          <Radio value={CouplingEnum.uni}>Union</Radio>
          <Radio value={CouplingEnum.simple}>Simple</Radio>
        </RadioGroup>
 
        </ModalBody>
        <ModalFooter>
          <ModalButton
            kind="tertiary"
            onClick={cancell}
          >
            Close
          </ModalButton>
          <ModalButton autoFocus onClick={addCouplings} disabled={value === ''}>
            Create
          </ModalButton>
        </ModalFooter>
      </Modal>
  );
}

export default ModalCreator;