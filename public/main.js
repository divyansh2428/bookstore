(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/additem/additem.component.css":
/*!***********************************************!*\
  !*** ./src/app/additem/additem.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container{\r\n    margin-top: 30px;\r\n\r\n}\r\n\r\n.error{\r\n    display: none;\r\n}\r\n\r\n.success{\r\n    display: none;\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/additem/additem.component.html":
/*!************************************************!*\
  !*** ./src/app/additem/additem.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<div class=\"container\">\n\n<form>\n  <div class=\"row\">\n    <div class=\"col-md-3\"></div>\n    <div class=\"col-md-5\" style=\"border: 1px solid gray; padding: 20px;\">\n\n        <h1>Enter details for book</h1>\n        <br>\n\n        <div class=\"alert alert-danger error\" role=\"alert\">\n            <strong>{{error}}</strong>\n          </div>\n          <div class=\"alert alert-success success\" role=\"alert\">\n              {{success}}\n            </div>\n\n    <div class=\"form-group\">\n      <label for=\"name\"><h6><i class=\"fas fa-address-book\"></i> Book Name</h6></label>\n      <input type=\"text\" class=\"form-control\" id=\"name\" [(ngModel)]=\"name\" name=\"name\"placeholder=\"Enter Book Name\">\n    </div>\n\n    <div class=\"form-group\">\n        <label for=\"author\"><h6><i class=\"fas fa-user\"></i> Author</h6></label>\n        <input type=\"text\" class=\"form-control\" id=\"author\" [(ngModel)]=\"author\" name=\"author\" placeholder=\"Author Name\">\n      </div>\n      \n      <div class=\"form-group\">\n          <label for=\"url\"><h6><i class=\"fas fa-image\"></i>Image URL</h6></label>\n          <input type=\"text\" class=\"form-control\" id=\"url\" [(ngModel)]=\"url\" name=\"url\" placeholder=\"Enter Image URL\">\n        </div>\n  \n    <div class=\"form-group\">\n        <label for=\"price\"><h6><i class=\"fas fa-rupee-sign\"></i> Price</h6></label>\n        <input type=\"text\" class=\"form-control\" id=\"price\"[(ngModel)]=\"price\" name=\"price\" placeholder=\"Price\">\n      </div>\n      <div class=\"form-group\">\n          <label for=\"description\"><h6><i class=\"fas fa-text-width\"></i> description</h6></label>\n          <input type=\"text\" class=\"form-control\" id=\"description\" [(ngModel)]=\"description\" name=\"description\" placeholder=\"Enter description of book\">\n        </div>\n        \n    <div class=\"form-group\">\n      <label for=\"exampleFormControlSelect1\"><h6><i class=\"fas fa-medkit\"></i>Condition</h6></label>\n      <select class=\"form-control\" id=\"condition\" [(ngModel)]=\"condition\" name=\"condition\">\n        <option>New</option>\n        <option>Almost New</option>\n        <option>Slightly Damaged</option>\n        <option>Worn Out</option>\n      </select>\n    </div>\n    <button type=\"submit\" class=\"btn btn-primary\" (click)=\"submit()\">Add book</button>\n  </div>\n  <div class=\"col-md-4\"></div>\n  </div>\n  </form>\n\n  </div>"

/***/ }),

/***/ "./src/app/additem/additem.component.ts":
/*!**********************************************!*\
  !*** ./src/app/additem/additem.component.ts ***!
  \**********************************************/
/*! exports provided: AdditemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdditemComponent", function() { return AdditemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _request_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../request.service */ "./src/app/request.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//import { FormsModule } from '@angular/forms'; // <-- NgModel lives here



var AdditemComponent = /** @class */ (function () {
    function AdditemComponent(http, request, router) {
        this.http = http;
        this.request = request;
        this.router = router;
        this.error = "";
        this.success = "";
        this.name = '';
        this.price = '';
        this.author = '';
        this.condition = "New";
        this.url = '';
        this.user_name = "";
        this.description = '';
    }
    AdditemComponent.prototype.ngOnInit = function () {
        //console.log(this.condition);
        var _this = this;
        console.log("getting name");
        var p = { token: localStorage.getItem("token") };
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]()
            .set('Authorization', 'my-auth-token')
            .set('Content-Type', 'application/json');
        this.http.post("http://localhost:2000/getName", JSON.stringify(p), { headers: headers }).subscribe(function (data) {
            _this.user_name = data["name"];
        });
    };
    AdditemComponent.prototype.submit = function () {
        this.error = "";
        if (this.name == "")
            this.error += "Book name field is empty";
        else if (this.author == "")
            this.error += "Author field is empty";
        else if (this.url == "")
            this.error += "URL field is empty";
        else if (this.price == "")
            this.error += "Price field is empty";
        else if (this.description == "")
            this.error += "Description field is empty";
        if (this.error != "") {
            var v = document.getElementsByClassName('error');
            if (v.length != 0)
                v[0].style.display = "block";
        }
        else {
            this.success = "Item Added Successfully";
            var v = document.getElementsByClassName('error');
            if (v.length != 0)
                v[0].style.display = "none";
            v = document.getElementsByClassName('success');
            if (v.length != 0)
                v[0].style.display = "block";
            var p = { name: this.name, author: this.author, price: this.price, condition: this.condition, description: this.description, seller: this.user_name, url: this.url };
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]()
                .set('Authorization', 'my-auth-token')
                .set('Content-Type', 'application/json');
            this.http.post("http://localhost:2000/addItem", JSON.stringify(p), { headers: headers }).subscribe(function (data) {
            });
            console.log("Item added");
            alert("Item added");
            this.router.navigate(['listings']);
        }
    };
    AdditemComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-additem',
            template: __webpack_require__(/*! ./additem.component.html */ "./src/app/additem/additem.component.html"),
            styles: [__webpack_require__(/*! ./additem.component.css */ "./src/app/additem/additem.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _request_service__WEBPACK_IMPORTED_MODULE_3__["RequestService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AdditemComponent);
    return AdditemComponent;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<app-header></app-header>\r\n\r\n<div class=\"container\">\r\n\r\n    \r\n\r\n</div>-->\r\n\r\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _request_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./request.service */ "./src/app/request.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(safe) {
        this.safe = safe;
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_request_service__WEBPACK_IMPORTED_MODULE_1__["RequestService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/signup/signup.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _listings_listings_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./listings/listings.component */ "./src/app/listings/listings.component.ts");
/* harmony import */ var _additem_additem_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./additem/additem.component */ "./src/app/additem/additem.component.ts");
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./search/search.component */ "./src/app/search/search.component.ts");
/* harmony import */ var _description_description_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./description/description.component */ "./src/app/description/description.component.ts");
/* harmony import */ var _wishlist_wishlist_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./wishlist/wishlist.component */ "./src/app/wishlist/wishlist.component.ts");
/* harmony import */ var _yourlistings_yourlistings_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./yourlistings/yourlistings.component */ "./src/app/yourlistings/yourlistings.component.ts");
/* harmony import */ var _messages_messages_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./messages/messages.component */ "./src/app/messages/messages.component.ts");
/* harmony import */ var _message_message_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./message/message.component */ "./src/app/message/message.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




 // <-- NgModel lives here












//import { MessageComponent } from './message/message.component';
var routes = [
    {
        path: '',
        redirectTo: 'listings',
        pathMatch: 'full'
    },
    {
        path: 'listings',
        component: _listings_listings_component__WEBPACK_IMPORTED_MODULE_9__["ListingsComponent"]
    },
    {
        path: 'signup',
        component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_6__["SignupComponent"]
    },
    {
        path: 'login',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"]
    },
    {
        path: 'listings/add',
        component: _additem_additem_component__WEBPACK_IMPORTED_MODULE_10__["AdditemComponent"]
    },
    {
        path: 'search',
        component: _search_search_component__WEBPACK_IMPORTED_MODULE_11__["SearchComponent"]
    },
    {
        path: 'listings/:id',
        component: _description_description_component__WEBPACK_IMPORTED_MODULE_12__["DescriptionComponent"]
    },
    {
        path: 'wishlist',
        component: _wishlist_wishlist_component__WEBPACK_IMPORTED_MODULE_13__["WishlistComponent"]
    },
    {
        path: 'yourlistings',
        component: _yourlistings_yourlistings_component__WEBPACK_IMPORTED_MODULE_14__["YourlistingsComponent"]
    },
    {
        path: 'messages',
        component: _messages_messages_component__WEBPACK_IMPORTED_MODULE_15__["MessagesComponent"]
    },
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _signup_signup_component__WEBPACK_IMPORTED_MODULE_6__["SignupComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_8__["HeaderComponent"],
                _listings_listings_component__WEBPACK_IMPORTED_MODULE_9__["ListingsComponent"],
                _additem_additem_component__WEBPACK_IMPORTED_MODULE_10__["AdditemComponent"],
                _search_search_component__WEBPACK_IMPORTED_MODULE_11__["SearchComponent"],
                _description_description_component__WEBPACK_IMPORTED_MODULE_12__["DescriptionComponent"],
                _wishlist_wishlist_component__WEBPACK_IMPORTED_MODULE_13__["WishlistComponent"],
                _yourlistings_yourlistings_component__WEBPACK_IMPORTED_MODULE_14__["YourlistingsComponent"],
                _messages_messages_component__WEBPACK_IMPORTED_MODULE_15__["MessagesComponent"],
                _message_message_component__WEBPACK_IMPORTED_MODULE_16__["MessageComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forRoot(routes)
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/description/description.component.css":
/*!*******************************************************!*\
  !*** ./src/app/description/description.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container{\r\n    margin-top: 20px;\r\n\r\n}"

/***/ }),

/***/ "./src/app/description/description.component.html":
/*!********************************************************!*\
  !*** ./src/app/description/description.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<div class=\"container\">\n<div class=\"row\" style=\"margin-top: 40px;\">\n\n    <div class=\"col-sm-12 col-md-4\">\n\n      <img src=\"{{item.url}}\" width=\"250\" height=\"300\">\n      <div style=\"display: inline-block\">\n      <button class=\"btn btn-success\" style=\"margin-top: 20px; margin-bottom: 10px;\"  (click)=\"wishlist()\">Add To Wishlist<i  style=\"color: red;\"class=\"fas fa-heart\"></i></button>\n      \n    </div>\n    </div>\n\n    <div class=\"col-sm-12 col-md-8\">\n\n      <h1>{{item.name}}</h1>      \n              <p style=\"color: gray;\">by {{item.author}}</p>\n        \n              <h5 style=\"color: #b12704;\">Price: <i class=\"fas fa-rupee-sign\"></i>{{item.price}}</h5>\n              <p>Seller: {{item.seller}}</p>\n              <p>Condition: {{item.con}}</p>\n      \n      \n      <hr>\n      \n      <br>\n      <h6>{{item.description}}</h6>\n</div>\n\n</div>\n\n<br>\n<div class=\"row\">\n  <div class=\"col-md-12\">\n      <h5>Seller: {{item.seller}}</h5>\n      <div class=\"form-group\">\n        \n          <textarea class=\"form-control\" id=\"message\" rows=\"3\" [(ngModel)]=\"message\"></textarea>\n      </div>\n      <button class=\"btn btn-info\" (click)=\"sendMessage(item.product_id,item.name,item.url)\">Send Message</button>\n  </div>\n</div>\n</div>"

/***/ }),

