import React from 'react';
import { StyledLink } from 'baseui/link';
import {Unstable_AppNavBar as AppNavBar} from 'baseui/app-nav-bar';
import mainNav from '../Header/utils/mainNav';
import userNav from '../Header/utils/userNav';
import {ContainerNav} from './Header.style';


function renderItem(item: any) {
    return item.label;
}

function isActive(
    arr: Array<any>,
    item: any,
    activeItem: any,
): boolean {
    let active = false;
    for (let i = 0; i < arr.length; i++) {
        const elm = arr[i];
        if (elm === item) {
            if (item === activeItem) return true;
            return isActive(
                (item && item.nav) || [],
                activeItem,
                activeItem,
            );
        } else if (elm.nav) {
            active = isActive(elm.nav || [], item, activeItem);
        }
    }
    return active;
}
export default () => {
    const [activeNavItem, setActiveNavItem] = React.useState();

    const appDisplayImage = (
        <StyledLink 
            $style={{
                textDecoration: 'none',
                fontWeight: 'bold',
                color: 'inherit',
                ':hover': { color: 'inherit' },
                ':visited': { color: 'inherit' },
            }}
            href={'/Login'}
        >
            ConEdison
        </StyledLink>
    );


    return (
        <React.Fragment>
                    <ContainerNav>
                        <AppNavBar
                            appDisplayName={appDisplayImage}
                            mainNav={mainNav}
                            isNavItemActive={({ item }) => {
                                return (
                                    item === activeNavItem ||
                                    isActive(mainNav, item, activeNavItem)
                                );
                            }}
                            onNavItemSelect={({ item }) => {
                                if (item === activeNavItem) return;
                                setActiveNavItem(item);
                            }}
                            userNav={userNav}
                            username="Juan Cruz"
                            usernameSubtitle="Civil engineering"
                            userImgUrl=""
                        />
                    </ContainerNav>
        </React.Fragment>
    );
};