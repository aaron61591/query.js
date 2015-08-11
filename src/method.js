(function () {

    /**
     * methods list
     */
    var list = [
        'attribute',
        'node',
        'class',
        'display',
        'event',
        'time',
        'search',
        'style'
    ];

    /**
     * get methods all
     */
    function _getMethods() {

        var i = list.length,
            methods = [];

        while (i--) {
            methods = methods.concat(window.$.method[list[i]]);
        }

        return methods;
    }

    /**
     * getter method
     */
    var GETTERS_EMPTY = [
        'text',
        'html',
        'value',
        'class'
    ];

    /**
     * getter method
     */
    var GETTERS_SINGLE = [
        'attr'
    ];

    /**
     * is synchronization
     */
    function _isSync(name, args) {

        if (name === 'find' || name === 'get') {
            return true;
        }

        if (!args.length && GETTERS_EMPTY.indexOf(name) !== -1) {
            return true;
        }

        if (args.length === 1 && GETTERS_SINGLE.indexOf(name) !== -1) {
            return true;
        }

        if (name === 'style' && args && args.length === 1 &&
            window.$.method.style.isSync(args[0])) {
            return true;
        }
    }

    /**
     * get methods all
     */
    function _convert(name, body) {

        return function () {

            var self = this,
                args = arguments;

            if (_isSync(name, args)) {
                return body(self, args);
            } else {
                this.promise.then(function () {

                    body(self, args);
                });

                return this;
            }
        };
    }

    window.$.method = {

        /**
         * push method
         */
        push: function (fun) {

            list.push(fun);
        },

        /**
         * push method
         */
        setup: function (Query) {

            var methods = _getMethods(),
                i = 0;

            console.log(methods);

            while (i < methods.length) {
                Query.prototype[methods[i]] = _convert(methods[i], methods[i += 1]);
                ++i;
            }
        },

        /**
         * exec query function
         */
        exec: function (query, fun) {

            var i = 0;
            while (i < query.els.length) {
                fun.call(query, query.els[i]);
                ++i;
            }
        }
    };
})();