/***/ "./src/app/description/description.component.ts":
/*!******************************************************!*\
  !*** ./src/app/description/description.component.ts ***!
  \******************************************************/
/*! exports provided: DescriptionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DescriptionComponent", function() { return DescriptionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _request_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../request.service */ "./src/app/request.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DescriptionComponent = /** @class */ (function () {
    function DescriptionComponent(http, request, router) {
        this.http = http;
        this.request = request;
        this.router = router;
        this.url = '';
        this.message = "";
        this.userActive = this.request.z;
        this.name = "";
    }
    DescriptionComponent.prototype.ngOnInit = function () {
        var _this = this;
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]()
            .set('Authorization', 'my-auth-token')
            .set('Content-Type', 'application/json');
        var object = { token: localStorage.getItem("token") };
        if (localStorage.getItem("token") != "") {
            this.http.post("http://localhost:2000/getName", JSON.stringify(object), { headers: headers }).subscribe(function (data) {
                _this.user_id = data['user_id'];
                _this.name = data['name'];
                console.log("Iffggfd is " + _this.user_id);
                console.log(_this.user_id);
            });
        }
        this.url = this.router.url;
        this.url.split('/');
        this.id = this.url[10];
        parseInt(this.id);
        console.log(this.id);
        var p = { id: this.id };
        headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]()
            .set('Authorization', 'my-auth-token')
            .set('Content-Type', 'application/json');
        this.http.post("http://localhost:2000/getItem", JSON.stringify(p), { headers: headers }).subscribe(function (data) {
            _this.item = data['item'];
            headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]()
                .set('Authorization', 'my-auth-token')
                .set('Content-Type', 'application/json');
            var p = { name: _this.item.seller };
            _this.http.post("http://localhost:2000/id", JSON.stringify(p), { headers: headers }).subscribe(function (data) {
                _this.seller_id = data["id"];
                console.log("Isa" + _this.seller_id);
            });
        });
    };
    DescriptionComponent.prototype.contact = function () {
        if (this.request.z) {
        }
        else
            this.router.navigate(['/login']);
    };
    DescriptionComponent.prototype.wishlist = function () {
        console.log(this.id);
        if (this.request.z) {
            var p = { user_id: this.user_id, product_id: this.id };
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]()
                .set('Authorization', 'my-auth-token')
                .set('Content-Type', 'application/json');
            this.http.post("http://localhost:2000/wishlist", JSON.stringify(p), { headers: headers }).subscribe(function (data) {
            });
            this.router.navigate(['/wishlist']);
        }
        else
            this.router.navigate(['/login']);
    };
    DescriptionComponent.prototype.sendMessage = function (id, bookname, path) {
        if (this.seller_id != this.user_id) {
            console.log(this.user_id);
            console.log(this.seller_id);
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]()
                .set('Authorization', 'my-auth-token')
                .set('Content-Type', 'application/json');
            var p = { user_id: this.user_id, seller_id: this.seller_id, message: this.message, sname: this.name, rname: this.item.seller, product_id: id, book_name: bookname, url: path };
            this.http.post("http://localhost:2000/sendMessage", JSON.stringify(p), { headers: headers }).subscribe(function (data) {
            });
            this.router.navigate(['/messages']);
        }
        else
            alert("Seller can't send message to himself");
    };
    DescriptionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-description',
            template: __webpack_require__(/*! ./description.component.html */ "./src/app/description/description.component.html"),
            styles: [__webpack_require__(/*! ./description.component.css */ "./src/app/description/description.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _request_service__WEBPACK_IMPORTED_MODULE_2__["RequestService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], DescriptionComponent);
    return DescriptionComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light bg-dark\">\n    <a class=\"navbar-brand\" [routerLink]=\"['/listings']\"><h1 style=\"font-family: cursive; color:aqua;\">BookStore</h1></a>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n  \n    <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\" style=\"color: white;\" >\n      <ul class=\"navbar-nav mr-auto\">\n          <li *ngIf=\"zo\" class=\"nav-item\">\n              <a class=\"nav-link\" [routerLink]=\"['/wishlist']\" style=\"color: white;\"><h4>Wishlist<i  style=\"color: red;\"class=\"fas fa-heart\"></i></h4></a>\n            </li>\n\n            <li *ngIf=\"zo\" class=\"nav-item active\">\n                <a class=\"nav-link\" [routerLink]=\"['/messages']\" style=\"color: white;\"><h4>Messages<i style=\"color: khaki;\" class=\"fas fa-envelope\" ></i></h4></a>\n              </li>\n              <li *ngIf=\"!zo\" class=\"nav-item\">\n                  <a class=\"nav-link\" [routerLink]=\"['/signup']\" style=\"color: white;\"><h4>SignUp</h4></a>\n                </li>\n                <li *ngIf=\"!zo\" class=\"nav-item\">\n                    <a class=\"nav-link\" [routerLink]=\"['/login']\" style=\"color: white;\"><h4>Login</h4></a>\n                  </li>\n        <li class=\"nav-item dropdown\" style=\"color: white;\">\n          <a *ngIf=\"zo\" class=\"nav-link dropdown-toggle\"style=\"color: white;\"  href=\"#\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n            <h4 style=\"color: white;\">{{name}}</h4>\n          </a>\n          <div *ngIf=\"zo\" class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\n              <a class=\"dropdown-item\" [routerLink]=\"['/messages']\">Your messages</a>\n              <a class=\"dropdown-item\" [routerLink]=\"['/wishlist']\">Your Wishlist</a>\n              <a class=\"dropdown-item\" [routerLink]=\"['/yourlistings']\">Your listings</a>\n              <div class=\"dropdown-divider\"></div>\n              <a class=\"dropdown-item\" [routerLink]=\"['/listings/add']\">Sell Books</a>\n          </div>\n        </li>\n        \n      </ul>\n      \n           <input class=\"form-control\" type=\"search\" style=\"width: 40%;\" placeholder=\"Enter Bookname or AuthorName\" [(ngModel)]=\"searchValue\" aria-label=\"Search\" name=\"search\">\n              <button class=\"btn\" style=\"background-color: khaki; margin: 5px; \" (click)=\"search()\"><i class=\"fas fa-search\"></i></button>\n              <button *ngIf=\"zo\" class='btn btn-primary' (click)=\"logout()\" style=\"margin: 10px;\"><h4>Logout</h4></button>\n          \n    </div>\n  </nav>\n"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _request_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../request.service */ "./src/app/request.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(router, request, http) {
        this.router = router;
        this.request = request;
        this.http = http;
        this.zo = false;
        this.name = "";
        this.searchValue = "";
    }
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.zo = this.request.z;
        console.log("asdsadas" + this.zo);
        this.request.check(localStorage.getItem("token"), localStorage.getItem("name")).then(function (result) {
            console.log(result);
            console.log("In nginit " + result);
            if (result === true)
                _this.request.z = false;
            else
                _this.request.z = true;
            _this.zo = _this.request.z;
            if (_this.request.z) {
                console.log("getting name");
                var p = { token: localStorage.getItem("token") };
                var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]()
                    .set('Authorization', 'my-auth-token')
                    .set('Content-Type', 'application/json');
                _this.http.post("http://localhost:2000/getName", JSON.stringify(p), { headers: headers }).subscribe(function (data) {
                    _this.name = data["name"];
                });
            }
        });
    };
    HeaderComponent.prototype.logout = function () {
        console.log("logout");
        localStorage.setItem("name", "");
        localStorage.setItem("token", "");
        this.request.z = false;
        this.zo = this.request.z;
        this.router.navigate(['/login']);
    };
    HeaderComponent.prototype.search = function () {
        //SEARCH NOT WORKING ON SEARCH PAGE
        console.log("In search");
        this.request.search = this.searchValue;
        console.log(this.request.search);
        this.router.navigate(['search']);
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _request_service__WEBPACK_IMPORTED_MODULE_2__["RequestService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/listings/listings.component.css":
/*!*************************************************!*\
  !*** ./src/app/listings/listings.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.bordershadow {\r\n    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.2);\r\n    transition: all 200ms ease-out;\r\n    }\r\n\r\n    .bordershadow:hover {\r\n        box-shadow: 0 0 6px rgba(35, 173, 278, 1);\r\n        }\r\n\r\n    .container{\r\n            margin-top: 20px;\r\n        \r\n        }\r\n        \r\n        "

/***/ }),

