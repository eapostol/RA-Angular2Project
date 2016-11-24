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
var Job_1 = require('./model/Job');
var job_service_1 = require('./job.service');
var Colonist_1 = require('./model/Colonist');
var colonists_service_1 = require('./colonists.service');
var Local_storage_worker_1 = require('./model/Local_storage_worker');
var ArrivalComponent = (function () {
    function ArrivalComponent(jobService, colonistsService, router, localStorage) {
        this.jobService = jobService;
        this.colonistsService = colonistsService;
        this.router = router;
        this.localStorage = localStorage;
        this.NO_OCCUPATION_SELECTED = '(none)';
        this.job = new Job_1.Job(this.NO_VALUE, this.NO_OCCUPATION_SELECTED, '');
        this.colonist = new Colonist_1.Colonist('', (this.job), this.NO_VALUE, this.NO_VALUE, this.NO_VALUE);
        //console.log('this.colonist.name = ' + this.colonist.name);
    }
    Object.defineProperty(ArrivalComponent.prototype, "noOccupation", {
        get: function () {
            return this.colonist.job.name === this.NO_OCCUPATION_SELECTED;
        },
        enumerable: true,
        configurable: true
    });
    ArrivalComponent.prototype.getJobs = function () {
        var _this = this;
        this.jobService.getJobs()
            .then(function (allJobs) {
            _this.allJobs = allJobs.jobs;
            //console.log(this.allJobs);
        });
    };
    ArrivalComponent.prototype.ngOnInit = function () {
        this.getJobs();
    };
    ArrivalComponent.prototype.onSubmit = function () {
        var _this = this;
        for (var j in this.allJobs) {
            if (this.allJobs[j].name == this.colonist.job.name) {
                this.colonist.job.id = this.allJobs[j].id;
                this.colonist.job_id = String(this.allJobs[j].id);
                this.colonist.job.description = this.allJobs[j].description;
                break;
            }
        }
        this.colonistsService
            .newColonist(this.colonist)
            .then(function (colonist) {
            _this.router.navigateByUrl('/encounters');
            _this.localStorage.clear();
            //set colonist id to local storage
            _this.localStorage.add('ColonistId', String(colonist.id));
            //this.setLocalStorage(colonist);
        });
    };
    ArrivalComponent = __decorate([
        core_1.Component({
            selector: 'arrival',
            templateUrl: './app/arrival.component.html',
            styleUrls: ['./app/arrival.component.scss'],
            providers: [job_service_1.JobService, colonists_service_1.ColonistsService, Local_storage_worker_1.LocalStorageWorker]
        }), 
        __metadata('design:paramtypes', [job_service_1.JobService, colonists_service_1.ColonistsService, router_1.Router, Local_storage_worker_1.LocalStorageWorker])
    ], ArrivalComponent);
    return ArrivalComponent;
}());
exports.ArrivalComponent = ArrivalComponent;
//# sourceMappingURL=arrival.component.js.map