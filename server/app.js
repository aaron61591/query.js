'use strict';

var express = require('express'),
    app = express();

// 自动注入 livereload 和 weinre
var livereloadPort = 35729,
    weinreId = 'query',
    genScript = function (src) {
        return src ? '<script src="' + src + '"><\\/script>' : '';
    },
    // snippet = '';
    snippet = '\n<script>//<![CDATA[\ndocument.write(\'' +
        genScript('//\' + (location.hostname || \'localhost\') + \':' + livereloadPort + '/livereload.js') +
        (false ? genScript('//weinre.uae.ucweb.local/target/target-script-min.js#' + weinreId) : '') +
        '\')\n//]]></script>\n';

app.use(require('connect-inject')({
    snippet: snippet
}));

// 根目录
var basePath = process.cwd();
app.use(express.static(basePath));

app.get('/', function (req, res) {
    res.sendfile('example/index.html');
});

var port = process.env.PORT || 3000;
app.listen(port, function () {
    console.log('Server listening on port ' + port);
});
