import React from 'react';
import {useStyletron} from 'baseui';
import { BsSquare, BsCircle, BsTextareaT, BsDash, BsCircleFill, BsCaretRightFill, BsCrop } from "react-icons/bs";
import { OptionContainer,  OptionLabel } from './Option.style';

export interface OptionProps {
    props?: object;
};

const Icons:any = {
    BsDash: (props:object) => (<BsDash {...props}/>),
    BsSquare: (props:object) => (<BsSquare {...props}/>),
    BsCircle: (props:object) => (<BsCircle {...props}/>),
    BsCircleFill: (props:object) => (<BsCircleFill {...props}/>),
    BsCaretRightFill: (props:object) => (<BsCaretRightFill {...props}/>),
    BsCrop: (props:object) => (<BsCrop {...props}/>),
    BsTextareaT: (props:object) => (<BsTextareaT {...props}/>),
}

const Option: React.FunctionComponent<OptionProps> = (props) => {
    const [css, theme] = useStyletron();
    const { item:{label, icon, key}, onClick, ...rest }:any = props;
    const Icon = Icons[icon];
    return (
        <OptionContainer {...rest} theme={theme} onClick={()=>onClick(key)}
            data-cy="option-side-bar">
            <Icon color={theme.colors.white}/>
            <OptionLabel theme={theme} >{label}</OptionLabel>
        </OptionContainer>
    )
}

export default Option
