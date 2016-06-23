(function () {

    /**
     * cache data
     */
    var data = {};

    window.$.cache = {

        /**
         * get query
         */
        // get: function (selectors) {
        get: function () {

            // return data[selectors];
            return null;
        },

        /**
         * set query
         */
        // set: function (selectors, query) {
        set: function () {

            // data[selectors] = query;
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