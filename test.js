var accum = require('./')
  , assert = require('assert')

decodeString_false(assert)
decodeString_true(assert)
objectMode(assert)

function decodeString_false(assert) {
  var options = {decodeStrings: false}
  var stream = accum({decodeStrings: false})

  stream.write('hello')
  stream.write(' or something')
  stream.end()

  stream.on('data', function(data) {
    assert.deepEqual(data, new Buffer('hello or something'))
  })

  console.log('ok:', options)
}

function decodeString_true(assert) {
  var options = {decodeStrings: true}
  var stream = accum(options)

  stream.write('hello')
  stream.write(' or something')
  stream.end()

  stream.on('data', function(data) {
    assert.deepEqual(data, new Buffer('hello or something'))
  })

  console.log('ok:', options)
}

function objectMode(assert) {
  var options = {objectMode: true}
  var stream = accum(options)

  stream.write('hello')
  stream.write(' or something')
  stream.end()

  stream.on('data', function(data) {
    assert.deepEqual(data, ['hello', ' or something'])
  })

  console.log('ok:', options)
}
