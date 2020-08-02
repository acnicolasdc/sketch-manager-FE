import React from 'react';


export interface AppContextInterface {
    rectangles: Array<object>,
    addReact: (element: object) => void,
    updateReact: (rectangles: Array<object>) => void,
}

export const StoreContext = React.createContext<AppContextInterface>({
    rectangles: [],
    addReact: () => false,
    updateReact: () => {}
});
export interface StoreProviderProps {
    children?: React.ReactNode;
};


const StoreProvider:React.FunctionComponent<StoreProviderProps> = ({ children }) =>{
    const [rectangles, setRect] =  React.useState<object[]>([]);

    const validation = (element: object = {}): boolean => typeof element === 'object' && Object.keys(element).length !== 0;
    
    const addReact = (element: object = {}) => {
        if(validation(element)){
            setRect((prevState)=>[...prevState, element]);
        }
    }
    const updateReact = (rectangles:Array<object>) => setRect(rectangles);
    
    return (
        <StoreContext.Provider value={{ rectangles, addReact, updateReact}}>
            {children}
        </StoreContext.Provider>
    )
}

export default StoreProvider;
