'use strict';
(function () {

    /**
     * class query
     */
    function Query(selectors) {

        var query = this;

        /**
         * selectors of this query
         */
        query.selectors = '';

        /**
         * element list
         */
        query.els = [];

        /**
         * query promise
         */
        query.promise = new $.Promise();

        /**
         * initialize Query
         */
        if (typeof selectors === 'object') {
            query.els.push(selectors);
        } else if (!$.generator.init(query, selectors)) {
            query.selectors = selectors;
            query._initEls(query, selectors);
        }

        return query;
    }

    /**
     * query all funciton
     */
    Query.prototype._initEls = function (query, selectors) {

        var els = $.cache.get(selectors);
        if (els) {
            query.els = els;
        } else {
            query.els = document.querySelectorAll.call(document, selectors);

            if (query.els && query.els.length) {
                $.cache.set(selectors, query.els);
            }
        }
    };

    /**
     * define entry of QueryJs
     */
    var $ = window.$ = function (selectors) {

        return new Query(selectors);
    };

    /**
     * genera method
     */
    $.init = function () {

        $.method.setup(Query);
    };
})();