const baseUrl = 'http://projectpinkpoint.azurewebsites.net';

export class Routes {
    constructor($http) {
        this.$http = $http;
    }

    all() {
        return this.$http.get(`${baseUrl}/routes`).then(r => r.data);
    }
}

export class Ascents {
    constructor($http, userService) {
        this.$http = $http;
        this.userService = userService;
    }

    byClimber() {
        return this.$http
            .get(`${baseUrl}/ascents?climber=${this.userService.id}`)
            .then(r => r.data);
    }
}