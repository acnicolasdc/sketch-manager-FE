import {Overflow as UserIcon} from 'baseui/icon';

function renderItem(item: any) {
    return item.label;
}

const userNav = [
    {
        icon: UserIcon,
        item: { label: 'New from template' },
        mapItemToNode: renderItem,
        mapItemToString: renderItem,
    },
    {
        icon: UserIcon,
        item: { label: 'Save process' },
        mapItemToNode: renderItem,
        mapItemToString: renderItem,
    },
    {
        icon: UserIcon,
        item: { label: 'Log out' },
        mapItemToNode: renderItem,
        mapItemToString: renderItem,
    },
];

export default userNav;