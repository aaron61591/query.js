<img width="100"src="http://image.uc.cn/s/uae/g/01/phy3/images/QJ.jpg?v=0.0.1">
# Query.Js

QueryJs is an lightweight(5.8k) batch DOM operations library for Green Browser.

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

Check it from browser:

    http://127.0.0.1:4000
    
## API Reference

### $(selectors)

Create a Query Object

	$('#test') // query
	$('<div class="test">test</div>') // query
	
### query.text([text])

operate innerText

	$('#test').text('Hello QueryJs') // query
	$('#test').text() // 'Hello QueryJs'
	
### query.html([html])

operate innerHTML

	$('#test').html('<p>Hello QueryJs</p>') // query
	$('#test').html() // '<p>Hello QueryJs</p>'
	
### query.value([value])

operate value

	$('#input-name').value('my name') // query
	$('#input-name').value() // 'my name'
	
### query.style(attrName, [value])

operate style

	$('#test').style('width', '100px') // query
	$('#test').style('width') // 100px
	$('#test').style('width:100px; height:100px') // query
	
### query.attr(attrName, [value])

operate attr

	$('#test').attr('id') // test
	$('#test').attr('width', '100') // query
	
### query.class([class])

operate class

	$('.test').class() // test
	$('#test').class('test') // query
	
### query.addClass(class)

add class to element

	$('#test').addClass('class1') // query
	
### query.removeClass(class)

remove class from element

	$('#test').removeClass('class1') // query
	
### query.show([display])

show element

	$('#test').show() // query
	$('#btn-test').show('inline-block') // query
	
### query.hide()

hide element

	$('#test').hide() // query
	
### query.on(event, listener, [useCapture])

add a listener to element

	$('#test').on('click', fun1) // query
	
### query.off(event, listener, [useCapture])

remove a listener from element

	$('#test').off('click', fun1) // query
	
### query.append(query)

append the specified element as a child of father elements

	$('#test').append($('<li id="opt2">option2</li>')) // query
	
### query.insert(query, selectors)

inserts the specified elements before a reference selectors

	$('#test').insert($('<li id="opt1">option1</li>', '#opt2')) // query
	
### query.empty()

remove all children from the specified elements

	$('#test').empty() // query
	
### query.find()

get elements

	$('.test').find() // [div.test, div.test, ...]
	
### query.get()

get element

	$('#test').get() // <div id="test"></div>
	
### query.delay(time)

executes next query function after a specified delay.

	$('#test')
	.hide()
	.delay(1000)
	.show() // query

## License

[MIT](http://opensource.org/licenses/MIT)

Copyright (c) 2015 Aaron Peng