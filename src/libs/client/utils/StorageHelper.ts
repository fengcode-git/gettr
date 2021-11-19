import IStoreState from "@/store/IStoreState";

const KEYNAME = 'state'

class StorageHelper {
    static set(data: IStoreState) {
        sessionStorage.setItem(KEYNAME, JSON.stringify(data));
    }
    static get(): IStoreState | null {
        let json = sessionStorage.getItem(KEYNAME)
        if (json) {
            return JSON.parse(json) as IStoreState
        } else {
            return null
        }
    }
    static clear() {
        sessionStorage.clear()
    }
}
export default StorageHelper