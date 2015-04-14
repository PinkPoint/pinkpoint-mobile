export default class HomeCtrl {
    constructor(addRouteModal, ascents) {
        this.addRouteModal = addRouteModal;

        ascents.byClimber().then(ascents => {
            this.routesToday = ascents.map(a => {return a.route});
        });
    }

    addRoute() {
        this.addRouteModal.open().then(r => {
            this.routesToday.unshift(r);
        });
    }
}