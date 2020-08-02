import React from 'react';
import {useStyletron} from 'baseui';
import { BsSquare, BsCircle, BsTextareaT } from "react-icons/bs";
import { OptionContainer,  OptionLabel } from './Option.style';

export interface OptionProps {
    props?: object;
};

const Icons:any = {
    BsSquare: (props:object) => (<BsSquare {...props}/>),
    BsCircle: (props:object) => (<BsCircle {...props}/>),
    BsTextareaT: (props:object) => (<BsTextareaT {...props}/>),
}

const Option: React.FunctionComponent<OptionProps> = (props) => {
    const [css, theme] = useStyletron();
    const { item:{label, icon}, ...rest }:any = props;
    const Icon = Icons[icon];
    return (
        <OptionContainer {...rest} theme={theme}>
            <Icon color={theme.colors.mono500}/>
            <OptionLabel theme={theme} >{label}</OptionLabel>
        </OptionContainer>
    )
}

export default Option
