import React, { useReducer } from "react";
import { Table } from "baseui/table";
import { Modal, ModalHeader, ModalBody, SIZE, ROLE } from "baseui/modal";
import { Input } from "baseui/input";
import { RadioGroup, Radio, ALIGN } from "baseui/radio";
import { Checkbox, LABEL_PLACEMENT } from "baseui/checkbox";
import { StoreContext } from "../../providers/Store";
import {
  Row,
  Form,
  FormSectionCenter,
  RadioSection,
} from "./ModalCreator.style";
import { Heading, HeadingLevel } from "baseui/heading";
import { Paragraph3 } from "baseui/typography";
export interface InformationProps {
  isOpen?: boolean;
  cancell?: () => void;
}
export enum ReducerInformation {
  setPressure = "pressure",
  setNa2Air = "na2Ari",
  setDuration = "duration",
  setMaop = "maop",
  setMarkerB = "markerB",
  setMarkerB2 = "markerB2",
  setName = "name",
  setNamew = "namew",
  setEmp = "emp",
  setEmpw = "empw",
}

type InitialState = {
  pressure: string;
  duration: string;
  na2air: string;
  maop: boolean;
  mb: boolean;
  mb2: boolean;
  name: string;
  namew: string;
  emp: string;
  empw: string;
};
const initialState: InitialState = {
  pressure: "",
  duration: "",
  na2air: "",
  maop: false,
  mb: false,
  mb2: false,
  name: "",
  namew: "",
  emp: "",
  empw: "",
};

const reducer = (state: any, action: any): InitialState => {
  switch (action.type) {
    case ReducerInformation.setMaop:
      return { ...state, maop: action.value };
    case ReducerInformation.setNa2Air:
      return { ...state, na2air: action.value };
    case ReducerInformation.setPressure:
      return { ...state, pressure: action.value };
    case ReducerInformation.setDuration:
      return { ...state, duration: action.value };
    case ReducerInformation.setMarkerB:
      return { ...state, mb: action.value };
    case ReducerInformation.setMarkerB2:
      return { ...state, mb2: action.value };
    case ReducerInformation.setName:
      return { ...state, mb: action.value };
    case ReducerInformation.setNamew:
      return { ...state, mb2: action.value };
    case ReducerInformation.setEmp:
      return { ...state, mb: action.value };
    case ReducerInformation.setEmpw:
      return { ...state, mb2: action.value };
    default:
      throw new Error();
  }
};

