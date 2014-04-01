var through = require('through2')

module.exports = accum

function accum(options) {
  var data = []

  options = options || {}

  var stream = through(options, write, end)

  return stream

  function write(chunk, encoding, callback) {
    data.push(chunk)
    callback()
  }

  function end(callback) {
    emit = options.objectMode ? data :
      !options.decodeString ? data.join('') : Buffer.concat(data)

    stream.push(emit)
    callback()
  }
}

