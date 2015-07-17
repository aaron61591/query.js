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
        query.selectors = selectors;

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
        (function () {

            if (!$.generator.init(query, selectors)) {
                query._initEls(query, selectors);
            }
        })();

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

            $.cache.set(selectors, query.els);
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