/***/ "./src/app/listings/listings.component.html":
/*!**************************************************!*\
  !*** ./src/app/listings/listings.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<div class=\"container\">\n<!--<div class=\"row\">\n\n    <div class=\"col-6\" >\n\n      <span>Price:</span> \n      <select id=\"price1\" [(ngModel)]=\"price1\" style='margin-left: 10px; margin-right: 10px;'(ngModelChange)=\"filterPrice($event)\">\n          <option>0</option>\n          <option>100</option>\n          <option>500</option>\n          <option>1000</option>\n\n        </select> \n      <span>to</span>\n      <select id=\"price2\" [(ngModel)]=\"price2\" style='margin-left: 5px;'(ngModelChange)=\"filterPrice($event)\">\n          <option>10000</option>\n          <option>5000</option>\n          <option>1000</option>\n          <option>500</option>\n        </select>  \n    </div>\n\n    <div class=\"col-6\" style=\"float: right;\" *ngIf=\"show\">\n    <label for=\"exampleFormControlSelect1\">Sort by</label>\n    <select id=\"exampleFormControlSelect1\" [(ngModel)]=\"value\" style='margin: 5px;'(ngModelChange)=\"hello($event)\">\n      <option>Price:Low to High</option>\n      <option>Price:High to Low</option>\n      <option>Condition</option>\n    </select>\n  </div>\n</div>\n<br><br>\n-->\n<div class=\"row\">\n\n  <div class=\"col-md-4 col-sm-12\" style=\"display: inline;\">\n    <button class=\"btn btn-primary\" (click)=\"plh()\">Price: Low to High</button>\n    <button class=\"btn btn-danger\" (click)=\"phl()\">Price: High To Low</button>\n</div>\n\n<div class=\"col-md-4 col-sm-12\" style=\"display: inline;\" >\n\n    Range: \n    <select id=\"price1\" [(ngModel)]=\"price1\"  (ngModelChange)=\"priceFilter($event)\">\n        <option>0</option>\n        <option>100</option>\n        <option>500</option>\n        <option>1000</option>\n\n      </select> \n    <span>to</span>\n    <select id=\"price2\" [(ngModel)]=\"price2\" (ngModelChange)=\"priceFilter($event)\">\n        <option>10000</option>\n        <option>5000</option>\n        <option>1000</option>\n        <option>500</option>\n      </select> \n      <button class=\"btn btn-primary\" (click)=\"reset()\">Reset</button>\n</div>\n\n<div class=\"col-md-4 col-sm-12\" style=\"display: inline;\">\n \n  \n\n  <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n    Filter By Condition \n    </a>\n    <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\n      <span class=\"dropdown-item\" (click)=\"new()\">New</span>\n      <span class=\"dropdown-item\" (click)=\"anew()\">Almost New</span>\n      <span class=\"dropdown-item\" (click)=\"damaged()\">Slightly Damaged</span>\n      <span class=\"dropdown-item\" (click)=\"worn()\">Worn Out</span>\n\n    </div>\n\n</div>\n   \n\n</div>\n\n\n<hr>\n<br>\n<h2>Showing {{type}} books in the price range of [{{price1}} - {{price2}}]</h2>\n<br>\n<div class=\"row\">\n\n\n    <div class=\"col-sm-12 col-xs-12 col-md-3 card\" style=\"width: 18rem; border: none; margin-bottom: 20px;\" *ngFor=\"let item of listings;\">\n        <a [routerLink]=\"['/listings', item.product_id]\"><img class=\"card-img-top\" src=\"{{item.url}}\" alt=\"Card image cap\" style=\"height: 250px;\"></a>\n        <div class=\"card-body\" style=\"text-align: center;\">\n          <h4 class=\"card-title\"><a [routerLink]=\"['/listings', item.product_id]\">{{item.name}}</a></h4>\n          <p class=\"card-text\" style=\"color: #b12704;\">Price:  <i class=\"fas fa-rupee-sign\"></i>{{item.price}}</p>\n          <button class=\"btn btn-success\" (click)=\"wishlist(item.product_id)\">Add To Wishlist <i  style=\"color: red;\"class=\"fas fa-heart\"></i></button>\n        </div>\n      </div>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/listings/listings.component.ts":
/*!************************************************!*\
  !*** ./src/app/listings/listings.component.ts ***!
  \************************************************/
