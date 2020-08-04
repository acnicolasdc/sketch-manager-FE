import React from 'react';


export interface AppContextInterface {
    texts: Array<object>,
    rectangles: Array<object>,
    addText: (element: object) => void,
    addReact: (element: object) => void,
    updateReact: (rectangles: Array<object>) => void,
    updateTexts: (texts: Array<object>) => void,
}

export const StoreContext = React.createContext<AppContextInterface>({
    rectangles: [],
    texts:[],
    addText: () => {},
    addReact: () => {},
    updateReact: () => {},
    updateTexts: () => {}
});
export interface StoreProviderProps {
    children?: React.ReactNode;
};


const StoreProvider:React.FunctionComponent<StoreProviderProps> = ({ children }) =>{
    const [rectangles, setRect] =  React.useState<object[]>([]);
    const [texts, setTexts] =  React.useState<object[]>([]);

    const _validation = (element: object = {}): boolean => typeof element === 'object' && Object.keys(element).length !== 0;
    
    const _addElement = (element: object = {}, cb: any) => {
        if(_validation(element)){
            cb((prevState:any)=>[...prevState, element]);
        }
    }
    const addReact = (element: object = {}) => _addElement(element, setRect);
    const addText = (element: object = {}) => _addElement(element, setTexts);

    const updateReact = (rectangles:Array<object>) => setRect(rectangles);
    const updateTexts = (texts:Array<object>) => setTexts(texts);
    
    return (
        <StoreContext.Provider value={{ rectangles, texts, addReact, addText, updateReact, updateTexts}}>
            {children}
        </StoreContext.Provider>
    )
}

export default StoreProvider;