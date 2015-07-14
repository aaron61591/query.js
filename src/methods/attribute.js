(function () {
    'use strict';

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
        class: 'className',
        style: 'style'
    };

    /**
     * get or set method
     */
    Attribute._method = function (setter, getter, isSingle) {

        return function (key, value) {

            if (isSingle && key !== undefined ||
                !isSingle && value !== undefined) {
                window.$.method._exec(this, function (e) {

                    setter(e, key, value);
                });
                this.promise.resolve();
            } else {
                return getter(this.els[0], key);
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
        }, true);
    };

    /**
     * genera attr method
     */
    Attribute._generaAttr = function () {

        return this._method(function (e, key, value) {

            e.setAttribute(key, value);
        }, function (e, key) {

            return e.getAttribute(key);
        });
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