import {createContext,ReactNode,useReducer,useContext} from  'react'
import { appIntialValue, AppReducer } from '../reducer/AppReducer'

export const AppContext = createContext(appIntialValue)
export const DispatchContext = createContext<any>(null)

interface Iprops {
     children : ReactNode;
}

export const UseAppContext =()=> useContext(AppContext)
export const UseAppDispatch =()=> useContext(DispatchContext)


export const AppProvider = ({children} : Iprops) =>{
const [appState, dispatch] = useReducer(AppReducer, appIntialValue)

    return (
        <AppContext.Provider value={appState}>
            <DispatchContext.Provider  value={dispatch}>
                {children}
            </DispatchContext.Provider>
        </AppContext.Provider>
        
    )
}