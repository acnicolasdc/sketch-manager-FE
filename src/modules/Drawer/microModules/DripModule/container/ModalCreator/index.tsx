import * as React from 'react';
import { useSelector } from "react-redux";
import { PinCode } from 'baseui/pin-code';
import { Select } from "baseui/select";
import { Heading, HeadingLevel } from "baseui/heading";
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalButton,
  FocusOnce,
} from 'baseui/modal';
import {
  OPTIONS_TYPES_MATERIAL,
  OPTIONS_TYPES_SIZE,
  DRIP_HAS_BEEN,
} from "../../../../utils/assets";
import { CIRCLE } from '../../../../utils/assets';
import { Circle } from '../../../../utils/_';
import { StoreContext } from '../../../../providers/Store';
import { Row } from "./ModalCreator.style";

const FAKE_FN = () => { };

export interface ModalCreatorProps {
  cancell?: () => void;
  isOpen?: boolean;
};

export enum ReducerDrip {
  setValue = "value",
  setSizev = "sizev",
  setSize = "size",
  setMaterial = "material",
  setMaterialv = "materialv",
  setHasBeen = "hasbeen",
  setAll = "all",
}
type InitialState = {
  value: any[];
  sizev: any[];
  size: any[];
  material: any[];
  materialv: any[];
  hasBeen: any[];
};
const initialState: InitialState = {
  value: Array(5).fill(""),
  sizev: [],
  size: [],
  material: [],
  materialv: [],
  hasBeen: [],
};

const reducer = (state: any, action: any): InitialState => {  
  switch (action.type) {
    case ReducerDrip.setValue:
      return { ...state, value: action.value };
    case ReducerDrip.setMaterial:
      return { ...state, material: action.value };
    case ReducerDrip.setMaterialv:
      return { ...state, materialv: action.value };
    case ReducerDrip.setSize:
      return { ...state, size: action.value };
    case ReducerDrip.setSizev:
      return { ...state, sizev: action.value };
    case ReducerDrip.setHasBeen:
      return { ...state, hasBeen: action.value };
    case ReducerDrip.setAll:
      return {
        ...state,
        ...action.value,
      };
    default:
      throw new Error();
  }
};

const ModalCreator: React.FunctionComponent<ModalCreatorProps> = ({ cancell = FAKE_FN, isOpen = false }) => {

  const {
    material: pfmaterial,
    size: pfSize,
  } = useSelector((state: any) => state.get("pipeForm").toObject());

  const [
    { value, sizev, size, materialv, material, hasBeen },
    dispatch,
  ] = React.useReducer(reducer, initialState);

  const { addDrips, drips } = React.useContext(StoreContext);

  React.useEffect(() => {
    dispatch({
      type: ReducerDrip.setAll,
      value: {
        materialv: pfmaterial,
        material: pfmaterial,
        sizev: pfSize,
        size: pfSize,
      },
    });
  }, [pfmaterial, pfSize]);

  const addDrip = () => {
    const newDrips: Circle = { ...CIRCLE, id: `rect-code-drip-${drips.length}`, code: `D#${value.join('')}` };
    dispatch({ type: ReducerDrip.setValue, value: Array(5).fill("") });
    addDrips(newDrips);
    cancell();
  }
  const formVerification = (): boolean => {
    if (material.length === 0) return true;
    if (hasBeen.length === 0) return true;
    if (size.length === 0 || sizev.length === 0) return true;
    if (materialv.length === 0 || value.join("").length < 5) return true;
    return false;
  };
  return (
    <Modal onClose={cancell} isOpen={isOpen} unstable_ModalBackdropScroll={true}>
      <FocusOnce>
        <ModalHeader>Create a Drip</ModalHeader>
      </FocusOnce>
      <ModalBody>
        <HeadingLevel>
          <Heading styleLevel={6}>Drip Number</Heading>
        </HeadingLevel>
        <PinCode
          values={value}
          onChange={({ values }) =>
            dispatch({ type: ReducerDrip.setValue, value: values })
          }
        />
        <Select
          options={DRIP_HAS_BEEN}
          value={hasBeen}
          placeholder="Drip has been"
          onChange={(params: any) =>
            dispatch({ type: ReducerDrip.setHasBeen, value: params.value })
          }
          overrides={{
            Root: {
              style: {
                marginBottom: '10px',
                marginTop: '10px'
              }
            }
          }}
        />
                <HeadingLevel>
          <Heading
            styleLevel={6}
            overrides={{
              Block: {
                style: {
                  marginBottom: "5px",
                },
              },
            }}
          >
            Main
          </Heading>
        </HeadingLevel>
        <Row>
          <Select
            options={OPTIONS_TYPES_MATERIAL}
            value={material}
            placeholder="Select main drip material"
            onChange={(params: any) =>
              dispatch({ type: ReducerDrip.setMaterial, value: params.value })
            }
          />
          <Select
            options={OPTIONS_TYPES_SIZE}
            value={size}
            placeholder="Select main drip size"
            onChange={(params: any) =>
              dispatch({ type: ReducerDrip.setSize, value: params.value })
            }
          />
        </Row>
        <HeadingLevel>
          <Heading
            styleLevel={6}
            overrides={{
              Block: {
                style: {
                  marginBottom: "5px",
                },
              },
            }}
          >
            Pot
          </Heading>
        </HeadingLevel>
        <Row>
          <Select
            options={OPTIONS_TYPES_MATERIAL}
            value={materialv}
            placeholder="Select drip pot material"
            onChange={(params: any) =>
              dispatch({ type: ReducerDrip.setMaterialv, value: params.value })
            }
          />
          <Select
            options={OPTIONS_TYPES_SIZE}
            value={sizev}
            placeholder="Select drip pot size"
            onChange={(params: any) =>
              dispatch({ type: ReducerDrip.setSizev, value: params.value })
            }
          />
        </Row>
      </ModalBody>
      <ModalFooter>
        <ModalButton
          kind="tertiary"
          onClick={cancell}
        >
          Close 
          </ModalButton>
        <ModalButton autoFocus onClick={addDrip} disabled={formVerification()}>
          Create
          </ModalButton>
      </ModalFooter>
    </Modal>
  );
}

export default ModalCreator;