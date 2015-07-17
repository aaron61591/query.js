(function () {

    /**
     * class cache
     */
    function Cache() {}

    /**
     * cache data
     */
    Cache.data = {};

    /**
     * get query
     */
    Cache.get = function (selectors) {

        return this.data[selectors];
    };

    /**
     * set query
     */
    Cache.set = function (selectors, query) {

        this.data[selectors] = query;
    };

    /**
     * delete query
     */
    Cache.delete = function (selectors) {

        this.data[selectors] = null;
    };

    /**
     * clear all data
     */
    Cache.clear = function () {

        this.data = {};
    };

    window.$.cache = Cache;
})();