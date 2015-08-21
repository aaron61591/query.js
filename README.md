<img width="100"src="http://image.uc.cn/s/uae/g/01/phy3/images/QJ.jpg?v=0.0.1">
# Query.Js

QueryJs is an lightweight(4.8k) batch DOM operations library for Green Browser.

## Quick Start

### Install QueryJs

	bower install queryjs

### Get Source

Clone
	
	git clone git@github.com:aaron61591/query.js.git

Initialize project:

    npm install

Run it:

    grunt

Check it:

    http://127.0.0.1:4000
    
## API Reference

### $(selectors)

Create a query object

	$('#test') // query
	$('<div class="test">test</div>') // query
	
### query.text([text)

Operate innerText

	$('#test').text('Hello QueryJs') // query
	$('#test').text() // 'Hello QueryJs'
	
### query.html([html])

Operate innerHTML

	$('#test').html('<p>Hello QueryJs</p>') // query
	$('#test').html() // '<p>Hello QueryJs</p>'
	
### query.value([value])

Operate value

	$('#input-name').value('my name') // query
	$('#input-name').value() // 'my name'
	
### query.style(attrName, [value])

Operate style

	$('#test').style('width', '100px') // query
	$('#test').style('width') // 100px
	$('#test').style('width:100px; height:100px') // query
	
### query.attr(attrName, [value])

Operate attr

	$('#test').attr('id') // test
	$('#test').attr('width', '100') // query
	
### query.class([class])

Operate class

	$('.test').class() // test
	$('#test').class('test') // query
	
### query.addClass(class)

Add class to element

	$('#test').addClass('class1') // query
	
### query.removeClass(class)

Remove class from element

	$('#test').removeClass('class1') // query
	
### query.show([display])

Show element

	$('#test').show() // query
	$('#btn-test').show('inline-block') // query
	
### query.hide()

Hide element

	$('#test').hide() // query
	
### query.on(event, listener, [useCapture])

Add a listener to element

	$('#test').on('click', fun1) // query
	
### query.off(event, listener, [useCapture])

remove a listener from element

	$('#test').off('click', fun1) // query
	
### query.append(query)

Append the specified element as a child of father elements

	$('#test').append($('<li id="opt2">option2</li>')) // query
	
### query.insert(query, selectors)

Inserts the specified elements before a reference selectors

	$('#test').insert($('<li id="opt1">option1</li>', '#opt2')) // query
	
### query.empty()

Remove all children from the specified elements

	$('#test').empty() // query

### query.remove()

Remove a children from the specified elements

	$('#test').remove($('#son')); // query
	
### query.find()

Get elements

	$('.test').find() // [div.test, div.test, ...]
	
### query.get()

Get element

	$('#test').get() // <div id="test"></div>
	
### query.exec(fun)

Execuse function one times

	$('#test').exec(function() {
		console.log('hello ');
	}) // query

	
### query.each(fun)

Execused function by every child

	$('#test li').exec(function(q, i) {
		q.text('this is number ' + i);
	}) // query
	
### query.delay(time)

Executes next query function after a specified delay.

	$('#test')
	.hide()
	.delay(1000)
	.show() // query

## License

[MIT](http://opensource.org/licenses/MIT)

Copyright (c) 2015 Aaron Peng
