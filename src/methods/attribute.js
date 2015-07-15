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
        class: 'className'
    };

    /**
     * get or set method
     */
    Attribute._method = function (setter, getter, method) {

        return function (key, value) {

            if (method !== 'attr' && method !== 'style' && key !== undefined ||
                method === 'attr' && value !== undefined ||
                method === 'style' && value !== undefined ||
                method === 'style' && value === undefined && !window.$.method._isSyncStyle(key)) {
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
        }, method);
    };

    /**
     * get style name
     */
    Attribute._getStyleName = function (style) {

        var frag = style.split('-'),
            i = 0,
            first = true,
            res = '';

        while (i < frag.length) {
            if (frag[i]) {
                if (first) {
                    res += frag[i];
                    first = false;
                } else {
                    res += frag[i][0].toUpperCase() + frag[i].substr(1);
                }
            }
            ++i;
        }

        return res;
    };

    /**
     * get multi style
     */
    Attribute._getMultiStyle = function (str) {

        if (str.indexOf(':') !== -1) {
            var ss = str.split(';'),
                i = ss.length,
                pair, style = [];
            while (i--) {
                if (ss[i]) {
                    pair = ss[i].split(':');
                    style.push(this._getStyleName(pair[0]).trim());
                    style.push(pair[1].trim());
                }
            }
            return style;
        } else {
            return null;
        }
    };

    /**
     * genera style method
     */
    Attribute._generaStyle = function () {

        return this._method(function (e, key, value) {

            var m = Attribute._getMultiStyle(key),
                i = 0;

            if (m) {
                while (i < m.length) {
                    e.style[m[i]] = m[i += 1];
                    ++i;
                }
            } else {
                if (value === undefined && window.$.method._isSyncStyle(key)) {
                    return e.style[Attribute._getStyleName(key)];
                } else {
                    e.style[Attribute._getStyleName(key)] = value;
                }
            }
        }, function (e, key) {

            return e.style[key];
        }, 'style');
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

        methods.push('style');
        methods.push(Attribute._generaStyle());

        return methods;
    })();
})();