import { AppAction } from "../models/userAction"

export enum FoodGenre{
    Soups = "Soups",
    Salads = 'Salads',
    Small_Plates ="Small_Plates",
    Large_Plates ="Large_Plates",
    Bohemians_Greek_Flatbreads ='Bohemians_Greek_Flatbreads',
    Tea_Coffe ='Tea_Coffe',
    Beverages ='Beverages'
}

const userIntialValues = {
    userId : '',
    userName : '',
    mobNumber : '',
}

const userGreetedState:UserGreet = {
    userIsGreeted : false
}

export const appIntialValue ={
    user:userIntialValues,
    foodGenre : FoodGenre.Soups,
    userGreetedState: userGreetedState
}

export interface UserGreet{
    userIsGreeted:boolean
}

export interface UserAttributes {
    userId : string,
    userName : string,
    mobNumber : string
}

export interface AppReducer {
    user :UserAttributes,
    foodGenre : FoodGenre,
    userGreetedState:UserGreet
}

export enum AppActionConstants {
    switchNewUser = 'switchNewUser',
    switchFoodGeneres = 'switchFoodGeneres',
    switchUserGreetSate = "switchUserGreetSate"
}

type AppActionType = AppAction<AppActionConstants,AppReducer>

export type UserDispatchTrigger = (value:AppActionType) => void

export const AppReducer = (state :AppReducer,action:AppActionType):AppReducer=>{
    switch(action.type){
        case AppActionConstants.switchNewUser:{
            return {...state,...action.payload}
        }
        case AppActionConstants.switchFoodGeneres:{
            return {...state,...action.payload}
            
        }
        case AppActionConstants.switchUserGreetSate :{
            return {...state,...action.payload}
            
        }
        default:  return state
    }

}

export const switchUserTrigger = (dispatch: UserDispatchTrigger,user:UserAttributes) => {
    dispatch({
        type:AppActionConstants.switchNewUser,
        payload:{user}
    })
}   

export const switchFGTrigger = (dispatch: UserDispatchTrigger,foodGenre:FoodGenre) => {
    dispatch({
        type:AppActionConstants.switchFoodGeneres,
        payload:{foodGenre}
    })
}   


export const switchAppTrigger = (dispatch: UserDispatchTrigger,userGreetedState:UserGreet) => {
    dispatch({
        type:AppActionConstants.switchUserGreetSate,
        payload:{userGreetedState}
    })
} 