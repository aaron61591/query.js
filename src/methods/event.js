(function () {

    var m = window.$.method;

    /**
     * on event
     */
    function on(query, args) {

        m.exec(query, function (e) {

            e.addEventListener(args[0], args[1], args[2]);
        });

        query.promise.resolve();
    }

    /**
     * off event
     */
    function off(query, args) {

        m.exec(query, function (e) {

            e.removeEventListener(args[0], args[1], args[2]);
        });

        query.promise.resolve();
    }

    /**
     * setup methods
     */
    m.event = [
        'on', on,
        'off', off
    ];
})();