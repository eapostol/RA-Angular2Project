export class LocalStorageWorker {
    localStorageSupported: boolean;

    constructor() {
        this.localStorageSupported = typeof window['localStorage'] != "undefined" && window['localStorage'] != null;
    }

    // add value to storage
    add(key: string, item: string) {
        if (this.localStorageSupported) {
            localStorage.setItem(key, item);
        }
    }

    // get one item by key from storage
    get(key: string): string {
        if (this.localStorageSupported) {
            var item = localStorage.getItem(key);
            return item;
        } else {
            return null;
        }
    }

    // remove value from storage
    remove(key: string) {
        if (this.localStorageSupported) {
            localStorage.removeItem(key);
        }
    }

    // clear storage (remove all items from it)
    clear() {
        if (this.localStorageSupported) {
            localStorage.clear();
        }
    }
}