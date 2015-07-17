(function () {

    /**
     * class Generator
     */
    function Generator() {}

    /**
     * open html tag regexp
     */
    Generator.REG_HTML_OPEN = /^<([^>]+)>$/;

    /**
     * close html tag regexp
     */
    Generator.REG_HTML_CLOSE = /^<([^>]+)>([\s\S]*)<\/[^>]+>$/;

    /**
     * attributes regexp
     */
    Generator.REG_ATTRS = /([^=^\s]*)="([^"]*)"/g;

    /**
     * setup attributes
     */
    Generator._setupAttr = function (e, tagStr) {

        var m;
        while ((m = this.REG_ATTRS.exec(tagStr)) !== null) {
            e.setAttribute(m[1], m[2]);
        }
    };

    /**
     * create open elements
     */
    Generator._createElesOpen = function (html) {

        var m = this.REG_HTML_OPEN.exec(html),
            e = document.createElement(m[1].split(' ')[0]);

        this._setupAttr(e, m[1]);

        return e;
    };

    /**
     * create close elements
     */
    Generator._createElesClose = function (html) {

        var m = this.REG_HTML_CLOSE.exec(html),
            e = document.createElement(m[1].split(' ')[0]);

        this._setupAttr(e, m[1]);

        e.innerHTML = m[2];

        return e;
    };

    /**
     *  whether select query
     */
    Generator.isSelect = function (selectors) {

        return !(this.REG_HTML_OPEN.test(selectors) ||
            this.REG_HTML_CLOSE.test(selectors));
    };

    /**
     * create elements
     */
    Generator.createEles = function (query, html) {

        var e;
        if (this.REG_HTML_OPEN.test(html)) {
            e = this._createElesOpen(html);
        } else {
            e = this._createElesClose(html);
        }
        return query.els.push(e);
    };

    /**
     * gener element
     */
    window.$.generator = function (query, selectors) {

        if (Generator.isSelect(selectors)) {
            return null;
        } else {
            return Generator.createEles(query, selectors);
        }
    };
})();