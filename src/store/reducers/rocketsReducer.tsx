import React, {useReducer, createContext} from 'react';
import { IAction, IState } from '../../interfaces/interface';

const initialState: IState = {
  launches: [],
  specificLaunch: null
}

export const Store = createContext<IState | any>(initialState);
const reducer = ( state:IState, action: IAction): IState => {
  switch(action.type) {
    case 'FETCH_DATA':
      return{
        ...state,
        launches: action.payload
      }
    case 'SELECT_LAUNCH':
      return {
        ...state,
        specificLaunch: action.payload
      }
    default:
      return state;
  }
}

export const StoreProvider = ({ children }: JSX.ElementChildrenAttribute): JSX.Element => {
  const [state, dispatch] = useReducer(reducer, initialState)
  return <Store.Provider value={{ state, dispatch }}>{children}</Store.Provider>
}