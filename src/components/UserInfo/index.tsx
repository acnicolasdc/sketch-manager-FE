import React, { useContext } from 'react'
import { Button, KIND } from "baseui/button";
import { StatefulPopover, PLACEMENT } from "baseui/popover";
import { ITEMS } from './utils/Menu'
import { StatefulMenu as Menu } from 'baseui/menu';
import { ChevronDown as ArrowMenu } from "baseui/icon";
import { SessionContext } from 'providers/session';
import { useHistory } from "react-router-dom";


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
    const { deleteSession } = useContext(SessionContext);
    const history = useHistory();

    return (
        <StatefulPopover
            content={() => (
                <div>
                    <Menu
                        items={ITEMS}
                        onItemSelect = {({item} ) => {
                            if (item.label === 'Log out') {
                                deleteSession();
                                history.push('/');

                            }
                        }
                        }
                        overrides={{
                            List: {
                                style: {
                                    width: '200px',
                                },
                            },
                            Option: {
                                props: {
                                    getItemLabel: (item: { label: string }) => {
                                        return item.label
                                    },


                                },
                            },
                        }}
                    />
                </div>
            )}
            placement={PLACEMENT.rightTop}
            autoFocus
        >

            <Button
                kind={KIND.tertiary}
                endEnhancer={() => <ArrowMenu size={24} />}>
                {dataUser(data)}
            </Button>
        </StatefulPopover>

    )
}

export default UserInfo
