import routes from './config/routes.js';
import cordovaInit from './config/cordova.config';
import HomeCtrl from './home/home';
import OverviewDirective from './overview/overview.js';

var dependencies = [
    'ionic'
];

angular
    .module('pinkpoint', dependencies)
    .controller('HomeCtrl', HomeCtrl)
    .directive('overview', OverviewDirective)
    .config(routes)
    .run(cordovaInit);