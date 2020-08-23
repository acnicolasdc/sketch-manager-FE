import React from 'react'
import { LabelStyle } from './UserInfo.style';

export type Data = {
    email?:string,
    firstname:string,
    username?:string,
    ticketNumber: string 
}
export interface UserInfoProps {
    data?: Data
};

export const MOCK_USER = {
    firstname: 'Staff',
    lastName: 'User',
    ticketNumber: 'X0000000'
    
}

const dataUser = ({firstname, ticketNumber}:Data): string  => `${firstname} - ${ticketNumber}` ;

const UserInfo: React.FunctionComponent<UserInfoProps> = ({ data = MOCK_USER }) => {
    return (
    <LabelStyle>
        {dataUser(data)} 
    </LabelStyle>
    )
}

export default UserInfo
