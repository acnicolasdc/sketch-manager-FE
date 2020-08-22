import React from 'react';
import { StatefulMenu } from "baseui/menu";
import Option from './components/Option';
import { Options } from '../../utils/_';


const ON_ClICK = () => { };

export interface ButtonRadioGroupProps {
    overrides?: object;
    options?: Array<Options>;
    onClick?: (key: string) => void;
    height?:number;
};


const OptionsBar: React.FunctionComponent<ButtonRadioGroupProps> = ({ options = [], onClick = ON_ClICK, height= window.innerHeight}) => {
    
    const top = (height/2) - 40 - (480/2);
    console.log(top, height);
    return (
        <StatefulMenu
            items={options}
            overrides={{
                List: {
                    style: ({ $theme }) => {
                        return {
                            outline: 'none',
                            backgroundColor: '#0581C1',
                            height: '480px',
                            maxHeight: '480px',
                            position: 'absolute',
                            zIndex: 1,
                            top: `${top}px`
                        };
                        
                    }
                },
                Option: {
                    component: Option,
                    props: {
                        onClick: onClick
                    }
                }
            }}
            renderAll
        />
    )
}

export default OptionsBar;
