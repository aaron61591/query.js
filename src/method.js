(function () {

    /**
     * class method
     */
    function Method() {}

    /**
     * methods list
     */
    Method.list = [
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
     * exec query function
     */
    Method._exec = function (query, fun) {

        var i = 0;
        while (i < query.els.length) {
            fun.call(query, query.els[i]);
            ++i;
        }
    };

    /**
     * get methods all
     */
    Method._getMethods = function () {

        var i = this.list.length,
            methods = [];

        while (i--) {
            methods = methods.concat(this[this.list[i]]);
        }

        return methods;
    };

    /**
     * getter method
     */
    Method.GETTERS_EMPTY = [
        'text',
        'html',
        'value',
        'class'
    ];

    /**
     * getter method
     */
    Method.GETTERS_SINGLE = [
        'attr'
    ];

    /**
     * whether sync style
     */
    Method._isSyncStyle = function (style) {

        if (style.indexOf(':') === -1) {
            return true;
        }
        return false;
    };

    /**
     * is synchronization
     */
    Method._isSync = function (name, args) {

        if (name === 'find' || name === 'get') {
            return true;
        }

        if (!args.length && this.GETTERS_EMPTY.indexOf(name) !== -1) {
            return true;
        }

        if (args.length === 1 && this.GETTERS_SINGLE.indexOf(name) !== -1) {
            return true;
        }

        if (name === 'style' && args && args.length === 1 && this._isSyncStyle(args[0])) {
            return true;
        }
    };

    /**
     * get methods all
     */
    Method._convert = function (name, body) {

        return function () {

            var self = this,
                args = arguments;

            if (Method._isSync(name, args)) {
                return body(self, args);
            } else {
                this.promise.then(function () {

                    body(self, args);
                });

                return this;
            }
        };
    };

    /**
     * push method
     */
    Method.push = function (fun) {

        this.list.push(fun);
    };

    /**
     * push method
     */
    Method.setup = function (Query) {

        var methods = this._getMethods(),
            i = 0;

        while (i < methods.length) {
            Query.prototype[methods[i]] = this._convert(methods[i], methods[i += 1]);
            ++i;
        }
    };

    window.$.method = Method;
})();