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

        return function () {

            window.$.method._exec(this, function (e) {

                var show = e.getAttribute('query-show');

                if (show) {
                    e.style.display = show;
                } else {
                    e.style.display = 'initial';
                }
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

                e.setAttribute('query-show', e.style.display);
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