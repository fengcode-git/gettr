import IStoreState from "@/store/IStoreState";

const KEYNAME = 'state'

class StorageHelper {
    static set(data: IStoreState) {
        localStorage.setItem(KEYNAME, JSON.stringify(data));
    }
    static get(): IStoreState | null {
        let json = localStorage.getItem(KEYNAME)
        if (json) {
            return JSON.parse(json) as IStoreState
        } else {
            return null
        }
    }
    static clear() {
        localStorage.clear()
    }
}
export default StorageHelper