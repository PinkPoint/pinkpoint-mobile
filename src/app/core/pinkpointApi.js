export default class PinkPointApi {
    constructor($q) {
        this.$q = $q;
    }

    getAll() {
        var defered = this.$q.defer();

        defered.resolve([
            { name: 'Birdman', difficulty: '6a'},
            { name: 'Birdman2', difficulty: '5a'},
            { name: 'Birdman3', difficulty: '5a'},
            { name: 'Birdman4', difficulty: '5a'},
            { name: 'Birdman5', difficulty: '5a'},
            { name: 'Birdman6', difficulty: '5a'}
        ]);

        return defered.promise;
    }
}