/*! exports provided: ListingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListingsComponent", function() { return ListingsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _request_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../request.service */ "./src/app/request.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ListingsComponent = /** @class */ (function () {
    function ListingsComponent(http, request, router) {
        this.http = http;
        this.request = request;
        this.router = router;
        this.value = "Price:Low to High";
        this.price1 = 0;
        this.price2 = 10000;
        this.show = true;
        this.items = [];
        this.type = "";
    }
    ListingsComponent.prototype.ngOnInit = function () {
        var _this = this;
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]()
            .set('Authorization', 'my-auth-token')
            .set('Content-Type', 'application/json');
        this.http.get("http://localhost:2000/getListings", { headers: headers }).subscribe(function (data) {
            _this.listings = data['listings'];
            _this.slistings = _this.listings;
        });
    };
    ListingsComponent.prototype.hello = function () {
        var _this = this;
        if (this.value == "Price:Low to High") {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]()
                .set('Authorization', 'my-auth-token')
                .set('Content-Type', 'application/json');
            this.http.get("http://localhost:2000/getListings/lh", { headers: headers }).subscribe(function (data) {
                _this.listings = data['listings'];
            });
        }
        else if (this.value == "Price:High to Low") {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]()
                .set('Authorization', 'my-auth-token')
                .set('Content-Type', 'application/json');
            this.http.get("http://localhost:2000/getListings/hl", { headers: headers }).subscribe(function (data) {
                _this.listings = data['listings'];
            });
        }
        else {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]()
                .set('Authorization', 'my-auth-token')
                .set('Content-Type', 'application/json');
            this.http.get("http://localhost:2000/getListings/cn", { headers: headers }).subscribe(function (data) {
                _this.listings = data['listings'];
            });
        }
    };
    ListingsComponent.prototype.filterPrice = function (event) {
        var _this = this;
        this.show = false;
        var p = { price1: this.price1, price2: this.price2 };
        console.log(p);
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]()
            .set('Authorization', 'my-auth-token')
            .set('Content-Type', 'application/json');
        this.http.post("http://localhost:2000/getPriceListings", JSON.stringify(p), { headers: headers }).subscribe(function (data) {
            if (data['working'] == false) {
                alert("No books according to this filter");
                _this.show = true;
                _this.price1 = 0;
                _this.price2 = 10000;
            }
            _this.listings = data['listings'];
        });
    };
    ListingsComponent.prototype.description = function (id) {
        this.router.navigate(['listings', id]);
    };
    ListingsComponent.prototype.wishlist = function (id) {
        var _this = this;
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]()
            .set('Authorization', 'my-auth-token')
            .set('Content-Type', 'application/json');
        var object = { token: localStorage.getItem("token") };
        this.http.post("http://localhost:2000/getName", JSON.stringify(object), { headers: headers }).subscribe(function (data) {
            _this.user_id = data['user_id'];
            console.log("Id is " + _this.user_id);
            console.log(_this.user_id);
            if (_this.request.z) {
                var p = { user_id: _this.user_id, product_id: id };
                console.log(p.user_id + p.product_id);
                headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]()
                    .set('Authorization', 'my-auth-token')
                    .set('Content-Type', 'application/json');
                _this.http.post("http://localhost:2000/wishlist", JSON.stringify(p), { headers: headers }).subscribe(function (data) {
                    _this.router.navigate(['/wishlist']);
                });
                _this.router.navigate(['/wishlist']);
            }
            else
                _this.router.navigate(['/login']);
        });
    };
    ListingsComponent.prototype.phl = function () {
        this.listings.sort(function (a, b) {
            return b.price - a.price;
        });
    };
    ListingsComponent.prototype.plh = function () {
        this.listings.sort(function (a, b) {
            return a.price - b.price;
        });
    };
    ListingsComponent.prototype.reset = function () {
        this.price1 = 0;
        this.price2 = 10000;
        this.listings = this.slistings;
    };
    ListingsComponent.prototype.priceFilter = function (event) {
        console.log(this.price1);
        console.log(this.price2);
        this.items = [];
        for (var i = 0; i < this.slistings.length; i++) {
            if (this.slistings[i].price >= this.price1 && this.slistings[i].price <= this.price2)
                this.items.push(this.slistings[i]);
        }
        if (this.items.length == 0) {
            this.price1 = 0;
            this.price2 = 10000;
            alert("No items according to this filter");
            this.listings = this.slistings;
        }
        else
            this.listings = this.items;
    };
    ListingsComponent.prototype.new = function () {
        this.type = "New";
        this.items = [];
        if (this.price1 == 0 && this.price2 == 10000) {
            for (var i = 0; i < this.slistings.length; i++) {
                if (this.slistings[i].con == "New")
                    this.items.push(this.slistings[i]);
            }
        }
        else {
            for (var i = 0; i < this.listings.length; i++) {
                if (this.listings[i].con == "New")
                    this.items.push(this.listings[i]);
            }
        }
        if (this.items.length == 0) {
            alert('No book according to corresponding filter condition');
            this.price1 = 0;
            this.price2 = 10000;
            this.type = '';
            this.listings = this.slistings;
        }
        else
            this.listings = this.items;
    };
    ListingsComponent.prototype.anew = function () {
        this.type = "Almost New";
        this.items = [];
        if (this.price1 == 0 && this.price2 == 10000) {
            for (var i = 0; i < this.slistings.length; i++) {
                if (this.slistings[i].con == "Almost New")
                    this.items.push(this.slistings[i]);
            }
        }
        else {
            for (var i = 0; i < this.listings.length; i++) {
                if (this.listings[i].con == "Almost New")
                    this.items.push(this.listings[i]);
            }
        }
        if (this.items.length == 0) {
            alert('No Almost New Books Here');
            this.price1 = 0;
            this.price2 = 10000;
            this.type = '';
            this.listings = this.slistings;
        }
        else
            this.listings = this.items;
    };
    ListingsComponent.prototype.worn = function () {
        this.type = "Worn Out";
        this.items = [];
        if (this.price1 == 0 && this.price2 == 10000) {
            for (var i = 0; i < this.slistings.length; i++) {
                if (this.slistings[i].con == "Worn Out")
                    this.items.push(this.slistings[i]);
            }
        }
        else {
            for (var i = 0; i < this.listings.length; i++) {
                if (this.listings[i].con == "Worn Out")
                    this.items.push(this.listings[i]);
            }
        }
        if (this.items.length == 0) {
            alert('No Worn Out Books here');
            this.price1 = 0;
            this.price2 = 10000;
            this.type = '';
            this.listings = this.slistings;
        }
        else
            this.listings = this.items;
    };
    ListingsComponent.prototype.damaged = function () {
        this.type = "Slightly Damaged";
        this.items = [];
        if (this.price1 == 0 && this.price2 == 10000) {
            for (var i = 0; i < this.slistings.length; i++) {
                if (this.slistings[i].con == "Slightly Damaged")
                    this.items.push(this.slistings[i]);
            }
        }
        else {
            for (var i = 0; i < this.listings.length; i++) {
                if (this.listings[i].con == "Slightly Damaged")
                    this.items.push(this.listings[i]);
            }
        }
        if (this.items.length == 0) {
            alert('No Books according to corresponding filter condition');
            this.price1 = 0;
            this.price2 = 10000;
            this.type = '';
            this.listings = this.slistings;
        }
        else
            this.listings = this.items;
    };
    ListingsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-listings',
            template: __webpack_require__(/*! ./listings.component.html */ "./src/app/listings/listings.component.html"),
            styles: [__webpack_require__(/*! ./listings.component.css */ "./src/app/listings/listings.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _request_service__WEBPACK_IMPORTED_MODULE_2__["RequestService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], ListingsComponent);
    return ListingsComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container{\r\n    margin-top: 40px;\r\n}\r\n.error{\r\n    display: none;\r\n}\r\n.success{\r\n    display: none;\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<app-header></app-header>\n<div class=\"container\">\n  \n<form>\n<div class=\"row\">\n  <div class=\"col-md-4\"></div>\n<div class=\"col-md-4 col-sm-12\" style=\"border: 1px solid gray; padding: 20px;\">\n\n    <h1 style=\"text-align: center; color: maroon;\"><u>Login</u></h1>\n  \n    <br><br>\n    <div class=\"alert alert-danger error\" role=\"alert\">\n        <strong>{{error}}</strong>\n      </div>\n      <div class=\"alert alert-success success\" role=\"alert\">\n          {{success}}\n        </div>\n\n\n    <div class=\"form-group\">\n      <label for=\"email\"><h6><i class=\"fas fa-envelope\"></i> Email address</h6></label>\n      <input type=\"email\" class=\"form-control\" id=\"email\" name=\"email\" aria-describedby=\"emailHelp\" placeholder=\"Enter email\" [(ngModel)]=\"email\" required />\n      <small id=\"emailHelp\" class=\"form-text text-muted\">We'll never share your email with anyone else.</small>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"password\"><h6><i class=\"fas fa-key\"></i> Password</h6></label>\n      <input type=\"password\" class=\"form-control\" id=\"password\" name=\"password\" placeholder=\"Password\" [(ngModel)]=\"password\" required />\n    </div>\n    \n    <button (click)=\"login()\" class=\"btn btn-primary\" style=\"margin-left: 135px;\">Login</button>\n    <br><br>\n     <button style=\"margin-left: 55px;\" (click)=\"register()\" class=\"btn btn-success\">Not Signed Up Yet? Register</button>\n\n  </div>\n  <div class=\"col-md-4\"></div>\n</div>\n  </form>\n</div>"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _request_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../request.service */ "./src/app/request.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = /** @class */ (function () {
    function LoginComponent(http, request, router) {
        this.http = http;
        this.request = request;
        this.router = router;
        this.error = "";
        this.success = "";
        this.email = "";
        this.password = "";
        this.id = "";
        this.check = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
        //localStorage.removeItem("id");
        /*this.request.check(localStorage.getItem("token"),localStorage.getItem("name")).then( (result) => {
          console.log("In nginit" + result);
  
        if(result)
          this.router.navigate(['/signup']);;
        });*/
    };
    LoginComponent.prototype.validateEmail = function (email) {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.error = "";
        if (this.email == "")
            this.error = 'Email Field Is empty';
        else if (this.validateEmail(this.email) == false)
            this.error = "Email is not valid!!!";
        else if (this.password == "")
            this.error += "Password Field Is Empty";
        if (this.error != "") {
            var v = document.getElementsByClassName('error');
            if (v.length != 0)
                v[0].style.display = "block";
        }
        else {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]()
                .set('Authorization', 'my-auth-token')
                .set('Content-Type', 'application/json');
            var p = { email: this.email, password: this.password };
            console.log(JSON.stringify(p));
            this.http.post("http://localhost:2000/login", JSON.stringify(p), { headers: headers }).subscribe(function (data) {
                if (data["token"] == "") {
                    _this.error += 'No Record Found';
                    var v_1 = document.getElementsByClassName('error');
                    if (v_1.length != 0)
                        v_1[0].style.display = "block";
                }
                else {
                    _this.success = "Successfully Logged In!!!";
                    var v = document.getElementsByClassName('error');
                    if (v.length != 0)
                        v[0].style.display = "none";
                    v = document.getElementsByClassName('success');
                    if (v.length != 0)
                        v[0].style.display = "block";
                    console.log("Logged in");
                    console.log(data['name']);
                    console.log(data["token"]);
                    localStorage.setItem("token", data["token"]);
                    localStorage.setItem("name", data['name']);
                    _this.request.z = true;
                    _this.router.navigate(['listings']);
                }
            });
        }
    };
    /*change(){
      this.error='Invalid';
    }*/
    LoginComponent.prototype.register = function () {
        this.router.navigate(['/signup']);
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _request_service__WEBPACK_IMPORTED_MODULE_2__["RequestService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/message/message.component.css":
/*!***********************************************!*\
  !*** ./src/app/message/message.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div.ex1 {\r\n    background-color: lightblue;\r\n    width: 100%;\r\n    height: 400px;\r\n    overflow: scroll;\r\n}\r\n"

/***/ }),

/***/ "./src/app/message/message.component.html":
/*!************************************************!*\
  !*** ./src/app/message/message.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/message/message.component.ts":
/*!**********************************************!*\
  !*** ./src/app/message/message.component.ts ***!
  \**********************************************/
/*! exports provided: MessageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageComponent", function() { return MessageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _request_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../request.service */ "./src/app/request.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MessageComponent = /** @class */ (function () {
    function MessageComponent(http, request, router) {
        this.http = http;
        this.request = request;
        this.router = router;
        this.nameArray = [];
        this.arr = [];
    }
    MessageComponent.prototype.ngOnInit = function () {
        var _this = this;
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]()
            .set('Authorization', 'my-auth-token')
            .set('Content-Type', 'application/json');
        var object = { token: localStorage.getItem("token") };
        this.http.post("http://localhost:2000/getName", JSON.stringify(object), { headers: headers }).subscribe(function (data) {
            _this.user_id = data['user_id'];
            _this.name = data["name"];
            var p = { user_id: _this.user_id };
            _this.http.post("http://localhost:2000/getDistinctName", JSON.stringify(p), { headers: headers }).subscribe(function (data) {
                _this.names = data["names"];
                for (var i = 0; i < _this.names.length; i++)
                    _this.nameArray.push(_this.names[i].reciever_name);
                _this.http.post("http://localhost:2000/getDisName", JSON.stringify(p), { headers: headers }).subscribe(function (data) {
                    _this.names = data["names"];
                    for (var i = 0; i < _this.names.length; i++)
                        _this.nameArray.push(_this.names[i].sender_name);
                    console.log(_this.nameArray);
                    _this.nameArray = _this.nameArray.filter(function (x, i, a) { return a.indexOf(x) == i; });
                    console.log(_this.nameArray);
                    for (i = 0; i < _this.nameArray.length; i++)
                        _this.arr.push({ name: _this.nameArray[i] });
                    console.log(_this.arr);
                });
            });
        });
    };
    MessageComponent.prototype.find = function (names) {
        var _this = this;
        console.log(name);
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]()
            .set('Authorization', 'my-auth-token')
            .set('Content-Type', 'application/json');
        var object = { name: names };
        this.http.post("http://localhost:2000/callMessages", JSON.stringify(object), { headers: headers }).subscribe(function (data) {
            _this.cmessage = data["message"];
            console.log(_this.cmessage);
        });
    };
    MessageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-message',
            template: __webpack_require__(/*! ./message.component.html */ "./src/app/message/message.component.html"),
            styles: [__webpack_require__(/*! ./message.component.css */ "./src/app/message/message.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _request_service__WEBPACK_IMPORTED_MODULE_2__["RequestService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], MessageComponent);
    return MessageComponent;
}());



