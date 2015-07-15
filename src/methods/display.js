(function () {
    'use strict';

    /**
     * class display
     */
    function Display() {}

    /**
     * show element
     */
    Display._getShow = function () {

        return function (display) {

            window.$.method._exec(this, function (e) {

                e.style.display = display || 'block';
            });

            this.promise.resolve();
        };
    };

    /**
     * hide element
     */
    Display._getHide = function () {

        return function () {

            window.$.method._exec(this, function (e) {

                if (e.style.display === 'none') {
                    return;
                }
                e.style.display = 'none';
            });

            this.promise.resolve();
        };
    };

    /**
     * add method
     */
    window.$.method.display = [
        'show', Display._getShow(),
        'hide', Display._getHide()
    ];
})();