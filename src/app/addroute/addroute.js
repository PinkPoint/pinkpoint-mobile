export default class AddRouteModal {
    constructor($rootScope, $ionicModal, $q, routes) {
        this.modalScope = $rootScope.$new();
        this.$ionicModal = $ionicModal;
        this.$q = $q;
        this.routes = routes;

        this.initModal();
    }

    open() {
        this.routes.all().then(routes => {
            this.modalScope.routes = routes;
        });

        this.modalScope.search = {};
        this.modal.show();
        this.defered = this.$q.defer();
        return this.defered.promise;
    }

    initModal() {
        this.$ionicModal.fromTemplateUrl('app/addroute/addroute.html', {
            scope: this.modalScope,
            animation: 'slide-in-up',
            focusFirstInput: true
        }).then(modal => {
            this.modal = modal;
        });

        this.modalScope.cancel = () => {
            this.modal.hide().then(() => {
                this.defered.reject();
            });
        };

        this.modalScope.addRoute = (selectedRoute) => {
            this.modal.hide().then(() => {
                this.defered.resolve(selectedRoute);
            });
        };
    }
}