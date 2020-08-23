import React from 'react';


export interface AppContextInterface {
    texts: Array<object>,
    drips: Array<object>,
    valves: Array<object>,
    reducers: Array<object>,
    rectangles: Array<object>,
    couplings: Array<object>,
    addText: (element: object) => void,
    addValves: (element: object) => void,
    addReducers: (element: object) => void,
    addDrips: (element: object) => void,
    addReact: (element: object) => void,
    addCoupling: (element: object) => void,
    updateTexts: (texts: Array<object>) => void,
    updateValves: (valves: Array<object>) => void,
    updateReducers: (reducers: Array<object>) => void,
    updateDrips: (drips: Array<object>) => void,
    updateReact: (rectangles: Array<object>) => void,
    updateCouplings: (couplings: Array<object>) => void,
    deleteTexts: (texts: Array<object>) => void,
    deleteValves: (valves: Array<object>) => void,
    deleteReducers: (reducers: Array<object>) => void,
    deleteDrips: (drips: Array<object>) => void,
    deleteReact: (rectangles: Array<object>) => void,
    deleteCouplings: (couplings: Array<object>) => void,
}

export const StoreContext = React.createContext<AppContextInterface>({
    rectangles: [],
    reducers: [],
    valves: [],
    drips: [],
    texts:[],
    couplings:[],
    addText: () => {},
    addReact: () => {},
    addReducers: () => {},
    addValves: () => {},
    addDrips: () => {},
    addCoupling: () => {},
    updateTexts: () => {},
    updateValves: () => {},
    updateReact: () => {},
    updateDrips: () => {},
    updateReducers: () => {},
    updateCouplings: () => {},
    deleteTexts: () => {},
    deleteValves: () => {},
    deleteReact: () => {},
    deleteDrips: () => {},
    deleteReducers: () => {},
    deleteCouplings: () => {},
});
export interface StoreProviderProps {
    children?: React.ReactNode;
};


const StoreProvider:React.FunctionComponent<StoreProviderProps> = ({ children }) =>{
    const [rectangles, setRect] =  React.useState<object[]>([]);
    const [texts, setTexts] =  React.useState<object[]>([]);
    const [valves, setValves] =  React.useState<object[]>([]);
    const [drips, setDrips] =  React.useState<object[]>([]);
    const [reducers, setReducers] =  React.useState<object[]>([]);
    const [couplings, setCouplings] =  React.useState<object[]>([]);

    const _validation = (element: object = {}): boolean => typeof element === 'object' && Object.keys(element).length !== 0;
    
    const _addElement = (element: object = {}, cb: any) => {
        if(_validation(element)){
            cb((prevState:any)=>[...prevState, element]);
        }
    }
    const addReact = (element: object = {}) => _addElement(element, setRect);
    const addText = (element: object = {}) => _addElement(element, setTexts);
    const addValves = (element: object = {}) => _addElement(element, setValves);
    const addDrips = (element: object = {}) => _addElement(element, setDrips);
    const addReducers = (element: object = {}) => _addElement(element, setReducers);
    const addCoupling = (element: object = {}) => _addElement(element, setCouplings);

    const updateReact = (rectangles:Array<object>) => setRect(rectangles);
    const updateValves = (valves:Array<object>) => setValves(valves);
    const updateTexts = (texts:Array<object>) => setTexts(texts);
    const updateDrips = (drips:Array<object>) => setDrips(drips);
    const updateReducers = (reducers:Array<object>) => setReducers(reducers);
    const updateCouplings = (couplings:Array<object>) => setCouplings(couplings);

    const deleteReact = (rectangles:Array<object>) => setRect(rectangles);
    const deleteValves = (valves:Array<object>) => setValves(valves);
    const deleteTexts = (texts:Array<object>) => setTexts(texts);
    const deleteDrips = (drips:Array<object>) => setDrips(drips);
    const deleteReducers = (reducers:Array<object>) => setReducers(reducers);
    const deleteCouplings = (couplings:Array<object>) => setCouplings(couplings);
    
    return (
        <StoreContext.Provider value={{ 
            rectangles, 
            couplings, 
            texts, 
            valves, 
            drips, 
            reducers, 
            addReact, 
            addText, 
            addValves, 
            addDrips, 
            addReducers, 
            updateReact, 
            updateCouplings, 
            updateTexts, 
            updateValves, 
            updateDrips, 
            updateReducers, 
            addCoupling,
            deleteReact,
            deleteValves,
            deleteTexts,
            deleteDrips,
            deleteReducers,
            deleteCouplings 
            }}>
            {children}
        </StoreContext.Provider>
    )
}

export default StoreProvider;
