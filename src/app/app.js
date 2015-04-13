import routes from './config/routes.js';
import cordovaInit from './config/cordova.config';
import HomeCtrl from './home/home';
import OverviewDirective from './overview/overview';
import AddRouteModal from './addroute/addroute';
import {Routes} from './core/pinkpointApi';

var dependencies = [
    'ionic'
];

angular
    .module('pinkpoint', dependencies)
    .controller('HomeCtrl', HomeCtrl)
    .directive('overview', OverviewDirective)
    .service('addRouteModal', AddRouteModal)
    .service('routes', Routes)
    .config(routes)
    .run(cordovaInit);