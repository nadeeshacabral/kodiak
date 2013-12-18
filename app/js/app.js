'use strict';


// Declare app level module which depends on filters, and services
var app = angular.module('kodiak', ['kodiak.filters', 'kodiak.services', 'kodiak.directives', 'kodiak.controllers', 'ui.state', 'ui.bootstrap', 'ui.date', 'ngStorage', 'ui.slider', 'textAngular', 'ngSanitize', 'ngProgress', 'chieffancypants.loadingBar', 'ngGrid']);

app.config(function($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider, cfpLoadingBarProvider) {

    cfpLoadingBarProvider.includeSpinner = true;

    // enable xhr
    $httpProvider.defaults.useXDomain = true;

    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: 'partials/landing.html'
        });

    $stateProvider
        .state('signup', {
            url: '/signup',
            templateUrl: 'partials/signup.html',
            controller: 'SignupCtrl'
        });

    $stateProvider
        .state('login', {
            url: '/login',
            templateUrl: 'partials/login.html',
            controller: 'LoginCtrl'
        });

    $stateProvider
        .state('activate', {
            url: '/activate',
            templateUrl: 'partials/activate.html',
            controller: 'ActivateCtrl'
        });

    $stateProvider
        .state('my_dashboard', {
            url: '/me',
            templateUrl: 'partials/dashboard_me.html',
            controller: 'MeDashboardCtrl'
        });

    $stateProvider
        .state('profileEdit', {
            url: '/me/edit',
            templateUrl: 'partials/me.html',
            controller: 'MeCtrl'
        });

    $stateProvider
        .state('profileView', {
            url: '/me/view',
            templateUrl: 'partials/me.html',
            controller: 'MeCtrl'
        });

    $stateProvider
        .state('organization_create', {
            url: '/organization/create',
            templateUrl: 'partials/organization_create.html',
            controller: 'CreateOrgCtrl'
        });

    $stateProvider
        .state('organization_dashboard', {
            url: '/organization/dashboard',
            templateUrl: 'partials/dashboard_org.html',
            controller: 'ViewOrgCtrl'
        });

    $stateProvider
        .state('campaign_home', {
            url: '/organization/campaign/:adId',
            templateUrl: 'partials/campaign_home.html',
            controller: 'ViewCampaignCtrl'
        });

    $stateProvider
        .state('organization_ad_create', {
            url: '/organization/ad/create',
            templateUrl: 'partials/ad_create.html',
            controller: 'CreateAdCtrl'
        });

    $stateProvider
        .state('organization_ad_view', {
            url: '/organization/ad/{adId}/view',
            templateUrl: 'partials/ad_view.html',
            controller: 'ViewAdCtrl'
        });

    $stateProvider
        .state('organization_ad_edit', {
            url: '/organization/ad/{adId}/edit',
            templateUrl: 'partials/ad_create.html',
            controller: 'CreateAdCtrl'
        });

    $stateProvider
        .state('organization_search_create', {
            url: '/organization/ad/{adId}/search/create',
            templateUrl: 'partials/search.html',
            controller: 'SearchCtrl'
        });

    $stateProvider
        .state('organization_search_view', {
            url: '/organization/ad/{adId}/search/{searchId}',
            templateUrl: 'partials/search.html',
            controller: 'SearchCtrl'
        });

    $stateProvider
        .state('logout', {
            url: '/logout',
            templateUrl: 'partials/logout.html',
            controller: 'LogoutCtrl'
        });

});

app.run(function($rootScope, userService) {
    $rootScope.$on('restorestate', userService.restoreState);
    $rootScope.$on('logout', userService.logout);
    $rootScope.$broadcast('restorestate');
});