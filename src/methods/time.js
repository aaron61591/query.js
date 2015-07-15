(function () {
    'use strict';

    /**
     * setup methods
     */
    window.$.method.time = [
        'delay',
        function (query, args) {

            setTimeout(function () {

                query.promise.resolve();
            }, args[0]);
        }
    ];
})();