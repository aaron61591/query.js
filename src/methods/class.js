(function () {

    var m = window.$.method,
        c = window.$.cache;

    /**
     * Check the element if it has the `class`
     * @param  {Query}   query
     * @param  {String}  args  Class string
     * @return {Boolean}       If the element has the `class`
     */
    function hasClass(query, args) {
        var clsArr = (args[0] || '').split(/\s+/),
            i = 0;
        for (; i < clsArr.length; i++) {
            if (clsArr[i].trim() && !_existRegExp(clsArr[i]).test(query.els[0].className)) {
                return false;
            }
        }
        return true;
    }

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

        return new RegExp('(^|\\s)' + className.trim() + '(\\s|$)');
    }

    /**
     * setup methods
     */
    m.class = [
        'hasClass', hasClass,
        'addClass', addClass,
        'removeClass', removeClass
    ];
})();
