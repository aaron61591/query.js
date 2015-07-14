(function () {
    'use strict';

    /**
     * class promise
     */
    function Promise() {

        /**
         * promise state
         */
        this.state = 1;

        /**
         * then handler
         */
        this._thenHandler = [];
    }

    /**
     * resolve
     */
    Promise.prototype.resolve = function () {

        var method = this._thenHandler.shift();

        this.state = 1;

        if (method) {
            method();
        }
    };

    /**
     * then
     */
    Promise.prototype.then = function (cb) {

        if (this.state) {
            this.state = 0;
            cb();
        } else {
            this._thenHandler.push(cb);
        }
    };

    window.$.Promise = Promise;
})();