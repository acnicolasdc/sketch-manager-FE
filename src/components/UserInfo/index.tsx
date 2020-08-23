import React from 'react'
import { Button,KIND } from "baseui/button";
import { StatefulPopover, PLACEMENT } from "baseui/popover";
import { ITEMS } from './utils/Menu'
import { Menu } from 'baseui/menu';
import { ChevronDown as ArrowMenu} from "baseui/icon";

export type Data = {
    email?: string,
    firstname: string,
    username?: string,
    ticketNumber: string,
}
export interface UserInfoProps {
    data?: Data
};

export const MOCK_USER = {
    firstname: 'Staff',
    lastName: 'User',
    ticketNumber: 'X0000000'

}

const dataUser = ({ firstname, ticketNumber }: Data): string => `${firstname} - ${ticketNumber}`;

const UserInfo: React.FunctionComponent<UserInfoProps> = ({ data = MOCK_USER }) => {
    return (
        <StatefulPopover
            content={() => (
                <div>
                    <Menu
                        items={ITEMS}
                        rootRef={React.createRef()}
                        overrides={{
                            List: {
                                style: {
                                    width: '200px',
                                    // paddingLeft: '100px'
                                },
                            },
                            Option: {
                                props: {
                                    getItemLabel: (item: { label: string }) => item.label,
                                },
                            },
                        }}
                    />
                </div>
            )}
            placement={PLACEMENT.rightTop}
            autoFocus
        >
            
            <Button kind={KIND.tertiary}
            endEnhancer={() => <ArrowMenu size={24}/>}>{dataUser(data)}</Button>
            
            
        </StatefulPopover>

    )
}

export default UserInfo
