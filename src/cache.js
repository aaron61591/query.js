(function () {

    /**
     * cache data
     */
    var data = {};

    window.$.cache = {

        /**
         * get query
         */
        get: function (selectors) {

            return data[selectors];
        },

        /**
         * set query
         */
        set: function (selectors, query) {

            data[selectors] = query;
        },

        /**
         * delete query
         */
        // delete: function (selectors) {

        //     data[selectors] = null;
        // },

        /**
         * clear all data
         */
        clear: function () {

            data = {};
        }
    };
})();