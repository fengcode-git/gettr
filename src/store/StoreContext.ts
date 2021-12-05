import React from 'react'
import IStoreState from "@/store/IStoreState";
import { StoreDispatch } from '@/store/Reducer';

export const DefaultStoreState: IStoreState = { visit: false, login: false, nickname: '', id: '', token: '' }

export const StoreContext = React.createContext<{ state: IStoreState; dispatch: StoreDispatch }>({
  state: DefaultStoreState,
  dispatch: () => null
});
export const ContextProvider = StoreContext.Provider
export const ContextConsumer = StoreContext.Consumer
export const useStore = () => React.useContext(StoreContext)
