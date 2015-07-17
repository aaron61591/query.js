(function () {

    /**
     * set or get element style
     */
    function style(query, args) {

        var key = args[0],
            value = args[1];
        if (value !== undefined ||
            value === undefined && !window.$.method._isSyncStyle(key)) {
            window.$.method._exec(query, function (e) {
                var m = _getMultiStyle(key),
                    i = 0;

                if (m) {
                    while (i < m.length) {
                        e.style[m[i]] = m[i += 1];
                        ++i;
                    }
                } else {
                    if (value === undefined && window.$.method._isSyncStyle(key)) {
                        return e.style[_getStyleName(key)];
                    } else {
                        e.style[_getStyleName(key)] = value;
                    }
                }
            });
            query.promise.resolve();
        } else {

            return query.els[0].style[key];
        }
    }


    /**
     * get style name
     */
    function _getStyleName(style) {

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
    function _getMultiStyle(str) {

        if (str.indexOf(':') !== -1) {
            var ss = str.split(';'),
                i = ss.length,
                pair, style = [];
            while (i--) {
                if (ss[i]) {
                    pair = ss[i].split(':');
                    style.push(_getStyleName(pair[0]).trim());
                    style.push(pair[1].trim());
                }
            }
            return style;
        } else {
            return null;
        }
    }

    window.$.method.style = [
        'style', style
    ];
})();