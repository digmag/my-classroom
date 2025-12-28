class StorageUtils {
    constructor(storage?: Storage) {
        this._storage = storage
    }

    private _storage?: Storage

    public setStorage(storage?: Storage) {
        this._storage = storage
    }

    public setItem<T>(key: string, value: T): void {
        this._storage?.setItem(key, JSON.stringify(value))
    }

    public getItem<T>(key: string): T {
        const stringValue = this._storage?.getItem(key);

        if (stringValue === null || stringValue === undefined) {
            throw 'dont have value in storage'
        }

        try {
            return JSON.parse(stringValue) as T;
        } catch {
            throw 'cannot parse JSON'
        }
    }
}

const storageUtils = new StorageUtils(localStorage)

export { storageUtils }