import * as React from 'react';
import { Select } from "baseui/select";
import { Input } from "baseui/input";
import { Slider } from "baseui/slider";
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
import { StoreContext } from '../../../../providers/Store';
import { OPTIONS_TYPES_MATERIAL, OPTIONS_TYPES_METHOD, OPTIONS_TYPES_PRESSURE, OPTIONS_TYPES_SIZE } from './utils/assets';
import { Row } from './ModalCreator.style';
const FAKE_FN = () => {};

export interface ModalCreatorProps {
    accept?: () => void;
    cancell?: () => void;
    isOpen?: boolean;
};

const ModalCreator: React.FunctionComponent<ModalCreatorProps> = ({accept=FAKE_FN, cancell=FAKE_FN, isOpen= false}) => {
  const [material, setMaterial] = React.useState<any[]>([]);
  const [pressure, setPressure] = React.useState<any[]>([]);
  const [ size, setSize ] = React.useState<any[]>([]);
  const [ method, setMethod ] = React.useState<any[]>([]);
  const [length, setLenght] = React.useState('');
  const [ year, setYear] = React.useState('');
  const [ cover, setCover ] = React.useState([70]);

  const { addReact, rectangles } = React.useContext(StoreContext);
  const generateData = (): object => {
    const data = {
      material:material[0].label,
      pressure:pressure[0].label,
      size:size[0].label,
      method:method[0].label,
      length:length,
      year:year,
      cover:cover[0],
    }
    return data;
  }
  const addRectangle = () => {
      const newRect:Rect = {
        ...RECT, 
        id:`rect-code-pipe-${rectangles.length}`, 
        value:`${length}'`, 
        width: parseInt(length, 10),
        data: generateData()
      };
      addReact(newRect);
      cancell();  
  }

  const formVerification = ():boolean => {
    if(material.length === 0 || pressure.length === 0)return true;
    if(size.length === 0 || method.length === 0)return true;
    if(year === '' || cover.length === 0 || length === '')return true;
    return false;
  }
  return (
      <Modal onClose={cancell} isOpen={isOpen}>
        <FocusOnce>
          <ModalHeader>Create a Pipe</ModalHeader>
        </FocusOnce>
        <ModalBody>
          <Row>
            <Select
              options={OPTIONS_TYPES_MATERIAL}
              value={material}
              placeholder="Select material"
              onChange={(params:any) => setMaterial(params.value)}
            />
            <Select
              options={OPTIONS_TYPES_METHOD}
              value={method}
              placeholder="Select method"
              onChange={(params:any) => setMethod(params.value)}
            />
          </Row>
          <Row>
          <Select
              options={OPTIONS_TYPES_SIZE}
              value={size}
              placeholder="Select size"
              onChange={(params:any) => setSize(params.value)}
            />
            <Select
              options={OPTIONS_TYPES_PRESSURE}
              value={pressure}
              placeholder="Select pressure"
              onChange={(params:any) => setPressure(params.value)}
            />
          </Row>
          <Row>
              <Input
                required
                value={year}
                onChange={(e: any) => setYear(e.target.value)} 
                placeholder="Year"
              />
              <Input
                required 
                value={length}
                onChange={(e: any) => setLenght(e.target.value)}
                placeholder="Length"
              />
          </Row>
          <Slider
            value={cover}
            min={10}
            max={100}
            onChange={({value}) => setCover(value)}
            overrides={{
              InnerThumb: ({$value, $thumbIndex}) => (
                <React.Fragment>{$value[$thumbIndex]+'"'}</React.Fragment>
              ),
              ThumbValue: () => null,
              Thumb: {
                style: () => ({
                  height: '36px',
                  width: '36px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderTopLeftRadius: '36px',
                  borderTopRightRadius: '36px',
                  borderBottomRightRadius: '36px',
                  borderBottomLeftRadius: '36px',
                  borderLeftStyle: 'solid',
                  borderRightStyle: 'solid',
                  borderTopStyle: 'solid',
                  borderBottomStyle: 'solid',
                  borderLeftWidth: '3px',
                  borderTopWidth: '3px',
                  borderRightWidth: '3px',
                  borderBottomWidth: '3px',
                  borderLeftColor: `#ccc`,
                  borderTopColor: `#ccc`,
                  borderRightColor: `#ccc`,
                  borderBottomColor: `#ccc`,
                  backgroundColor: '#fff',
              }),
              },
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
          <ModalButton autoFocus onClick={addRectangle} disabled={formVerification()}>
            Create
          </ModalButton>
        </ModalFooter>
      </Modal>
  );
}

export default ModalCreator;