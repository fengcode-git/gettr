import StorageHelper from "@/libs/client/utils/StorageHelper";
import IStoreState from "@/store/IStoreState"
import produce from 'immer'

export type StoreAction =
    | { type: 'setVisit', visit: boolean }
    | { type: 'login', id: string, nickname: string, token: string }
    | { type: 'logout' }
    | { type: 'loadStorage' }

export type StoreDispatch = (action: StoreAction) => void

export const StoreReducer = (state: IStoreState, action: StoreAction) => {
    switch (action.type) {
        case "login":
            return produce(state, draft => {
                draft.login = true
                draft.visit = true
                draft.nickname = action.nickname
                draft.id = action.id
                draft.token = action.token
            })
        case "setVisit":
            return produce(state, draft => {
                if (!state.login) {
                    draft.visit = action.visit
                }
            })
        case "logout":
            return produce(state, draft => {
                draft.login = false
                draft.nickname = ''
                draft.visit = true
                draft.id = ''
                draft.token = ''
                StorageHelper.clear()
            })
        case "loadStorage":
            return produce(state, draft => {
                let v = StorageHelper.get()
                if (v) {
                    draft.login = v.login
                    draft.nickname = v.nickname
                    draft.visit = v.visit
                    draft.id = v.id
                    draft.token = v.token
                }
            })
        default:
            throw new Error('Unhandled action type');
    }
}
