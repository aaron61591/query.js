(function () {

    var m = window.$.method;

    /**
     * setup methods
     */
    window.$.method.func = [
        'exec',
        function (query, args) {

            args[0](query);

            query.promise.resolve();
        },
        'each',
        function (query, args) {

            m.exec(query, function (e, i) {

                args[0]($(e), i);
            });
        }
    ];
})();