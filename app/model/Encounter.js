"use strict";
var Encounter = (function () {
    function Encounter(newId, newDate, newColonistId, newAType, newAction) {
        this.id = newId;
        this.date = newDate;
        this.colonist_id = newColonistId;
        this.atype = newAType;
        this.action = newAction;
        return this;
    }
    return Encounter;
}());
exports.Encounter = Encounter;
//# sourceMappingURL=Encounter.js.map