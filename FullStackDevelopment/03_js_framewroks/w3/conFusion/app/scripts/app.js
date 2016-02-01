// This files is used to declare all the modules that make your Angular app
'use strict';
/**
 * ### Uncomment to use ngRoute ###
angular.module('confusionApp', ['ngRoute'])
    .config(function($routeProvider){
        $routeProvider
            .when('/contactus', {templateUrl:'contactus.html', controller:'ContactController'})
            .when('/menu', {templateUrl:'menu.html', controller:'MenuController'})
            .when('/menu/:id', {templateUrl:'dishdetail.html', controller:'DishDetailController'})
            .otherwise('/contactus');
    });
 **/
angular.module('confusionApp',['ui.router'])
    .config(function($stateProvider, $urlRouterProvider){
        $stateProvider
            .state('app',{
                url:'/',
                views:{
                    'header':{templateUrl:'views/header.html'},
                    'content':{template:'<h1>To be completed</h1>', controller:'IndexController'},
                    'footer':{templateUrl:'views/footer.html'}
                }
            })
            .state('app.aboutus',{
                url:'aboutus',
                views:{
                    'content@':{template:'<h1>To be completed</h1>', controller:'AboutController'}
                }
            })
            .state('app.contactus',{
                url:'contactus',
                views:{
                    'content@':{templateUrl:'views/contactus.html', controller:'ContactController'}
                }
            })
            .state('app.menu',{
                url:'menu',
                views:{
                    'content@':{templateUrl:'views/menu.html', controller:'MenuController'}
                }
            })
            .state('app.dishdetails',{
                url:'menu/:id',
                views:{
                    'content@':{templateUrl:'views/dishdetail.html', controller:'DishDetailController'}
                }
            });
        $urlRouterProvider.otherwise('/');
    });

