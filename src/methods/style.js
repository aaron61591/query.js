(function () {

    var m = window.$.method;

    /**
     * set or get element style
     */
    function style(query, args) {

        var key = args[0],
            value = args[1];

        if (value !== undefined ||
            value === undefined && !isSync(key)) {
            m.exec(query, function (e) {
                var m = _getMulti(key);

                if (m) {
                    _handleMulti(e, m);
                } else {
                    _handleSingle(e, key, value);
                }
            });
            query.promise.resolve();
        } else {

            return query.els[0].style[key];
        }
    }

    /**
     * handle multi args
     */
    function _handleMulti(e, m) {

        var i = m.length - 1;
        while (i > 0) {
            e.style[m[i - 1]] = m[i];
            i -= 2;
        }
    }

    /**
     * handle single args
     */
    function _handleSingle(e, key, value) {

        if (value === undefined && isSync(key)) {
            return e.style[_getName(key)];
        } else {
            e.style[_getName(key)] = value;
        }
    }

    /**
     * get style name
     */
    function _getName(style) {

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
    }

    /**
     * get multi style
     */
    function _getMulti(str) {

        if (str.indexOf(':') !== -1) {
            var ss = str.split(';'),
                i = ss.length,
                pair, style = [];
            while (i--) {
                if (ss[i]) {
                    pair = ss[i].split(':');
                    style.push(_getName(pair[0]).trim());
                    style.push(pair[1].trim());
                }
            }
            return style;
        } else {
            return null;
        }
    }

    /**
     * whether sync style
     */
    function isSync(style) {

        if (style.indexOf(':') === -1) {
            return true;
        }
        return false;
    }

    m.style = [
        'style', style
    ];

    m.style.isSync = isSync;
})();