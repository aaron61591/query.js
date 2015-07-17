(function () {

    /**
     * show element
     */
    function show(query, args) {

        window.$.method._exec(query, function (e) {

            e.style.display = args[0] || 'block';
        });

        query.promise.resolve();
    }

    /**
     * hide element
     */
    function hide(query) {

        window.$.method._exec(query, function (e) {

            if (e.style.display === 'none') {
                return;
            }
            e.style.display = 'none';
        });

        query.promise.resolve();
    }

    /**
     * add method
     */
    window.$.method.display = [
        'show', show,
        'hide', hide
    ];
})();