/***/ }),

/***/ "./src/app/messages/messages.component.css":
/*!*************************************************!*\
  !*** ./src/app/messages/messages.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container{\r\n    margin-top: 20px;\r\n\r\n}\r\n\r\n.bordershadow {\r\n    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.2);\r\n    transition: all 200ms ease-out;\r\n    }\r\n\r\n.bordershadow:hover {\r\n        box-shadow: 0 0 6px rgba(35, 173, 278, 1);\r\n        }\r\n\r\n.error{\r\n            display: none;\r\n        }\r\n\r\n.success{\r\n            display: none;\r\n        }\r\n        "

/***/ }),

/***/ "./src/app/messages/messages.component.html":
/*!**************************************************!*\
  !*** ./src/app/messages/messages.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<div class=\"container\">\n\n<h1 *ngIf=\"received\">Received Messages</h1>\n<h1 *ngIf=\"!received\">Sent Messages</h1>\n\n\n<div style=\"display: inline;\">\n\n\n  <button (click)=\"sent()\" class=\"btn btn-info\" style=\"margin: 5px;\">Sent Messages</button>\n  <button (click)=\"receive()\" class=\"btn btn-success\" style=\"margin: 5px;\">Received Messages</button>\n</div>\n<br>\n  <div *ngIf=\"messages.length>0\">\n\n    \n\n        <div *ngFor=\"let item of messages\" class=\"row bordershadow\" style=\"border: 1px solid grey; margin: 20px; padding: 10px;\">\n          \n            <div *ngIf=\"(item.url!='')\" class=\"col-md-3 col-sm-12\">\n          \n                <a [routerLink]=\"['/listings', item.product_id]\"><img src=\"{{item.url}}\" style=\"height: 200px; width: 200px;\" ></a>\n      \n              </div>\n      \n          <div class=\"col-md-9 col-sm-12\">\n            <h3 *ngIf=\"received\">{{item.sender_name}}</h3>\n            <h3 *ngIf=\"!received\">{{item.reciever_name}}</h3>\n            <div class=\"row\">\n              <div class=\"col-md-6\" style=\"color: gray;\">\n            <p>Date: {{item.date_time.substr(0,10)}}</p>\n          </div>\n          <div class=\"col-md-6\" style=\"color: gray;\">\n              <p>Time: {{item.date_time.substr(11,8)}}</p>\n            </div>\n            \n\n          </div>\n        \n            <h6 style=\"color:#b12704; \">{{item.message}}</h6>\n            <br>\n            <div *ngIf=\"received\" class=\"\" >\n\n                <button type=\"button\" class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\"#exampleModal\">\n                    Reply\n                  </button>\n                  \n                \n                  <div class=\"modal fade\" id=\"exampleModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n                    <div class=\"modal-dialog\" role=\"document\">\n                      <div class=\"modal-content\">\n                        <div class=\"modal-header\">\n                          <h5 class=\"modal-title\" id=\"exampleModalLabel\">Sending Message to {{item.sender_name}}</h5>\n                          <div class=\"alert alert-danger error\" role=\"alert\">\n                              <strong>{{error}}</strong>\n                            </div>\n                          <div class=\"alert alert-success success\" role=\"alert\">\n                              {{success}}\n                            </div>\n                          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                            <span aria-hidden=\"true\">&times;</span>\n                          </button>\n                        </div>\n                        <div class=\"modal-body\">\n                            <textarea class=\"form-control\" id=\"exampleFormControlTextarea1\" rows=\"3\" [(ngModel)]=\"message\"></textarea>\n                        </div>\n                        <div class=\"modal-footer\">\n                          <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n                          <button type=\"button\" class=\"btn btn-primary\" (click)=\"reply(item.sender_name,item.sender_id,item.product_id,item.book_name,'')\">Send Message</button>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                \n                        </div>\n                \n            \n        </div>\n\n\n\n        </div>\n      </div>\n\n\n\n\n\n  </div>"

/***/ }),

/***/ "./src/app/messages/messages.component.ts":
/*!************************************************!*\
  !*** ./src/app/messages/messages.component.ts ***!
  \************************************************/
/*! exports provided: MessagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagesComponent", function() { return MessagesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _request_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../request.service */ "./src/app/request.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MessagesComponent = /** @class */ (function () {
    function MessagesComponent(http, request, router) {
        var _this = this;
        this.http = http;
        this.request = request;
        this.router = router;
        this.received = true;
        this.message = "";
        this.name = "";
        this.success = "";
        this.error = "";
        this.reply = function (rename, reciever_id, id, bookname, path) {
            console.log("reply" + _this.message);
            if (_this.message == "")
                _this.error = "Message Field Is Empty";
            if (_this.error != "") {
                var v = document.getElementsByClassName('error');
                if (v.length != 0)
                    v[0].style.display = "block";
            }
            else {
                _this.success = "Message Sent successfully";
                var v = document.getElementsByClassName('error');
                if (v.length != 0)
                    v[0].style.display = "none";
                v = document.getElementsByClassName('success');
                if (v.length != 0)
                    v[0].style.display = "block";
                var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]()
                    .set('Authorization', 'my-auth-token')
                    .set('Content-Type', 'application/json');
                var object = { sname: _this.name, rname: rename, message: _this.message, seller_id: reciever_id, user_id: _this.user_id, product_id: id, book_name: bookname, url: "" };
                _this.http.post("http://localhost:2000/sendMessage", JSON.stringify(object), { headers: headers }).subscribe(function (data) {
                    _this.received = false;
                });
            }
        };
    }
    MessagesComponent.prototype.ngOnInit = function () {
        var _this = this;
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]()
            .set('Authorization', 'my-auth-token')
            .set('Content-Type', 'application/json');
        var object = { token: localStorage.getItem("token") };
        this.http.post("http://localhost:2000/getName", JSON.stringify(object), { headers: headers }).subscribe(function (data) {
            _this.user_id = data['user_id'];
            _this.name = data["name"];
            console.log(_this.user_id);
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]()
                .set('Authorization', 'my-auth-token')
                .set('Content-Type', 'application/json');
            var object = { id: _this.user_id };
            _this.http.post("http://localhost:2000/recievedMessages", JSON.stringify(object), { headers: headers }).subscribe(function (data) {
                _this.messages = data["messages"];
                console.log(_this.messages);
            });
        });
    };
    MessagesComponent.prototype.sent = function () {
        var _this = this;
        console.log('asikasi');
        this.received = false;
        console.log(this.received);
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]()
            .set('Authorization', 'my-auth-token')
            .set('Content-Type', 'application/json');
        var object = { id: this.user_id };
        console.log(this.user_id);
        this.http.post("http://localhost:2000/sentMessages", JSON.stringify(object), { headers: headers }).subscribe(function (data) {
            _this.messages = data["messages"];
            console.log(_this.messages);
        });
    };
    MessagesComponent.prototype.receive = function () {
        var _this = this;
        console.log('aaa');
        this.received = true;
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]()
            .set('Authorization', 'my-auth-token')
            .set('Content-Type', 'application/json');
        var object = { id: this.user_id };
        console.log(this.user_id);
        this.http.post("http://localhost:2000/recievedMessages", JSON.stringify(object), { headers: headers }).subscribe(function (data) {
            _this.messages = data["messages"];
            console.log(_this.messages[0].datetime);
        });
    };
    MessagesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-messages',
            template: __webpack_require__(/*! ./messages.component.html */ "./src/app/messages/messages.component.html"),
            styles: [__webpack_require__(/*! ./messages.component.css */ "./src/app/messages/messages.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _request_service__WEBPACK_IMPORTED_MODULE_2__["RequestService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], MessagesComponent);
    return MessagesComponent;
}());



/***/ }),

/***/ "./src/app/request.service.ts":
/*!************************************!*\
  !*** ./src/app/request.service.ts ***!
  \************************************/
/*! exports provided: RequestService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestService", function() { return RequestService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RequestService = /** @class */ (function () {
    function RequestService(http) {
        this.http = http;
        this.error = false;
        this.name = "";
        this.z = false;
        this.search = '';
    }
    RequestService.prototype.check = function (tokenid, name) {
        var _this = this;
        console.log("In service");
        console.log(name);
        var tokens = { token_id: tokenid, names: name };
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]()
            .set('Authorization', 'my-auth-token')
            .set('Content-Type', 'application/json');
        return new Promise(function (resolve, reject) {
            if (tokenid === null) {
                resolve(true);
            }
            _this.http.post("http://localhost:2000/check", JSON.stringify(tokens), { headers: headers }).subscribe(function (data) {
                resolve(data['error']);
            });
        });
    };
    RequestService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], RequestService);
    return RequestService;
}());



/***/ }),

