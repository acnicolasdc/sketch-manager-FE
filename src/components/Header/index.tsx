import * as React from 'react';
import { useStyletron } from 'baseui';
import { StyledLink } from 'baseui/link';
import { Layer } from 'baseui/layer';
import {ChevronDown,Delete,Overflow as UserIcon,Upload as Icon} from 'baseui/icon';
import {Unstable_AppNavBar as AppNavBar,POSITION} from 'baseui/app-nav-bar';
import mainNav from '../Header/utils/mainNav';
import userNav from '../Header/utils/userNav';
import conEdison_horizontal from '../../assets/icons/conEdison_logo.png';

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
    const [css] = useStyletron();
    // const [isNavBarVisible, setIsNavBarVisible] = React.useState(true);
    const [activeNavItem, setActiveNavItem] = React.useState();
    const containerStyles = css({
        boxSizing: 'border-box',
        width: '100vw',
        position: 'fixed',
        top: '0',
        left: '0',
    });

    const appDisplayImage = (
        <StyledLink 
            img = {conEdison_horizontal}
            $style={{
                textDecoration: 'none',
                color: 'inherit',
                ':hover': { color: 'inherit' },
                ':visited': { color: 'inherit' },
            }}
            href={'/Login'}
        >
        </StyledLink>
    );


    return (
        <React.Fragment>

                <Layer>
                    <div className={containerStyles}>
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
                            usernameSubtitle="XG19000590"
                            userImgUrl={conEdison_horizontal}
                        />
                    </div>
                </Layer>)
        </React.Fragment>
    );
};