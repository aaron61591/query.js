(function () {


    /**
     * open html tag regexp
     */
    var HTML_OPEN = /^<([^>]+)>$/;

    /**
     * close html tag regexp
     */
    var HTML_CLOSE = /^<([^>]+)>([\s\S]*)<\/[^>]+>$/;

    /**
     * attributes regexp
     */
    var ATTRS = /([^=^\s]*)="([^"]*)"/g;

    /**
     * setup attributes
     */
    function _setAttr (e, tagStr) {

        var m;
        while ((m = ATTRS.exec(tagStr)) !== null) {
            e.setAttribute(m[1], m[2]);
        }
    }

    /**
     * create open elements
     */
    function _createOpen (html) {

        var m = HTML_OPEN.exec(html),
            e = document.createElement(m[1].split(' ')[0]);

        _setAttr(e, m[1]);

        return e;
    }

    /**
     * create close elements
     */
    function _createClose (html) {

        var m = HTML_CLOSE.exec(html),
            e = document.createElement(m[1].split(' ')[0]);

        _setAttr(e, m[1]);

        e.innerHTML = m[2];

        return e;
    }

    /**
     *  whether select query
     */
    function _isSelect (selectors) {

        return !(HTML_OPEN.test(selectors) ||
            HTML_CLOSE.test(selectors));
    }

    /**
     * create elements
     */
    function _createEles (query, html) {

        var e;
        if (HTML_OPEN.test(html)) {
            e = _createOpen(html);
        } else {
            e = _createClose(html);
        }
        return query.els.push(e);
    }

    /**
     * elements generator 
     */
    window.$.generator = {

        init: function (query, selectors) {

            if (_isSelect(selectors)) {
                return null;
            } else {
                return _createEles(query, selectors);
            }
        }
    };
})();