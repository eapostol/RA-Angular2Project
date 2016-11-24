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
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var aliens_service_1 = require('./aliens.service');
var encounters_service_1 = require('./encounters.service');
var Encounter_1 = require('./model/Encounter');
var Local_storage_worker_1 = require('./model/Local_storage_worker');
var ReportComponent = (function () {
    function ReportComponent(aliensService, encountersService, router, localStorage) {
        this.aliensService = aliensService;
        this.encountersService = encountersService;
        this.router = router;
        this.localStorage = localStorage;
        this.NO_ALIEN_SELECTED = '(none)';
        this.id_colonist = Number(this.localStorage.get('ColonistId'));
        console.log(this.id_colonist);
        this.date = String(this.getDate());
        console.log(this.date);
        this.encounter = new Encounter_1.Encounter(this.NO_VALUE, this.date, this.id_colonist, this.NO_ALIEN_SELECTED, '');
    }
    ReportComponent.prototype.getDate = function () {
        var today = new Date;
        var dd = today.getDate();
        var mm = today.getMonth() + 1; //January is 0!
        var yyyy = today.getFullYear();
        if (dd < 10) {
            dd = '0' + dd;
        }
        if (mm < 10) {
            mm = '0' + mm;
        }
        var todaysDate = yyyy + '-' + mm + '-' + dd;
        return todaysDate;
    };
    ReportComponent.prototype.getEncounters = function () {
        var _this = this;
        this.aliensService.getAliens()
            .then(function (allAliens) {
            _this.allAliens = (allAliens.aliens);
            console.log(_this.allAliens);
        });
    };
    ReportComponent.prototype.ngOnInit = function () {
        this.getEncounters();
    };
    ReportComponent.prototype.onSubmit = function () {
        var _this = this;
        this.encountersService
            .newEncounter(this.encounter)
            .then(function (encounter) {
            _this.router.navigateByUrl('/encounters');
        });
    };
    Object.defineProperty(ReportComponent.prototype, "noAlien", {
        get: function () {
            return this.encounter.atype === this.NO_ALIEN_SELECTED;
        },
        enumerable: true,
        configurable: true
    });
    ReportComponent = __decorate([
        core_1.Component({
            selector: 'report',
            templateUrl: './app/report.component.html',
            styleUrls: ['./app/report.component.css'],
            providers: [aliens_service_1.AliensService, encounters_service_1.EncountersService, Local_storage_worker_1.LocalStorageWorker]
        }), 
        __metadata('design:paramtypes', [aliens_service_1.AliensService, encounters_service_1.EncountersService, router_1.Router, Local_storage_worker_1.LocalStorageWorker])
    ], ReportComponent);
    return ReportComponent;
}());
exports.ReportComponent = ReportComponent;
//# sourceMappingURL=report.component.js.map