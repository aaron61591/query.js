(function () {
    'use strict';

    /**
     * class event
     */
    function Event() {}

    /**
     * on event
     */
    Event._getOn = function () {

        return function (eventName, fun, useCapture) {

            window.$.method._exec(this, function (e) {

                e.addEventListener(eventName, fun, useCapture);
            });

            this.promise.resolve();
        };
    };

    /**
     * off event
     */
    Event._getOff = function () {

        return function (eventName, fun, useCapture) {

            window.$.method._exec(this, function (e) {

                e.addEventListener(eventName, fun, useCapture);
            });

            this.promise.resolve();
        };
    };

    /**
     * setup methods
     */
    window.$.method.event = [
        'on', Event._getOn(),
        'off', Event._getOff()
    ];
})();