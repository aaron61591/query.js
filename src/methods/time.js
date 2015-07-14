(function () {

    'use strict';

    /**
     * class time
     */
    function Time() {}

    /**
     * wait times excute
     */
    Time._getDelay = function () {

        return function (time) {

            var self = this;

            setTimeout(function () {

                self.promise.resolve();
            }, time);
        };
    };

    /**
     * setup methods
     */
    window.$.method.time = [
        'delay', Time._getDelay()
    ];
})();