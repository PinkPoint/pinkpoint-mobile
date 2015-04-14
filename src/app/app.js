import routes from './config/routes.js';
import cordovaInit from './config/cordova.config';
import HomeCtrl from './home/home';
import OverviewDirective from './overview/overview';
import UserService from './core/userService';
import AddRouteModal from './addroute/addroute';
import {Routes, Ascents} from './core/pinkpointApi';

var dependencies = [
    'ionic'
];

angular
    .module('pinkpoint', dependencies)
    .controller('HomeCtrl', HomeCtrl)
    .directive('overview', OverviewDirective)
    .service('addRouteModal', AddRouteModal)
    .service('userService', UserService)
    .service('routes', Routes)
    .service('ascents', Ascents)
    .config(routes)
    .run(cordovaInit);