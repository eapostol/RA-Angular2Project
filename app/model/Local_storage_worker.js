"use strict";
var LocalStorageWorker = (function () {
    function LocalStorageWorker() {
        this.localStorageSupported = typeof window['localStorage'] != "undefined" && window['localStorage'] != null;
    }
    // add value to storage
    LocalStorageWorker.prototype.add = function (key, item) {
        if (this.localStorageSupported) {
            localStorage.setItem(key, item);
        }
    };
    // get one item by key from storage
    LocalStorageWorker.prototype.get = function (key) {
        if (this.localStorageSupported) {
            var item = localStorage.getItem(key);
            return item;
        }
        else {
            return null;
        }
    };
    // remove value from storage
    LocalStorageWorker.prototype.remove = function (key) {
        if (this.localStorageSupported) {
            localStorage.removeItem(key);
        }
    };
    // clear storage (remove all items from it)
    LocalStorageWorker.prototype.clear = function () {
        if (this.localStorageSupported) {
            localStorage.clear();
        }
    };
    return LocalStorageWorker;
}());
exports.LocalStorageWorker = LocalStorageWorker;
//# sourceMappingURL=Local_storage_worker.js.map