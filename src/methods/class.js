(function () {
    'use strict';

    /**
     * should i call this... class class?
     */
    function Class() {}

    /**
     * add class to elements
     */
    Class._getAddClass = function () {

        return function (className) {

            window.$.method._exec(this, function (e) {
                if (!Class._getExistRegExp(className).test(e.className)) {
                    e.className += e.className ? ' ' + className : className;
                }
            });

            this.promise.resolve();
        };
    };

    /**
     * remove class to elements
     */
    Class._getRemoveClass = function () {

        return function (className) {

            window.$.method._exec(this, function (e) {

                e.className = e.className.replace(Class._getExistRegExp(className), ' ').trim();
            });

            this.promise.resolve();
        };
    };


    /**
     * exist regexp
     */
    Class._getExistRegExp = function (className) {

        var exp = '^' + className + '$|^' + className + '\\s|\\s' + className + '\\s|\\s' + className + '$';

        return new RegExp(exp);
    };

    /**
     * setup methods
     */
    window.$.method.class = [
        'addClass', Class._getAddClass(),
        'removeClass', Class._getRemoveClass()
    ];
})();