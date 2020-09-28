import { Dispatch } from "react";
import {Action, Reducer} from "redux";
import { ActionType, DispatchAction } from "./default-reducer";
import { DefaultService } from '../../services/default-service'

export interface InitialState {
    name: string;
    address: string;
}

export class DefaultDispatcher {
    
    private readonly dispatch: Dispatch<DispatchAction>;
    
    constructor(dispatch: Dispatch<DispatchAction>){
        this.dispatch = dispatch; 
    }
    
    updateName = (name: string) => this.dispatch({type: ActionType.UpdateName, payload: {name}});
    
    updateAddress = (address: string) => this.dispatch({type: ActionType.UpdateAddress, payload: {address}});
    
    deleteName = () => this.dispatch({type: ActionType.DeleteName, payload: {}});
    
    deleteAddress = () => this.dispatch({type: ActionType.DeleteAddress, payload: {}})
    
    insertDefault = (name:string,address:string)=>{
        DefaultService.insertDefault({name,address}).then(()=>{
            console.log('foi')
        }).catch(()=>{
            console.log('metodo axios')
            console.log({name,address})
            console.log('deu erro')
        })
    }
}