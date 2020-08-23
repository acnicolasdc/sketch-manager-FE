import {
    ChevronDown,
    Delete,
    Upload as Icon,
} from 'baseui/icon';
import {
    POSITION,
} from 'baseui/app-nav-bar';

function renderItem(item: any) {
    return item.label;
}

const MainNav = [
    {
        icon: ChevronDown,
        item: { label: 'Options' },
        mapItemToNode: renderItem,
        mapItemToString: renderItem,
        navExitIcon: Delete,
        navPosition: { desktop: POSITION.horizontal },
        nav: [
            {
                icon: ChevronDown,
                item: { label: 'Search by ticket' },
                mapItemToNode: renderItem,
                mapItemToString: renderItem,
            },
            {
                icon: Icon,
                item: { label: 'Search by location' },
                mapItemToNode: renderItem,
                mapItemToString: renderItem,
            },
        ],
    },
];

export default MainNav;