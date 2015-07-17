(function () {

    /**
     * on event
     */
    function on(query, args) {

        window.$.method._exec(query, function (e) {

            e.addEventListener(args[0], args[1], args[2]);
        });

        query.promise.resolve();
    }

    /**
     * off event
     */
    function off(query, args) {

        window.$.method._exec(query, function (e) {

            e.addEventListener(args[0], args[1], args[2]);
        });

        query.promise.resolve();
    }

    /**
     * setup methods
     */
    window.$.method.event = [
        'on', on,
        'off', off
    ];
})();