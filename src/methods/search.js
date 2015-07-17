(function () {

    /**
     * find element list
     */
    function find(query) {

        return query.els;
    }

    /**
     * get single element
     */
    function get(query) {

        return query.els[0];
    }

    /**
     * add method
     */
    window.$.method.search = [
        'find', find,
        'get', get
    ];
})();