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
        query.promise = new window.$.Promise();

        /**
         * initialize Query
         */
        (function () {

            if (!window.$.generator(query, selectors)) {
                Query._initEls(query, selectors);
            }
        })();

        return query;
    }

    /**
     * query all funciton
     */
    Query._initEls = function (query, selectors) {

        var els = window.$.cache.get(selectors);
        if (els) {
            query.els = els;
        } else {
            query.els = document.querySelectorAll.call(document, selectors);

            window.$.cache.set(selectors, query.els);
        }
    };

    /**
     * define entry of QueryJs
     */
    window.$ = function (selectors) {

        return new Query(selectors);
    };

    /**
     * genera method
     */
    window.$.init = function () {

        window.$.method.setup(Query);
    };
})();