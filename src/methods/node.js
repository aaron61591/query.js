(function () {

    var $ = window.$;

    /**
     * append element
     */
    function append(query, args) {

        $.method._exec(query, function (e) {

            e.appendChild(args[0].els[0]);
        });

        $.cache.delete(query.selectors);

        query.promise.resolve();
    }

    /**
     * insert node into dom tree
     */
    function insert(query, args) {

        query.els[0].insertBefore(args[0].els[0], document.querySelector(args[1]));

        $.cache.clear();

        query.promise.resolve();
    }

    /**
     * clear children element
     */
    function empty(query) {

        $.method._exec(query, function (e) {

            e.innerHTML = '';
        });

        $.cache.clear();

        query.promise.resolve();
    }

    /**
     * add methods
     */
    $.method.node = [
        'append', append,
        'empty', empty,
        'insert', insert
    ];
})();