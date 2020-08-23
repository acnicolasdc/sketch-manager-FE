import React, { useReducer, useEffect } from "react";
import { useSelector } from "react-redux";
import { Select } from "baseui/select";
import { PinCode } from "baseui/pin-code";
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalButton,
  FocusOnce,
} from "baseui/modal";
import { Heading, HeadingLevel } from "baseui/heading";
import {
  CIRCLE,
  OPTIONS_TYPES_MATERIAL,
  OPTIONS_TYPES_PRESSURE,
  OPTIONS_TYPES_SIZE,
  VALVE_HAS_BEEN,
  VALVE_TYPES,
} from "../../../../utils/assets";
import { Circle } from "../../../../utils/_";
import { StoreContext } from "../../../../providers/Store";
import { Row } from "./ModalCreator.style";

const FAKE_FN = () => {};

export interface ModalCreatorProps {
  cancell?: () => void;
  isOpen?: boolean;
}

export enum ReducerValve {
  setValue = "value",
  setPressure = "pressure",
  setSizev = "sizev",
  setSize = "size",
  setMaterial = "material",
  setMaterialv = "materialv",
  setType = "type",
  setHasBeen = "hasbeen",
  setAll = "all",
}
type InitialState = {
  value: any[];
  pressure: any[];
  sizev: any[];
  size: any[];
  material: any[];
  materialv: any[];
  type: any[];
  hasBeen: any[];
};
const initialState: InitialState = {
  value: Array(5).fill(""),
  pressure: [],
  sizev: [],
  size: [],
  material: [],
  materialv: [],
  type: [],
  hasBeen: [],
};

const reducer = (state: any, action: any): InitialState => {
  switch (action.type) {
    case ReducerValve.setMaterial:
      return { ...state, material: action.value };
    case ReducerValve.setValue:
      return { ...state, value: action.value };
    case ReducerValve.setPressure:
      return { ...state, pressure: action.value };
    case ReducerValve.setSizev:
      return { ...state, sizev: action.value };
    case ReducerValve.setSize:
      return { ...state, size: action.value };
    case ReducerValve.setMaterialv:
      return { ...state, materialv: action.value };
      case ReducerValve.setType:
        return { ...state, type: action.value };
      case ReducerValve.setHasBeen:
        return { ...state, hasBeen: action.value };
    case ReducerValve.setAll:
      return {
        ...state,
        ...action.value,
      };
    default:
      throw new Error();
  }
};

const ModalCreator: React.FunctionComponent<ModalCreatorProps> = ({
  cancell = FAKE_FN,
  isOpen = false,
}) => {
  const {
    material: pfmaterial,
    pressure: pfPressure,
    size: pfSize,
  } = useSelector((state: any) => state.get("pipeForm").toObject());
  const [
    { pressure, sizev, size, materialv, material, value, type, hasBeen },
    dispatch,
  ] = useReducer(reducer, initialState);
  const { addValves, valves } = React.useContext(StoreContext);
  useEffect(() => {
    dispatch({
      type: ReducerValve.setAll,
      value: {
        materialv: pfmaterial,
        material: pfmaterial,
        pressure: pfPressure,
        sizev: pfSize,
        size: pfSize,
      },
    });
  }, [pfmaterial, pfPressure, pfSize]);
  const addValve = () => {
    const newValves: Circle = {
      ...CIRCLE,
      id: `rect-code-valve-${valves.length}`,
      code: `V#${value.join("")}`,
    };
    addValves(newValves);
    dispatch({ type: ReducerValve.setValue, value: Array(5).fill("") });
    cancell();
  };
  const formVerification = (): boolean => {
    if (material.length === 0 || pressure.length === 0) return true;
    if (type.length === 0 || hasBeen.length === 0) return true;
    if (size.length === 0 || sizev.length === 0) return true;
    if (materialv.length === 0 || value.join("").length < 5) return true;
    return false;
  };

  return (
    <Modal
      onClose={cancell}
      isOpen={isOpen}
      unstable_ModalBackdropScroll={true}
    >
      <FocusOnce>
        <ModalHeader>Create a Valve</ModalHeader>
      </FocusOnce>
      <ModalBody>
      <HeadingLevel>
          <Heading styleLevel={6}>Code</Heading>
        </HeadingLevel>
      <PinCode
          values={value}
          onChange={({ values }) =>
            dispatch({ type: ReducerValve.setValue, value: values })
          }
        />

        <Select
            options={VALVE_HAS_BEEN}
            value={hasBeen}
            placeholder="Valve has been"
            onChange={(params: any) =>
              dispatch({ type: ReducerValve.setHasBeen, value: params.value })
            }
            overrides={{
              Root:{
                style:{
                  marginBottom:'10px',
                  marginTop:'10px'
                }
              }
            }}
          />
        <Row>
          <Select
            options={VALVE_TYPES}
            value={type}
            placeholder="Select valve type"
            onChange={(params: any) =>
              dispatch({ type: ReducerValve.setType, value: params.value })
            }
          />
          <Select
            options={OPTIONS_TYPES_PRESSURE}
            value={pressure}
            placeholder="Select pressure"
            onChange={(params: any) =>
              dispatch({ type: ReducerValve.setPressure, value: params.value })
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
            Valve
          </Heading>
        </HeadingLevel>
        <Row>
          <Select
            options={OPTIONS_TYPES_SIZE}
            value={sizev}
            placeholder="Select valve size"
            onChange={(params: any) =>
              dispatch({ type: ReducerValve.setSizev, value: params.value })
            }
          />
          <Select
            options={OPTIONS_TYPES_MATERIAL}
            value={materialv}
            placeholder="Select valve material"
            onChange={(params: any) =>
              dispatch({ type: ReducerValve.setMaterialv, value: params.value })
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
            Main
          </Heading>
        </HeadingLevel>
        <Row>
          <Select
            options={OPTIONS_TYPES_SIZE}
            value={size}
            placeholder="Select main size"
            onChange={(params: any) =>
              dispatch({ type: ReducerValve.setSize, value: params.value })
            }
          />
          <Select
            options={OPTIONS_TYPES_MATERIAL}
            value={material}
            placeholder="Select main material"
            onChange={(params: any) =>
              dispatch({ type: ReducerValve.setMaterial, value: params.value })
            }
          />
        </Row>
      </ModalBody>
      <ModalFooter>
        <ModalButton kind="tertiary" onClick={cancell}>
          Close
        </ModalButton>
        <ModalButton autoFocus onClick={addValve} disabled={formVerification()}>
          Create
        </ModalButton>
      </ModalFooter>
    </Modal>
  );
};

export default ModalCreator;
