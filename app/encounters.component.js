"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var encounters_service_1 = require("./encounters.service");
var colonists_service_1 = require("./colonists.service");
var EncountersComponent = (function () {
    function EncountersComponent(encountersService, colonistsService) {
        this.encountersService = encountersService;
        this.colonistsService = colonistsService;
    }
    EncountersComponent.prototype.getEncounters = function () {
        var _this = this;
        this.encountersService.getEncounters()
            .then(function (allEncounters) {
            _this.allEncounters = (allEncounters.encounters);
            var endNum = _this.allEncounters.length;
            var startNum = _this.allEncounters.length - 8;
            _this.allEncounters = _this.allEncounters.slice(startNum, endNum);
            console.log(_this.allEncounters);
        });
    };
    EncountersComponent.prototype.getColonists = function () {
        var _this = this;
        this.colonistsService.getColonists()
            .then(function (allColonists) {
            _this.allColonists = (allColonists.colonists);
        });
    };
    EncountersComponent.prototype.ngOnInit = function () {
        this.getEncounters();
        this.getColonists();
    };
    return EncountersComponent;
}());
EncountersComponent = __decorate([
    core_1.Component({
        selector: 'encounters',
        templateUrl: './app/encounters.component.html',
        styleUrls: ['./app/encounters.component.scss'],
        providers: [encounters_service_1.EncountersService, colonists_service_1.ColonistsService]
    }),
    __metadata("design:paramtypes", [encounters_service_1.EncountersService, colonists_service_1.ColonistsService])
], EncountersComponent);
exports.EncountersComponent = EncountersComponent;
//# sourceMappingURL=encounters.component.js.map