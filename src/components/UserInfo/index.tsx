import React from 'react'
import { LabelStyle } from './UserInfo.style';


export interface UserInfoProps {
    children?: any
};



const user = {
    firstName: 'Sebastian',
    lastName: 'Cruz',
    ticketNumber: 'XG19000590'
    
}

const dataUser = (user:any) => `${user.firstName} ${user.lastName} - ${user.ticketNumber}` ;

const element = (
    <LabelStyle>
        {dataUser(user)} 
        
    </LabelStyle>
);


const UserInfo: React.FunctionComponent<UserInfoProps> = () => {

    return (
        element
    )
}

export default UserInfo
