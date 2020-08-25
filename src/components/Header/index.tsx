import React, {useContext} from 'react';
import { StyledLink } from 'baseui/link';
import {Unstable_AppNavBar as AppNavBar} from 'baseui/app-nav-bar';
import mainNav from '../Header/utils/mainNav';
import userNav from '../Header/utils/userNav';
import {ContainerNav,LogoStyle} from './Header.style';
import { SessionContext } from 'providers/session';




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
    const [activeNavItem, setActiveNavItem] = React.useState<any>(null);
    const { deleteSession } = useContext(SessionContext);

    const appDisplayImage = (
        <StyledLink 
            $style={{
                textDecoration: 'none',
                fontWeight: 'bold',
                color: 'inherit',
                ':hover': { color: 'inherit' },
                ':visited': { color: 'inherit' },
            }}
            href={'/'}
        >
        <LogoStyle>ConEdison</LogoStyle> 
        </StyledLink>
    );


    return (
        <React.Fragment>
                    <ContainerNav>
                        <AppNavBar
                            appDisplayName={appDisplayImage}
                            isNavItemActive={({ item }) => {
                                return (
                                    item === activeNavItem ||
                                    isActive(mainNav, item, activeNavItem)
                                );
                            }}
                            onNavItemSelect={({item:{item}}: { item: any }) => {
                                console.log(item)
                                if (item === activeNavItem){
                                    setActiveNavItem(null);
                                } else{
                                    setActiveNavItem(item);
                                }
                                if(item.label === 'Log out'){
                                    deleteSession();
                                    
                                }
                                
                                
                            }}
                            userNav={userNav}
                            username="Juan Cruz"
                            usernameSubtitle="Gas engineering"
                            userImgUrl=""
                        />
                    </ContainerNav>
        </React.Fragment>
    );
};