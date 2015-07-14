(function () {
    'use strict';

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

            Query._bindMethods(query);
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

            this._bindMethods(query);

            window.$.cache.set(selectors, query.els);
        }
    };

    /**
     * bind static method to obj
     */
    Query._bindMethod = function (query, p) {

        query[p] = function () {

            return Query[p].apply(query, arguments);
        };
    };

    /**
     * bind static methods to obj
     */
    Query._bindMethods = function (query) {

        for (var p in Query) {
            if (Query.hasOwnProperty(p) &&
                typeof Query[p] === 'function' &&
                p[0] !== '_') {
                Query._bindMethod(query, p);
            }
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