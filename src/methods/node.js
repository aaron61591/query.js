(function () {
    'use strict';

    var $ = window.$;

    /**
     * class Node
     */
    function Node() {}

    /**
     * append element
     */
    Node._getAppend = function () {

        return function (querySon) {

            $.method._exec(this, function (e) {

                e.appendChild(querySon.els[0]);
            });

            $.cache.delete(this.selectors);

            this.promise.resolve();
        };
    };

    /**
     * clear children element
     */
    Node._getEmpty = function () {

        return function () {

            $.method._exec(this, function (e) {

                e.innerHTML = '';
            });

            $.cache.clear();

            this.promise.resolve();
        };
    };

    /**
     * insert node into dom tree
     */
    Node._getInsert = function () {

        return function (sonNode, refSelectors) {

            this.els[0].insertBefore(sonNode.els[0], document.querySelector(refSelectors));

            $.cache.clear();

            this.promise.resolve();
        };
    };

    /**
     * add methods
     */
    $.method.node = [
        'append', Node._getAppend(),
        'empty', Node._getEmpty(),
        'insert', Node._getInsert()
    ];
})();