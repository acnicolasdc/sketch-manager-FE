import React from 'react';
import { StatefulMenu } from "baseui/menu";
import Option from './components/Option';
import { Options } from '../../utils/_';

const ON_ClICK = () => {};

export interface ButtonRadioGroupProps {
    overrides?: object;
    options?: Array<Options>;
    onClick?: (key: string) => void;
};

const OptionsBar: React.FunctionComponent<ButtonRadioGroupProps> = ({ options = [], onClick = ON_ClICK, overrides = {}}) => {
    return (
        <StatefulMenu
            items={options}
            overrides={{
                Option: {
                    component: Option,
                    props:{
                        onClick:onClick
                    }
                }
            }}
            renderAll
      />
    )
}

export default OptionsBar;
