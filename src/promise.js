(function () {

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
        this._thens = [];
    }

    /**
     * resolve
     */
    Promise.prototype.resolve = function () {

        var method = this._thens.shift();

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
            this._thens.push(cb);
        }
    };

    window.$.Promise = Promise;
})();