import routes from './config/routes.js';
import cordovaInit from './config/cordova.config';
import HomeCtrl from './home/home';
import OverviewDirective from './overview/overview';
import AddRouteModal from './addroute/addroute';
import PinkPointApi from './core/pinkpointApi';

var dependencies = [
    'ionic'
];

angular
    .module('pinkpoint', dependencies)
    .controller('HomeCtrl', HomeCtrl)
    .directive('overview', OverviewDirective)
    .service('addRouteModal', AddRouteModal)
    .service('pinkPointApi', PinkPointApi)
    .config(routes)
    .run(cordovaInit);