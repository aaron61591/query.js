(function () {

    var m = window.$.method,
        c = window.$.cache;

    /**
     * add class to elements
     */
    function addClass(query, args) {

        m.exec(query, function (e) {
            if (!_existRegExp(args[0]).test(e.className)) {
                e.className += e.className ? ' ' + args[0] : args[0];
            }
        });

        c.clear();

        query.promise.resolve();
    }

    /**
     * remove class to elements
     */
    function removeClass(query, args) {

        m.exec(query, function (e) {

            e.className = e.className.replace(_existRegExp(args[0]), ' ').trim();
        });

        c.clear();

        query.promise.resolve();
    }


    /**
     * exist regexp
     */
    function _existRegExp(className) {

        var exp = '^' + className + '$|^' + className + '\\s|\\s' + className + '\\s|\\s' + className + '$';

        return new RegExp(exp);
    }

    /**
     * setup methods
     */
    m.class = [
        'addClass', addClass,
        'removeClass', removeClass
    ];
})();