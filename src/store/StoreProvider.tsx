/*
* 参考代码：https://dev.to/jaklaudiusz/next-js-persistent-state-with-react-hooks-and-localstorage-how-to-make-it-work-3al6
*/
import StorageHelper from '@/libs/client/utils/StorageHelper'
import { StoreReducer } from '@/store/Reducer'
import { ContextProvider, DefaultStoreState } from '@/store/StoreContext'
import React from 'react'
const StoreProvider = ({ children }: { children: React.ReactNode }) => {
    const [isInitialized, setIsInitialized] = React.useState(false)
    const [state, dispatch] = React.useReducer(StoreReducer, DefaultStoreState)
    React.useEffect(() => {
        dispatch({ type: 'loadStorage' })
        setIsInitialized(true)
    }, [])
    React.useEffect(() => {
        if (isInitialized) {
            StorageHelper.set(state)
        }
    }, [state])
    return (
        <ContextProvider value={{ state, dispatch }}>
            {children}
        </ContextProvider>
    )
}
export default StoreProvider