/***/ "./src/app/search/search.component.css":
/*!*********************************************!*\
  !*** ./src/app/search/search.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container{\r\n    margin-top: 20px;\r\n\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/search/search.component.html":
/*!**********************************************!*\
  !*** ./src/app/search/search.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n      \n     <nav class=\"navbar navbar-expand-lg navbar-light bg-dark\">\n        <a class=\"navbar-brand\" [routerLink]=\"['/listings']\"><h1 style=\"font-family: cursive; color:aqua;\">BookStore</h1></a>\n        <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n          <span class=\"navbar-toggler-icon\"></span>\n        </button>\n      \n        <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\" style=\"color: white;\" >\n          <ul class=\"navbar-nav mr-auto\">\n              <li *ngIf=\"zo\" class=\"nav-item\">\n                  <a class=\"nav-link\" [routerLink]=\"['/wishlist']\" style=\"color: white;\"><h4>Wishlist<i  style=\"color: red;\"class=\"fas fa-heart\"></i></h4></a>\n                </li>\n    \n                <li *ngIf=\"zo\" class=\"nav-item active\">\n                    <a class=\"nav-link\" [routerLink]=\"['/messages']\" style=\"color: white;\"><h4>Messages<i style=\"color: khaki;\" class=\"fas fa-envelope\" ></i></h4></a>\n                  </li>\n                  <li *ngIf=\"!zo\" class=\"nav-item\">\n                      <a class=\"nav-link\" [routerLink]=\"['/signup']\" style=\"color: white;\"><h4>SignUp</h4></a>\n                    </li>\n                    <li *ngIf=\"!zo\" class=\"nav-item\">\n                        <a class=\"nav-link\" [routerLink]=\"['/login']\" style=\"color: white;\"><h4>Login</h4></a>\n                      </li>\n            <li class=\"nav-item dropdown\" style=\"color: white;\">\n              <a *ngIf=\"zo\" class=\"nav-link dropdown-toggle\"style=\"color: white;\"  href=\"#\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                <h4 style=\"color: white;\">{{name}}</h4>\n              </a>\n              <div *ngIf=\"zo\" class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\n                  <a class=\"dropdown-item\" [routerLink]=\"['/messages']\">Your messages</a>\n                  <a class=\"dropdown-item\" [routerLink]=\"['/wishlist']\">Your Wishlist</a>\n                  <a class=\"dropdown-item\" [routerLink]=\"['/yourlistings']\">Your listings</a>\n                  <div class=\"dropdown-divider\"></div>\n                  <a class=\"dropdown-item\" [routerLink]=\"['/listings/add']\">Sell Books</a>\n              </div>\n            </li>\n            \n          </ul>\n          \n               <input class=\"form-control\" type=\"search\" style=\"width: 40%;\" placeholder=\"Enter Bookname or AuthorName\" [(ngModel)]=\"searchValue\" aria-label=\"Search\" name=\"search\">\n                  <button class=\"btn\" style=\"background-color: khaki;\" (click)=\"searches()\"><i class=\"fas fa-search\"></i></button>\n                  <button *ngIf=\"zo\" class='btn btn-primary' (click)=\"logout()\" style=\"margin: 10px;\"><h4>Logout</h4></button>\n              \n        </div>\n      </nav>\n    \n    \n    <!-- Optional JavaScript -->\n    <!-- jQuery first, then Popper.js, then Bootstrap JS -->\n\n    \n\n\n<div class=\"container\">\n  <br>\n<h2>Showing {{type}} entries for <u>{{search}}</u> in price range [{{price1}} - {{price2}}] </h2>\n<br>\n\n<div class=\"row\">\n\n    <div class=\"col-md-4 col-sm-12\" style=\"display: inline;\">\n      <button class=\"btn btn-primary\" (click)=\"plh()\">Price: Low to High</button>\n      <button class=\"btn btn-danger\" (click)=\"phl()\">Price: High To Low</button>\n  </div>\n  \n  <div class=\"col-md-4 col-sm-12\" style=\"display: inline;\" >\n  \n      Range: \n      <select id=\"price1\" [(ngModel)]=\"price1\"  (ngModelChange)=\"priceFilter($event)\">\n          <option>0</option>\n          <option>100</option>\n          <option>500</option>\n          <option>1000</option>\n  \n        </select> \n      <span>to</span>\n      <select id=\"price2\" [(ngModel)]=\"price2\" (ngModelChange)=\"priceFilter($event)\">\n          <option>10000</option>\n          <option>5000</option>\n          <option>1000</option>\n          <option>500</option>\n        </select> \n        <button class=\"btn btn-primary\" (click)=\"reset()\">Reset</button>\n  </div>\n  \n  <div class=\"col-md-4 col-sm-12\" style=\"display: inline;\">\n   \n    \n  \n    <a class=\"nav-link dropdown-toggle\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n      <h4>Filter By Condition</h4> \n      </a>\n      <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\n        <span class=\"dropdown-item\" (click)=\"new()\">New</span>\n        <span class=\"dropdown-item\" (click)=\"anew()\">Almost New</span>\n        <span class=\"dropdown-item\" (click)=\"damaged()\">Slightly Damaged</span>\n        <span class=\"dropdown-item\" (click)=\"worn()\">Worn Out</span>\n  \n      </div>\n  \n  </div>\n     \n  \n  </div>\n<br>  \n<div class=\"row\" *ngFor=\"let item of listings\" style=\"margin: 20px; border-bottom: 1px solid black; padding: 20px;\">\n\n    <div class=\"col-md-3 col-sm-12\">\n\n        <a [routerLink]=\"['/listings', item.product_id]\"><img src=\"{{item.url}}\" width=\"150\" height=\"200\"></a>\n\n    </div>\n\n    <div class=\"col-md-6 col-sm-12\">\n\n      <h3><a [routerLink]=\"['/listings', item.product_id]\">{{item.name}}</a></h3>\n      <p style=\"color: gray;\">by {{item.author}}</p>\n  \n      <p><span style=\"color: #b12704;\">Price: <i class=\"fas fa-rupee-sign\"></i>{{item.price}}</span></p>\n      <p style=\"color: gray;\">Condition: {{item.con}}</p>\n    </div>\n\n    <div class=\"col-md-3 col-sm-12\">\n\n\n        <p style=\"color: gray;\">Sold By: {{item.seller}}</p>\n      <p><button class=\"btn btn-dark\" (click)=\"wishlist(item.product_id)\">Add To Wishlist<i  style=\"color: red;\"class=\"fas fa-heart\"></i></button></p>\n      <p><button class=\"btn btn-info\"(click)=\"cart()\">Contact Seller</button></p>\n    </div>\n\n\n</div>\n\n</div>"

/***/ }),

