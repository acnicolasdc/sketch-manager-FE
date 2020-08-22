import React from 'react'
import { LabelStyle } from './UserInfo.style';


export interface UserInfroProps {
    children?: any
};

const UserInfo: React.FunctionComponent<UserInfroProps> = () => {

    return (
        <LabelStyle>
            NICO ME LA PELA
        </LabelStyle>
    )
}

export default UserInfo
