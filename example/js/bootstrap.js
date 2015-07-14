define(function (require, exports, module) {
    'use strict';

    require('query/main');

    $('#div-msg').text('Hello QueryJs');

    $('#div-test')
        .append($('<div id="msg-hello" class="msg-haha" style="color:red;">Hello QueryJs</div>'))
        .hide()
        .delay(1000)
        .show();

    module.exports = {};
});