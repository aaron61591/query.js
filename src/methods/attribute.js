(function () {

    /**
     * class attribute
     */
    function Attribute() {}

    /**
     * get or set methods map
     */
    Attribute.METHODS_MAP = {
        text: 'innerText',
        html: 'innerHTML',
        value: 'value',
        class: 'className'
    };

    /**
     * get or set method
     */
    Attribute._method = function (setter, getter, method) {

        return function (query, args) {

            if (method !== 'attr' && args[0] !== undefined ||
                method === 'attr' && args[1] !== undefined) {
                window.$.method._exec(query, function (e) {

                    setter(e, args[0], args[1]);
                });
                query.promise.resolve();
            } else {
                return getter(query.els[0], args[0]);
            }
        };
    };

    /**
     * genera attributes method
     */
    Attribute._generaMethod = function (method) {

        var self = this;
        return this._method(function (e, key) {

            e[self.METHODS_MAP[method]] = key;
        }, function (e) {

            return e[self.METHODS_MAP[method]];
        }, method);
    };

    /**
     * genera attr method
     */
    Attribute._generaAttr = function () {

        return this._method(function (e, key, value) {

            e.setAttribute(key, value);
        }, function (e, key) {

            return e.getAttribute(key);
        }, 'attr');
    };

    /**
     * get methods
     */
    window.$.method.attribute = (function () {

        var methods = [];

        for (var name in Attribute.METHODS_MAP) {
            if (Attribute.METHODS_MAP.hasOwnProperty(name)) {
                methods.push(name);
                methods.push(Attribute._generaMethod(name));
            }
        }

        methods.push('attr');
        methods.push(Attribute._generaAttr());

        return methods;
    })();
})();