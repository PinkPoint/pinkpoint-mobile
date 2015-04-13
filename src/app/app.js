import routes from './config/routes.js';
import cordovaInit from './config/cordova.config';
import HomeCtrl from './home/home';

var dependencies = [
    'ionic'
];

angular
    .module('pinkpoint', dependencies)
    .controller('HomeCtrl', HomeCtrl)
    .config(routes)
    .run(cordovaInit);