/***/ "./src/app/search/search.component.ts":
/*!********************************************!*\
  !*** ./src/app/search/search.component.ts ***!
  \********************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _request_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../request.service */ "./src/app/request.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SearchComponent = /** @class */ (function () {
    function SearchComponent(http, request, router) {
        this.http = http;
        this.request = request;
        this.router = router;
        this.search = this.request.search;
        this.records = 0;
        this.check = false;
        this.zo = false;
        this.name = "";
        this.searchValue = "";
        this.price1 = 0;
        this.price2 = 10000;
        this.type = "";
    }
    SearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.zo = this.request.z;
        console.log("asdsadas" + this.zo);
        this.request.check(localStorage.getItem("token"), localStorage.getItem("name")).then(function (result) {
            console.log(result);
            console.log("In nginit " + result);
            if (result === true)
                _this.request.z = false;
            else
                _this.request.z = true;
            _this.zo = _this.request.z;
            if (_this.request.z) {
                console.log("getting name");
                var p = { token: localStorage.getItem("token") };
                var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]()
                    .set('Authorization', 'my-auth-token')
                    .set('Content-Type', 'application/json');
                _this.http.post("http://localhost:2000/getName", JSON.stringify(p), { headers: headers }).subscribe(function (data) {
                    _this.name = data["name"];
                    _this.user_id = data["user_id"];
                });
            }
        });
        this.check = true;
        console.log("asdadada" + this.request.search);
        this.search = this.request.search;
        console.log("In nginitasdasd " + this.search);
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]()
            .set('Authorization', 'my-auth-token')
            .set('Content-Type', 'application/json');
        var p = { search: this.request.search };
        this.http.post("http://localhost:2000/search", JSON.stringify(p), { headers: headers }).subscribe(function (data) {
            _this.records = data['length'];
            if (_this.records == 0) {
                alert("No Matching Results");
                _this.router.navigate(['/listings']);
            }
            else {
                _this.listings = data['listings'];
                _this.slistings = _this.listings;
            }
        });
    };
    SearchComponent.prototype.cart = function () {
        if (this.request.z)
            this.router.navigate(['/cart']);
        else
            this.router.navigate(['/login']);
    };
    SearchComponent.prototype.wishlist = function (id) {
        console.log('ss');
        if (this.request.z) {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]()
                .set('Authorization', 'my-auth-token')
                .set('Content-Type', 'application/json');
            var p = { user_id: this.user_id, product_id: id };
            console.log(p);
            this.http.post("http://localhost:2000/wishlist", JSON.stringify(p), { headers: headers }).subscribe(function (data) {
            });
            this.router.navigate(['/wishlist']);
        }
        else
            this.router.navigate(['/login']);
    };
    SearchComponent.prototype.logout = function () {
        console.log("logout");
        localStorage.setItem("name", "");
        localStorage.setItem("token", "");
        this.request.z = false;
        this.zo = this.request.z;
        this.router.navigate(['/login']);
    };
    SearchComponent.prototype.searches = function () {
        var _this = this;
        this.check = true;
        this.request.search = this.searchValue;
        console.log("asdadada" + this.request.search);
        this.search = this.request.search;
        console.log("In nginitasdasd " + this.search);
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]()
            .set('Authorization', 'my-auth-token')
            .set('Content-Type', 'application/json');
        var p = { search: this.request.search };
        this.http.post("http://localhost:2000/search", JSON.stringify(p), { headers: headers }).subscribe(function (data) {
            _this.listings = data['listings'];
            _this.records = data['length'];
            if (_this.records == 0) {
                alert("No Matching Results");
                _this.router.navigate(['/listings']);
            }
        });
    };
    SearchComponent.prototype.phl = function () {
        this.listings.sort(function (a, b) {
            return b.price - a.price;
        });
    };
    SearchComponent.prototype.plh = function () {
        this.listings.sort(function (a, b) {
            return a.price - b.price;
        });
    };
    SearchComponent.prototype.reset = function () {
        this.price1 = 0;
        this.price2 = 10000;
        this.listings = this.slistings;
    };
    SearchComponent.prototype.priceFilter = function (event) {
        console.log(this.price1);
        console.log(this.price2);
        this.items = [];
        for (var i = 0; i < this.slistings.length; i++) {
            if (this.slistings[i].price >= this.price1 && this.slistings[i].price <= this.price2)
                this.items.push(this.slistings[i]);
        }
        if (this.items.length == 0) {
            this.price1 = 0;
            this.price2 = 10000;
            alert("No items according to this filter");
            this.listings = this.slistings;
        }
        else
            this.listings = this.items;
    };
    SearchComponent.prototype.new = function () {
        this.type = "New";
        this.items = [];
        if (this.price1 == 0 && this.price2 == 10000) {
            for (var i = 0; i < this.slistings.length; i++) {
                if (this.slistings[i].con == "New")
                    this.items.push(this.slistings[i]);
            }
        }
        else {
            for (var i = 0; i < this.listings.length; i++) {
                if (this.listings[i].con == "New")
                    this.items.push(this.listings[i]);
            }
        }
        if (this.items.length == 0) {
            alert('No book according to corresponding filter condition');
            this.price1 = 0;
            this.price2 = 10000;
            this.type = '';
            this.listings = this.slistings;
        }
        else
            this.listings = this.items;
    };
    SearchComponent.prototype.anew = function () {
        this.type = "Almost New";
        this.items = [];
        if (this.price1 == 0 && this.price2 == 10000) {
            for (var i = 0; i < this.slistings.length; i++) {
                if (this.slistings[i].con == "Almost New")
                    this.items.push(this.slistings[i]);
            }
        }
        else {
            for (var i = 0; i < this.listings.length; i++) {
                if (this.listings[i].con == "Almost New")
                    this.items.push(this.listings[i]);
            }
        }
        if (this.items.length == 0) {
            alert('No Almost New Books Here');
            this.price1 = 0;
            this.price2 = 10000;
            this.type = '';
            this.listings = this.slistings;
        }
        else
            this.listings = this.items;
    };
    SearchComponent.prototype.worn = function () {
        this.type = "Worn Out";
        this.items = [];
        if (this.price1 == 0 && this.price2 == 10000) {
            for (var i = 0; i < this.slistings.length; i++) {
                if (this.slistings[i].con == "Worn Out")
                    this.items.push(this.slistings[i]);
            }
        }
        else {
            for (var i = 0; i < this.listings.length; i++) {
                if (this.listings[i].con == "Worn Out")
                    this.items.push(this.listings[i]);
            }
        }
        if (this.items.length == 0) {
            alert('No Worn Out Books here');
            this.price1 = 0;
            this.price2 = 10000;
            this.type = '';
            this.listings = this.slistings;
        }
        else
            this.listings = this.items;
    };
    SearchComponent.prototype.damaged = function () {
        this.type = "Slightly Damaged";
        this.items = [];
        if (this.price1 == 0 && this.price2 == 10000) {
            for (var i = 0; i < this.slistings.length; i++) {
                if (this.slistings[i].con == "Slightly Damaged")
                    this.items.push(this.slistings[i]);
            }
        }
        else {
            for (var i = 0; i < this.listings.length; i++) {
                if (this.listings[i].con == "Slightly Damaged")
                    this.items.push(this.listings[i]);
            }
        }
        if (this.items.length == 0) {
            alert('No Books according to corresponding filter condition');
            this.price1 = 0;
            this.price2 = 10000;
            this.type = '';
            this.listings = this.slistings;
        }
        else
            this.listings = this.items;
    };
    SearchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-search',
            template: __webpack_require__(/*! ./search.component.html */ "./src/app/search/search.component.html"),
            styles: [__webpack_require__(/*! ./search.component.css */ "./src/app/search/search.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _request_service__WEBPACK_IMPORTED_MODULE_2__["RequestService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], SearchComponent);
    return SearchComponent;
}());



/***/ }),

/***/ "./src/app/signup/signup.component.css":
/*!*********************************************!*\
  !*** ./src/app/signup/signup.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#signup{\r\n    width: 65%;\r\n}\r\n.container{\r\n    margin-top: 20px;\r\n\r\n}\r\n.error{\r\n    display: none;\r\n}\r\n.success{\r\n    display: none;\r\n}\r\n"

/***/ }),

/***/ "./src/app/signup/signup.component.html":
/*!**********************************************!*\
  !*** ./src/app/signup/signup.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<div class=\"container\">\n\n<div class=\"row\">\n\n  \n  <div class=\"col-md-3\"></div>\n  <div class=\"col-md-5\" style=\"border: 1px solid gray; padding: 30px;\">\n      <h1 style=\"text-align: center; color: maroon;\">Sign Up</h1>\n      <br>\n      <div class=\"alert alert-danger error\" role=\"alert\">\n          <strong>{{error}}</strong>\n        </div>\n        <div class=\"alert alert-success success\" role=\"alert\">\n            {{success}}\n          </div>\n\n    <div class=\"form-group\">\n        <label for=\"name\"><h6><i class=\"fas fa-address-card\"></i> Name</h6></label>\n        <input type=\"text\" class=\"form-control\" id=\"name\" placeholder=\"Your name\" [(ngModel)]=\"name\" required>\n      </div>\n    <div class=\"form-group\">\n      <label for=\"email\"><h6><i class=\"fas fa-envelope\"></i> Email address</h6></label>\n      <input type=\"email\" class=\"form-control\" [(ngModel)]=\"email\" id=\"email\" aria-describedby=\"emailHelp\" placeholder=\"Enter email\" required>\n      <small id=\"emailHelp\" class=\"form-text text-muted\">We'll never share your email with anyone else.</small>\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"password\"><h6><i class=\"fas fa-key\"></i> Password</h6></label>\n      <input type=\"password\" class=\"form-control\" [(ngModel)]=\"password\" id=\"password\" placeholder=\"Password\" required>\n    </div>\n    <div class=\"form-group\">\n        <label for=\"college\"><h6><i class=\"fas fa-graduation-cap\"></i> College</h6></label>\n        <input type=\"text\" class=\"form-control\" id=\"college\" [(ngModel)]=\"college\"  placeholder=\"Your College\" required>\n      </div>\n      <div class=\"form-group\">\n          <label for=\"address\"><h6><i class=\"fas fa-address-book\"></i> Address</h6></label>\n          <input type=\"text\" class=\"form-control\" id=\"address\" [(ngModel)]=\"address\" placeholder=\"Your Address\" required>\n        </div>\n        <div class=\"form-group\">\n            <label for=\"phone\"><h6><i class=\"fas fa-phone\"></i> Contact No:</h6></label>\n            <input type=\"text\" class=\"form-control\" id=\"phone\" [(ngModel)]=\"contactno\" placeholder=\"Phone No:\" required>\n          </div>\n    \n    <button id=\"signupbut\" class=\"btn btn-primary\" (click)=\"signup()\">Submit</button>\n    <button id=\"loginbut\" class=\"btn btn-success\" (click)=\"login()\">Already Registered? Login</button>\n    </div>\n  <div class=\"col-md-4\"></div>\n</div>\n</div>"

/***/ }),

