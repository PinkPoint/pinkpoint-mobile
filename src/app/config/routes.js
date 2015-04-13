export default function($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('menu', {
            url: "/menu",
            abstract: true,
            templateUrl: "app/menu/menu.html"
        })
        .state('menu.home', {
            url: "/home",
            views: {
                'menuContent' :{
                    templateUrl: "app/home/home.html",
                    controller: 'HomeCtrl as homeCtrl'
                }
            }
        });

    $urlRouterProvider.otherwise("/menu/home");
}