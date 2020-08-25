import {Overflow as UserIcon} from 'baseui/icon';

function renderItem(item: any) {
    return item.label;
}

const userNav = [
    {
        icon: UserIcon,
        item: { label: 'Search by ticket' },
        mapItemToNode: renderItem,
        mapItemToString: renderItem,
    },
    {
        icon: UserIcon,
        item: { label: 'Search by location' },
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