const InformationModule: React.FunctionComponent<InformationProps> = ({
  isOpen = false,
  cancell = () => {},
}) => {
  const [
    { pressure, duration, na2air, maop, mb, mb2, name, namew, emp, empw },
    dispatch,
  ] = useReducer(reducer, initialState);
  const { rectangles } = React.useContext(StoreContext);
  const headerGenerator = (arrayRects: any[] = []): string[] => {
    const newHeader = arrayRects.map(
      (element, index) => `SEGMENT ${index + 1}`
    );
    const secondHEader = ["", ...newHeader];
    return secondHEader;
  };

  const groupBy = (keyGetter: (item: object, key: string) => void): any => {
    const map = new Map();
    rectangles.forEach((item: any) => {
      const size = keyGetter(item, "size");
      const material = keyGetter(item, "material");
      const pressure = keyGetter(item, "pressure");
      const method = keyGetter(item, "method");
      const year = keyGetter(item, "year");
      const key = `${size}/${material}/${pressure}/${method}/${year}`;
      const collection = map.get(key);
      if (!collection) {
        map.set(key, [item]);
      } else {
        collection.push(item);
      }
    });
    return map;
  };
  const sumStrings = (val: string, val2: string): number => {
    return parseInt(val, 10) + parseInt(val2, 10);
  };

  const dataGenerator = (): any => {
    const size = ["SIZE"];
    const year = ["YEAR"];
    const cover = ["COVER"];
    const length = ["LENGTH"];
    const material = ["MATERIAL"];
    const method = ["METHOD"];
    const pressure = ["PRESSURE"];
    const grouped = groupBy((item: any, key: string) => item.data[key]);
    const newGrouped: any = [];
    grouped.forEach((value: any[]) => {
      let newElement: any = {};
      value.forEach(({ data }: any) => {
        newElement = {
          ...data,
          length: newElement.length
            ? sumStrings(newElement.length, data.length)
            : parseInt(data.length),
        };
      });
      newGrouped.push(newElement);
    });
    const header = headerGenerator(newGrouped);
    newGrouped.forEach((data: any) => {
      Object.keys(data).forEach((key) => {
        switch (key) {
          case "size":
            size.push(data[key]);
            break;
          case "year":
            year.push(data[key]);
            break;
          case "cover":
            cover.push(data[key]);
            break;
          case "length":
            length.push(`${data[key]}'`);
            break;
          case "material":
            material.push(data[key]);
            break;
          case "method":
            method.push(data[key]);
            break;
          case "pressure":
            pressure.push(data[key]);
            break;
        }
      });
    });
    return {
      data: [size, year, cover, length, material, method, pressure],
      header: header,
    };
  };
  const { data, header } = dataGenerator();
  return (
    <Modal
      onClose={cancell}
      closeable
      isOpen={isOpen}
      animate
      autoFocus
      size={SIZE.full}
      role={ROLE.dialog}
      unstable_ModalBackdropScroll={true}
      overrides={{
        Root: {
          style: {
            zIndex: 99,
          },
        },
      }}
    >
      <ModalHeader>MAIN PRESSURE TEST</ModalHeader>
      <ModalBody>
        <Form>
          <Row>
            <RadioGroup
              value={na2air}
              onChange={(e) =>
                dispatch({
                  type: ReducerInformation.setNa2Air,
                  value: e.target.value,
                })
              }
              name="N2AIR"
              align={ALIGN.horizontal}
            >
              <Radio value="N2">N2</Radio>
              <Radio value="AIR">AIR</Radio>
            </RadioGroup>
            <Input required placeholder="DATE" />
          </Row>
          <Row>
            <HeadingLevel>
              <Heading
                styleLevel={6}
                overrides={{
                  Block: {
                    style: {
                      marginBottom: "10px",
                    },
                  },
                }}
              >
                PERFORMED BY:
              </Heading>
            </HeadingLevel>
            <HeadingLevel>
              <Heading
                styleLevel={6}
                overrides={{
                  Block: {
                    style: {
                      marginBottom: "10px",
                    },
                  },
                }}
              >
                WITNESSD BY:
              </Heading>
            </HeadingLevel>
          </Row>
          <Row>
            <Input
              required
              placeholder="Name"
              value={name}
              onChange={(e: any) => dispatch({
                type: ReducerInformation.setName,
                value: e.target.value,
              })}
            />
            <Input
              required
              placeholder="Name"
              value={namew}
              onChange={(e: any) => dispatch({
                type: ReducerInformation.setNamew,
                value: e.target.value,
              })}
            />
          </Row>
          <Row>
            <Input
              required
              placeholder="EMP/ITS #"
              value={emp}
              onChange={(e: any) => dispatch({
                type: ReducerInformation.setEmp,
                value: e.target.value,
              })}
            />
            <Input
              required
              placeholder="EMP/ITS #"
              value={empw}
              onChange={(e: any) => dispatch({
                type: ReducerInformation.setEmpw,
                value: e.target.value,
              })}
            />
          </Row>
          <Row>
            <HeadingLevel>
              <Heading
                styleLevel={6}
                overrides={{
                  Block: {
                    style: {
                      marginBottom: "0px",
                    },
                  },
                }}
              >
                TEST PRESSURE
              </Heading>
            </HeadingLevel>
            <HeadingLevel>
              <Heading
                styleLevel={6}
                overrides={{
                  Block: {
                    style: {
                      marginBottom: "0px",
                    },
                  },
                }}
              >
                DURATION
              </Heading>
            </HeadingLevel>
          </Row>

          <Row>
            <RadioSection>
              <RadioGroup
                value={pressure}
                onChange={(e) =>
                  dispatch({
                    type: ReducerInformation.setPressure,
                    value: e.target.value,
                  })
                }
                name="PRESSURE"
                align={ALIGN.horizontal}
              >
                <Radio value="(LP/PMP)">90 PSIG (LP/PMP)</Radio>
                <Radio value="(HP)">150 PSIG (HP)</Radio>
              </RadioGroup>
              <Paragraph3>
                <strong>CURED-IN-PLACE (CIP) LINER</strong>
              </Paragraph3>
              <RadioGroup
                value={pressure}
                onChange={(e) =>
                  dispatch({
                    type: ReducerInformation.setPressure,
                    value: e.target.value,
                  })
                }
                name="PRESSURE2"
                align={ALIGN.horizontal}
              >
                <Radio value="(LP)">10 P8K3 (LP)</Radio>
                <Radio value="(PMP)">90 P8K3 (PMP)</Radio>
                <Radio value="150P8K3(HP)">150 P8K3 (HP)</Radio>
              </RadioGroup>
            </RadioSection>
            <RadioSection>
              <RadioGroup
                value={duration}
                onChange={(e) =>
                  dispatch({
                    type: ReducerInformation.setDuration,
                    value: e.target.value,
                  })
                }
                name="DURATION"
                align={ALIGN.horizontal}
              >
                <Radio value="1H">1 HOURS {"(< 1,000')"}</Radio>
                <Radio value="11H">1 HOURS {"(> 1,000')"}</Radio>
              </RadioGroup>
              <Paragraph3>
                <strong>CURED-IN-PLACE (CIP) LINER</strong>
              </Paragraph3>
              <RadioGroup
                value={duration}
                onChange={(e) =>
                  dispatch({
                    type: ReducerInformation.setDuration,
                    value: e.target.value,
                  })
                }
                name="DURATION2"
                align={ALIGN.horizontal}
              >
                <Radio value="2H">2 HOURS</Radio>
              </RadioGroup>
            </RadioSection>
          </Row>
          <FormSectionCenter>
            <Checkbox
              checked={maop}
              onChange={() =>
                dispatch({ type: ReducerInformation.setMaop, value: !maop })
              }
              labelPlacement={LABEL_PLACEMENT.right}
            >
              PRESSURE INCREASED TO NEW MAOP
            </Checkbox>
            <Checkbox
              checked={mb}
              onChange={() =>
                dispatch({ type: ReducerInformation.setMarkerB, value: !mb })
              }
              labelPlacement={LABEL_PLACEMENT.right}
            >
              MARKER BALLS WERE INSTALLED EVERY 20'
            </Checkbox>
            <Checkbox
              checked={mb2}
              onChange={() =>
                dispatch({ type: ReducerInformation.setMarkerB2, value: !mb2 })
              }
              labelPlacement={LABEL_PLACEMENT.right}
            >
              MARKER BALLS WERE INSTALLED AT EVERY MAIN ELEMENT
            </Checkbox>
          </FormSectionCenter>
        </Form>
        <HeadingLevel>
          <Heading
            styleLevel={6}
            overrides={{
              Block: {
                style: {
                  marginBottom: "20px",
                },
              },
            }}
          >
            MAIN INSTALLATION
          </Heading>
        </HeadingLevel>
        <Table columns={header} data={data} />
      </ModalBody>
    </Modal>
  );
};

export default React.memo(InformationModule);
