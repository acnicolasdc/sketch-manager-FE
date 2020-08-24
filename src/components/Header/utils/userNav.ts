import {Overflow as UserIcon} from 'baseui/icon';

function renderItem(item: any) {
    return item.label;
}

const userNav = [
    {
        icon: UserIcon,
        item: { label: 'Option #1' },
        mapItemToNode: renderItem,
        mapItemToString: renderItem,
    },
    {
        icon: UserIcon,
        item: { label: 'Option #2' },
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