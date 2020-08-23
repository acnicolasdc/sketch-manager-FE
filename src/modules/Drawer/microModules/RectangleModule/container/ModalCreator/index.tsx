import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setMaterial, setMethod, setSize, setPressure, setYear, setLength, setCover } from 'redux/ducks/pipeForm.duck';
import { Select } from "baseui/select";
import { Input } from "baseui/input";
import { Slider } from "baseui/slider";
import {Heading, HeadingLevel} from 'baseui/heading';
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalButton,
  FocusOnce,
} from 'baseui/modal';
import { RECT, OPTIONS_TYPES_MATERIAL, OPTIONS_TYPES_METHOD, OPTIONS_TYPES_PRESSURE, OPTIONS_TYPES_SIZE } from '../../../../utils/assets';
import { Rect } from '../../../../utils/_';
import { StoreContext } from '../../../../providers/Store';
import { Row } from './ModalCreator.style';
const FAKE_FN = () => {};

export interface ModalCreatorProps {
    accept?: () => void;
    cancell?: () => void;
    isOpen?: boolean;
};

const ModalCreator: React.FunctionComponent<ModalCreatorProps> = ({accept=FAKE_FN, cancell=FAKE_FN, isOpen= false}) => {
  const dispatch = useDispatch();
  const { material, pressure, size, method, length, year, cover  } = useSelector((state: any) => state.get('pipeForm').toObject());
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
  const overriesTestinE2E = (data:string) : object => ({
    Root:{
      props:{
        "data-cy":data
      }
    }
  })
  return (
      <Modal onClose={cancell} isOpen={isOpen} unstable_ModalBackdropScroll={true}>
        <FocusOnce>
          <ModalHeader>Create a Pipe</ModalHeader>
        </FocusOnce>
        <ModalBody>
          <Row>
            <Select
              overrides={overriesTestinE2E("rmm-select-material")}
              options={OPTIONS_TYPES_MATERIAL}
              value={material}
              placeholder="Select material"
              onChange={(params:any) => dispatch(setMaterial(params.value))}
            />
            <Select
              overrides={overriesTestinE2E("rmm-select-method")}
              options={OPTIONS_TYPES_METHOD}
              value={method}
              placeholder="Select method"
              onChange={(params:any) => dispatch(setMethod(params.value))}
            />
          </Row>
          <Row>
          <Select
              overrides={overriesTestinE2E("rmm-select-size")}
              options={OPTIONS_TYPES_SIZE}
              value={size}
              placeholder="Select size"
              onChange={(params:any) => dispatch(setSize(params.value))}
            />
            <Select
              overrides={overriesTestinE2E("rmm-select-pressure")}
              options={OPTIONS_TYPES_PRESSURE}
              value={pressure}
              placeholder="Select pressure"
              onChange={(params:any) => dispatch(setPressure(params.value))}
            />
          </Row>
          <Row>
              <Input
                required
                value={year}
                onChange={(e: any) => dispatch(setYear(e.target.value))}
                overrides={overriesTestinE2E("rmm-input-year")} 
                placeholder="Year"
              />
              <Input
                required 
                value={length}
                overrides={overriesTestinE2E("rmm-input-length")}
                onChange={(e: any) => dispatch(setLength(e.target.value))}
                placeholder="Length"
              />
          </Row>
          <HeadingLevel ><Heading styleLevel={6} overrides={{
            Block:{
              style:{
                marginBottom:'0px'
              }
            }
          }}>Cover</Heading>
      </HeadingLevel>
          <Slider
            value={cover}
            min={10}
            max={100}
            onChange={({value}) => dispatch(setCover(value))}
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
              props:{
                "data-cy": "rmm-slider-cover"
              }
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