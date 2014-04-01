var through = require('through2')

module.exports = accum

function accum(options) {
  var data = []

  var stream = through(options, write, end)

  return stream

  function write(chunk, encoding, callback) {
    data.push(chunk)
    callback()
  }

  function end(callback) {
    emit = options.objectMode ? data :
      options.decodeString ? Buffer.concat(data) : data.join('')

    stream.push(emit)
    callback()
  }
}

