(function () {

    var m = window.$.method;

    /**
     * show element
     */
    function show(query, args) {

        m.exec(query, function (e) {

            e.style.display = args[0] || 'block';
        });

        query.promise.resolve();
    }

    /**
     * hide element
     */
    function hide(query) {

        m.exec(query, function (e) {

            e.style.display = 'none';
        });

        query.promise.resolve();
    }

    /**
     * add method
     */
    m.display = [
        'show', show,
        'hide', hide
    ];
})();