/***/ "./src/app/signup/signup.component.ts":
/*!********************************************!*\
  !*** ./src/app/signup/signup.component.ts ***!
  \********************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _request_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../request.service */ "./src/app/request.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SignupComponent = /** @class */ (function () {
    function SignupComponent(http, request, router) {
        this.http = http;
        this.request = request;
        this.router = router;
        this.name = "";
        this.college = "";
        this.password = "";
        this.email = "";
        this.address = "";
        this.contactno = "";
        this.error = "";
        this.success = "";
    }
    SignupComponent.prototype.ngOnInit = function () {
    };
    SignupComponent.prototype.validateEmail = function (email) {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };
    SignupComponent.prototype.signup = function () {
        var _this = this;
        this.error = "";
        if (this.name == "")
            this.error += "Name field is empty";
        else if (this.email == "")
            this.error += "Email Field is empty";
        else if (this.validateEmail(this.email) == false)
            this.error = "Email is not valid!!!";
        else if (this.password == "")
            this.error += "Password Field is empty";
        else if (this.college == "")
            this.error += "College Field is empty";
        else if (this.address == "")
            this.error += "Address Field is empty";
        else if (this.contactno == "")
            this.error += "Contact No: Field Is Empty";
        else if (this.contactno.length != 10)
            this.error += "Contact No: must be of 10 digits!!";
        if (this.error != "") {
            var v = document.getElementsByClassName('error');
            if (v.length != 0)
                v[0].style.display = "block";
        }
        else {
            v = document.getElementsByClassName('error');
            if (v.length != 0)
                v[0].style.display = "none";
            alert('Succesfully Signed Up');
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]()
                .set('Authorization', 'my-auth-token')
                .set('Content-Type', 'application/json');
            var p = { name: this.name, email: this.email, password: this.password, college: this.college, address: this.address, contactno: this.contactno };
            console.log(JSON.stringify(p));
            this.http.post("http://localhost:2000/signup", JSON.stringify(p), { headers: headers }).subscribe(function (data) {
                localStorage.setItem('token', data['token']);
                localStorage.setItem('name', _this.name);
                _this.request.z = true;
                _this.router.navigate(['listings']);
            });
        }
    };
    SignupComponent.prototype.login = function () {
        this.router.navigate(['/login']);
    };
    SignupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! ./signup.component.html */ "./src/app/signup/signup.component.html"),
            styles: [__webpack_require__(/*! ./signup.component.css */ "./src/app/signup/signup.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _request_service__WEBPACK_IMPORTED_MODULE_3__["RequestService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/app/wishlist/wishlist.component.css":
/*!*************************************************!*\
  !*** ./src/app/wishlist/wishlist.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container{\r\n    margin-top: 20px;\r\n\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/wishlist/wishlist.component.html":
/*!**************************************************!*\
  !*** ./src/app/wishlist/wishlist.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<div class=\"container\">\n<h1 *ngIf = \" ( items.length === 0 )\">Your Wishlist is Empty...</h1>\n<div *ngIf = \" ( items.length !== 0 )\">\n  \n  <h1>Your Wishlist({{items.length}})</h1>\n  <div *ngFor=\"let item of items\">\n\n    <div class=\"row\" style=\"margin: 20px; border: 1px solid gray; padding: 15px;\">\n\n      <div class=\"col-md-3 col-sm-12\">\n          <a [routerLink]=\"['/listings', item.product_id]\"><img src=\"{{item.url}}\" width=\"200\" height=\"200\"></a>\n      </div>\n\n      <div class=\"col-md-6 col-sm-12\">\n\n        <h2><a [routerLink]=\"['/listings', item.product_id]\">{{item.name}}</a></h2>\n        <p style=\"color: gray;\">by {{item.author}}</p>\n        <h6><span style=\"color: #b12704;\">Price: <i class=\"fas fa-rupee-sign\"></i>{{item.price}}</span></h6>\n        <p style=\"color: gray;\">Condition: {{item.con}}</p>\n        \n\n      </div>\n\n      \n    <div class=\"col-md-3 col-sm-12\">\n\n        <br>\n        <p>Sold By: {{item.seller}}</p>\n        <p><button class=\"btn btn-danger\" (click)=\"remove(item.product_id)\">Remove</button></p>\n    </div>\n\n    </div>\n\n  </div>\n</div>\n</div>"

/***/ }),

/***/ "./src/app/wishlist/wishlist.component.ts":
/*!************************************************!*\
  !*** ./src/app/wishlist/wishlist.component.ts ***!
  \************************************************/
/*! exports provided: WishlistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WishlistComponent", function() { return WishlistComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _request_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../request.service */ "./src/app/request.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WishlistComponent = /** @class */ (function () {
    function WishlistComponent(http, request, router) {
        this.http = http;
        this.request = request;
        this.router = router;
        this.items = [];
    }
    WishlistComponent.prototype.ngOnInit = function () {
        var _this = this;
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]()
            .set('Authorization', 'my-auth-token')
            .set('Content-Type', 'application/json');
        var object = { token: localStorage.getItem("token") };
        this.http.post("http://localhost:2000/getName", JSON.stringify(object), { headers: headers }).subscribe(function (data) {
            _this.user_id = data['user_id'];
            console.log("Id is " + _this.user_id);
            headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]()
                .set('Authorization', 'my-auth-token')
                .set('Content-Type', 'application/json');
            var objects = { user_id: _this.user_id };
            _this.http.post("http://localhost:2000/getWishlist", JSON.stringify(objects), { headers: headers }).subscribe(function (data) {
                _this.listings = data['product_id'];
                for (var i = 0; i < _this.listings.length; i++) {
                    headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]()
                        .set('Authorization', 'my-auth-token')
                        .set('Content-Type', 'application/json');
                    var p = { id: _this.listings[i].product_id };
                    console.log(JSON.stringify(p));
                    _this.http.post("http://localhost:2000/getItem", JSON.stringify(p), { headers: headers }).subscribe(function (data) {
                        console.log(data["item"]);
                        _this.items.push(data['item']);
                    });
                }
            });
        });
    };
    WishlistComponent.prototype.remove = function (productid) {
        for (var i = 0; i < this.items.length; i++) {
            if (this.items[i].product_id == productid)
                this.items.splice(i, 1);
        }
        console.log(productid);
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]()
            .set('Authorization', 'my-auth-token')
            .set('Content-Type', 'application/json');
        var p = { user_id: this.user_id, product_id: productid };
        console.log(JSON.stringify(p));
        this.http.post("http://localhost:2000/delete", JSON.stringify(p), { headers: headers }).subscribe(function (data) {
            alert("Item Removed");
            // Redoing same thing;
        });
    };
    WishlistComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-wishlist',
            template: __webpack_require__(/*! ./wishlist.component.html */ "./src/app/wishlist/wishlist.component.html"),
            styles: [__webpack_require__(/*! ./wishlist.component.css */ "./src/app/wishlist/wishlist.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _request_service__WEBPACK_IMPORTED_MODULE_3__["RequestService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], WishlistComponent);
    return WishlistComponent;
}());



/***/ }),

/***/ "./src/app/yourlistings/yourlistings.component.css":
/*!*********************************************************!*\
  !*** ./src/app/yourlistings/yourlistings.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container{\r\n    margin-top: 20px;\r\n\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/yourlistings/yourlistings.component.html":
/*!**********************************************************!*\
  !*** ./src/app/yourlistings/yourlistings.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<div class=\"container\">\n<h1 *ngIf=\"(listings.length==0)\">No Items Uploaded!!!!</h1>\n\n\n<div *ngIf=\"(listings.length>0)\" style=\"margin-top: 60px;\">\n\n    <h1>Items You Are Selling!!!!</h1>\n  <div *ngFor='let item of listings'>\n\n      <div class=\"row\" style=\"border-bottom: 1px solid gray; padding: 20px; margin: 20px;\">\n\n        <div class=\"col-md-4 col-sm-12\">\n\n            <a [routerLink]=\"['/listings', item.product_id]\"><img src=\"{{item.url}}\" style=\"height: 150px;\"></a>\n\n        </div>\n\n        <div class=\"col-md-8 col-sm-12\">\n\n\n            <h2><a [routerLink]=\"['/listings', item.product_id]\">{{item.name}}</a></h2>\n            <p style=\"color: gray;\">by {{item.author}}</p>\n          <div class=\"row\">\n            <div class=\"col-md-4 col-sm-4\">\n                <h5 style=\"color: #b12704;\">Price: <i class=\"fas fa-rupee-sign\"></i>{{item.price}}</h5>\n              \n                <p>Condition: {{item.con}}</p>\n                <button class=\"btn btn-danger\" (click)=\"remove(item.product_id)\">Remove Item</button>\n            </div>\n\n            <div class=\"col-md-8 col-sm-8\">\n\n              <p>{{item.description}}</p>\n               \n            </div>\n          </div>\n        </div>\n      </div>\n\n  </div>\n\n</div>\n\n</div>"

/***/ }),

/***/ "./src/app/yourlistings/yourlistings.component.ts":
/*!********************************************************!*\
  !*** ./src/app/yourlistings/yourlistings.component.ts ***!
  \********************************************************/
/*! exports provided: YourlistingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YourlistingsComponent", function() { return YourlistingsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _request_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../request.service */ "./src/app/request.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var YourlistingsComponent = /** @class */ (function () {
    function YourlistingsComponent(http, request, router) {
        this.http = http;
        this.request = request;
        this.router = router;
        this.name = "";
        this.listings = [];
    }
    YourlistingsComponent.prototype.ngOnInit = function () {
        var _this = this;
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]()
            .set('Authorization', 'my-auth-token')
            .set('Content-Type', 'application/json');
        var object = { token: localStorage.getItem("token") };
        this.http.post("http://localhost:2000/getName", JSON.stringify(object), { headers: headers }).subscribe(function (data) {
            console.log(data["name"]);
            _this.name = data["name"];
            console.log(name + "asdad");
            headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]()
                .set('Authorization', 'my-auth-token')
                .set('Content-Type', 'application/json');
            var objects = { name: _this.name };
            _this.http.post("http://localhost:2000/getListings", JSON.stringify(objects), { headers: headers }).subscribe(function (data) {
                console.log(data["listings"]);
                _this.listings = data["listings"];
            });
        });
    };
    YourlistingsComponent.prototype.remove = function (product_id) {
        var _this = this;
        console.log("remove");
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]()
            .set('Authorization', 'my-auth-token')
            .set('Content-Type', 'application/json');
        var objects = { id: product_id };
        this.http.post("http://localhost:2000/removeItem", JSON.stringify(objects), { headers: headers }).subscribe(function (data) {
            for (var i = 0; i < _this.listings.length; i++) {
                if ((_this.listings[i].product_id == product_id)) {
                    _this.listings.splice(i, 1);
                    break;
                }
            }
        });
    };
    YourlistingsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-yourlistings',
            template: __webpack_require__(/*! ./yourlistings.component.html */ "./src/app/yourlistings/yourlistings.component.html"),
            styles: [__webpack_require__(/*! ./yourlistings.component.css */ "./src/app/yourlistings/yourlistings.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _request_service__WEBPACK_IMPORTED_MODULE_3__["RequestService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], YourlistingsComponent);
    return YourlistingsComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! F:\Nagarro\angular\finalproject\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map