const baseUrl = 'http://projectpinkpoint.azurewebsites.net';

export class Routes {
    constructor($http) {
        this.$http = $http;
    }

    all() {
        return this.$http.get(`${baseUrl}/routes`).then(r => r.data);
    }
}