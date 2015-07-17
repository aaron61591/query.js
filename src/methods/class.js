(function () {

    /**
     * add class to elements
     */
    function addClass(query, args) {

        window.$.method._exec(query, function (e) {
            if (!_getExistRegExp(args[0]).test(e.className)) {
                e.className += e.className ? ' ' + args[0] : args[0];
            }
        });

        query.promise.resolve();
    }

    /**
     * remove class to elements
     */
    function removeClass(query, args) {

        window.$.method._exec(query, function (e) {

            e.className = e.className.replace(_getExistRegExp(args[0]), ' ').trim();
        });

        query.promise.resolve();
    }


    /**
     * exist regexp
     */
    function _getExistRegExp(className) {

        var exp = '^' + className + '$|^' + className + '\\s|\\s' + className + '\\s|\\s' + className + '$';

        return new RegExp(exp);
    }

    /**
     * setup methods
     */
    window.$.method.class = [
        'addClass', addClass,
        'removeClass', removeClass
    ];
})();