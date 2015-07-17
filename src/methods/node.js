(function () {

    var m = window.$.method,
        c = window.$.cache;

    /**
     * append element
     */
    function append(query, args) {

        m.exec(query, function (e) {

            e.appendChild(args[0].els[0]);
        });

        c.delete(query.selectors);

        query.promise.resolve();
    }

    /**
     * insert node into dom tree
     */
    function insert(query, args) {

        query.els[0].insertBefore(args[0].els[0], document.querySelector(args[1]));

        c.clear();

        query.promise.resolve();
    }

    /**
     * clear children element
     */
    function empty(query) {

        m.exec(query, function (e) {

            e.innerHTML = '';
        });

        c.clear();

        query.promise.resolve();
    }

    /**
     * add methods
     */
    m.node = [
        'append', append,
        'empty', empty,
        'insert', insert
    ];
})();