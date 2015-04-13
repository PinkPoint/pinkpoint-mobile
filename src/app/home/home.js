export default class HomeCtrl {
    constructor(addRouteModal) {
        this.addRouteModal = addRouteModal;
        this.dummydata();
    }

    addRoute() {
        this.addRouteModal.open().then(r => {
            this.routesToday.unshift(r);
        });
    }

    dummydata() {
        this.routesToday = [
            { name: 'Dreamcatcher', difficulty: '6a'},
            { name: 'Dreamcatcher', difficulty: '6a'},
            { name: 'Dreamcatcher', difficulty: '6a'},
            { name: 'Dreamcatcher', difficulty: '6a'},
            { name: 'Dreamcatcher', difficulty: '6a'},
            { name: 'Dreamcatcher', difficulty: '6a'}
        ];
    }
}