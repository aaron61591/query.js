(function () {

    var m = window.$.method;

    /**
     * get or set methods map
     */
    var METHODS = {
        text: 'innerText',
        html: 'innerHTML',
        value: 'value',
        class: 'className'
    };

    /**
     * get or set method
     */
    function _method(setter, getter, method) {

        return function (query, args) {

            if (method !== 'attr' && args[0] !== undefined ||
                method === 'attr' && args[1] !== undefined) {
                m.exec(query, function (e) {

                    setter(e, args[0], args[1]);
                });
                query.promise.resolve();
            } else {
                return getter(query.els[0], args[0]);
            }
        };
    }

    /**
     * genera attributes method
     */
    function _generaMethod(method) {

        return _method(function (e, key) {

            e[METHODS[method]] = key;
        }, function (e) {

            return e[METHODS[method]];
        }, method);
    }

    /**
     * genera attr method
     */
    function _generaAttr() {

        return _method(function (e, key, value) {

            e.setAttribute(key, value);
        }, function (e, key) {

            return e.getAttribute(key);
        }, 'attr');
    }

    /**
     * get methods
     */
    m.attribute = (function () {

        var methods = [];

        for (var name in METHODS) {
            if (METHODS.hasOwnProperty(name)) {
                console.log(name, _generaMethod(name));
                methods.push(name);
                methods.push(_generaMethod(name));
            }
        }

        methods.push('attr');
        methods.push(_generaAttr());

        return methods;
    })();
})();