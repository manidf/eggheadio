/**
 * Created by mannuel on 2015/01/12.
 */

var egghead = angular.module("egghead", []);

egghead.controller("AppCtrl", function () {
    var app = this;

    app.message = "Hello there";

})

egghead.directive("myDirective", function () {
    return function () {
        console.log("Hello");
    }
})
