var accum = require('./')
  , assert = require('assert')

decodeString_false(assert)
decodeString_true(assert)
objectMode(assert)

function decodeString_false(assert) {
  var stream = accum({decodeStrings: false})

  stream.write('hello')
  stream.write(' or something')
  stream.end()

  stream.on('data', function(data) {
    assert.deepEqual(data, new Buffer('hello or something'))
  })
}

function decodeString_true(assert) {
  var stream = accum({decodeStrings: true, encodig: 'utf8'})

  stream.write('hello')
  stream.write(' or something')
  stream.end()

  stream.on('data', function(data) {
    assert.deepEqual(data, new Buffer('hello or something'))
  })
}

function objectMode(assert) {
  var stream = accum({objectMode: true})

  stream.write('hello')
  stream.write(' or something')
  stream.end()

  stream.on('data', function(data) {
    assert.deepEqual(data, ['hello', ' or something'])
  })
}
