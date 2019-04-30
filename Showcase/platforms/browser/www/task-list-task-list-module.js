(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["task-list-task-list-module"],{

/***/ "./src/app/task-list/task-list.module.ts":
/*!***********************************************!*\
  !*** ./src/app/task-list/task-list.module.ts ***!
  \***********************************************/
/*! exports provided: TaskListPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskListPageModule", function() { return TaskListPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _task_list_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./task-list.page */ "./src/app/task-list/task-list.page.ts");







var routes = [
    {
        path: '',
        component: _task_list_page__WEBPACK_IMPORTED_MODULE_6__["TaskListPage"]
    }
];
var TaskListPageModule = /** @class */ (function () {
    function TaskListPageModule() {
    }
    TaskListPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_task_list_page__WEBPACK_IMPORTED_MODULE_6__["TaskListPage"]]
        })
    ], TaskListPageModule);
    return TaskListPageModule;
}());



/***/ }),

/***/ "./src/app/task-list/task-list.page.html":
/*!***********************************************!*\
  !*** ./src/app/task-list/task-list.page.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>Tasks</ion-title>\r\n    <ion-button slot=\"end\" (click)= \"addItem()\">\r\n      <ion-icon slot=\"end\" name=\"add\"></ion-icon>\r\n     Add Item\r\n    </ion-button>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n    <ion-list>\r\n      <ion-item-sliding *ngFor=\"let task of tasks | async\" #slidingItem>\r\n        <ion-item [ngClass]=\"{taskDone: task.status == 'done'}\">\r\n            {{ task.title }}\r\n        </ion-item>\r\n        <ion-item-options side=\"end\" (ionSwipe)=\"removeTask(slideingItem, task)\">\r\n          <ion-button (click)=\"markAsDone(slidingItem,task)\" color=\"secondary\">\r\n            <ion-icon name=\"checkmark\"></ion-icon>\r\n          </ion-button>\r\n          <ion-item-option (click)=\"removeTask(slidingItem,task)\" color=\"danger\" expandable>\r\n            <ion-button (click)=\"removeTask(slidingItem,task)\" color=\"danger\">\r\n              <ion-icon name=\"trash\" id=\"delete\"></ion-icon>\r\n            </ion-button>\r\n          </ion-item-option>\r\n          \r\n        </ion-item-options>\r\n      </ion-item-sliding>\r\n    </ion-list>                                                                                                                                                                                                                                                                                                                                                                                                                                                           \r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/task-list/task-list.page.scss":
/*!***********************************************!*\
  !*** ./src/app/task-list/task-list.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".taskDone {\n  text-decoration: line-through; }\n\n#delete {\n  padding: 0; }\n\nion-toolbar {\n  --background: #abcaff; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFzay1saXN0L0Q6XFxHaXRIdWJcXENJVFBULTIyNy02MF9Ub2RvLWFwcC9zcmNcXGFwcFxcdGFzay1saXN0XFx0YXNrLWxpc3QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksNkJBQTZCLEVBQUE7O0FBRWpDO0VBQ0ksVUFBVSxFQUFBOztBQUVkO0VBQ0kscUJBQWEsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3Rhc2stbGlzdC90YXNrLWxpc3QucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRhc2tEb25lIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xyXG59XHJcbiNkZWxldGV7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG59XHJcbmlvbi10b29sYmFye1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjYWJjYWZmO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/task-list/task-list.page.ts":
/*!*********************************************!*\
  !*** ./src/app/task-list/task-list.page.ts ***!
  \*********************************************/
/*! exports provided: TaskListPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskListPage", function() { return TaskListPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angularfire2_database__WEBPACK_IMPORTED_MODULE_3__);




var TaskListPage = /** @class */ (function () {
    function TaskListPage(alertCtrl, toastCtrl, af) {
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.af = af;
        this.taskList = this.af.list('/tasks');
        this.tasks = this.taskList.valueChanges();
    }
    TaskListPage.prototype.addItem = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var prompt, toast;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                            header: 'Todo List',
                            message: 'Add a Task',
                            inputs: [{
                                    name: 'newTask',
                                    type: 'text'
                                }],
                            buttons: [{
                                    text: 'Cancel',
                                    role: 'cancel'
                                }, {
                                    text: 'Add to List',
                                    handler: function (data) {
                                        var newTaskRef = _this.taskList.push({ id: '', title: data.newTask, status: 'open' });
                                        newTaskRef.update({ id: newTaskRef.key });
                                        toast.present();
                                    }
                                }]
                        })];
                    case 1:
                        prompt = _a.sent();
                        return [4 /*yield*/, this.toastCtrl.create({
                                message: "Item Added!",
                                duration: 5000,
                                showCloseButton: true,
                                color: 'dark'
                            })];
                    case 2:
                        toast = _a.sent();
                        prompt.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    TaskListPage.prototype.markAsDone = function (slidingItem, task) {
        if (task.status != "done") {
            task.status = "done";
            this.taskList.update(task.id, task);
        }
        else {
            task.status = "open";
        }
        slidingItem.close();
    };
    TaskListPage.prototype.removeTask = function (slidingItem, task) {
        this.taskList.remove(task.id);
        slidingItem.close();
    };
    TaskListPage.prototype.ngOnInit = function () { };
    TaskListPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-task-list',
            template: __webpack_require__(/*! ./task-list.page.html */ "./src/app/task-list/task-list.page.html"),
            styles: [__webpack_require__(/*! ./task-list.page.scss */ "./src/app/task-list/task-list.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"],
            angularfire2_database__WEBPACK_IMPORTED_MODULE_3__["AngularFireDatabase"]])
    ], TaskListPage);
    return TaskListPage;
}());



/***/ })

}]);
//# sourceMappingURL=task-list-task-list-module.js.map